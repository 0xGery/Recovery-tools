#!/usr/bin/env node

/**
 * 0xio Wallet Recovery CLI Tool
 * Recover wallet address and private key from BIP39 seed phrase
 *
 * Usage:
 *   node mnemonic-to-wallet.js "word1 word2 word3 ... word12"
 *
 * Dependencies:
 *   npm install tweetnacl tweetnacl-util
 */

const crypto = require('crypto');

// TweetNaCl for Ed25519
let nacl;
try {
    nacl = require('tweetnacl');
} catch (e) {
    console.error('\x1b[31mError: TweetNaCl not found. Please install dependencies:\x1b[0m');
    console.error('npm install tweetnacl tweetnacl-util');
    process.exit(1);
}

class WalletRecovery {
    constructor() {
        this.privateKey = null;
        this.publicKey = null;
        this.signingKey = null;
    }

    // Convert string to bytes
    stringToBytes(str) {
        return Buffer.from(str, 'utf8');
    }

    // Convert bytes to base64
    bytesToBase64(bytes) {
        return Buffer.from(bytes).toString('base64');
    }

    // Convert bytes to hex
    bytesToHex(bytes) {
        return Buffer.from(bytes).toString('hex');
    }

    // Convert hex to bytes
    hexToBytes(hex) {
        return Buffer.from(hex, 'hex');
    }

    // SHA-256 hash
    sha256(data) {
        return crypto.createHash('sha256').update(Buffer.from(data)).digest();
    }

    // Base58 encoding
    bytesToBase58(bytes) {
        const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

        if (bytes.length === 0) return '';
        let num = 0n;
        for (let i = 0; i < bytes.length; i++) {
            num = num * 256n + BigInt(bytes[i]);
        }
        let encoded = '';
        while (num > 0n) {
            const remainder = num % 58n;
            num = num / 58n;
            encoded = alphabet[Number(remainder)] + encoded;
        }
        for (let i = 0; i < bytes.length && bytes[i] === 0; i++) {
            encoded = '1' + encoded;
        }

        return encoded;
    }

    // HMAC-SHA512
    hmacSha512(key, data) {
        return crypto.createHmac('sha512', Buffer.from(key))
            .update(Buffer.from(data))
            .digest();
    }

    // Convert mnemonic to seed using PBKDF2 (BIP39 standard)
    async mnemonicToSeed(mnemonic, passphrase = "") {
        return new Promise((resolve, reject) => {
            const mnemonicBuffer = this.stringToBytes(mnemonic);
            const saltBuffer = this.stringToBytes("mnemonic" + passphrase);

            crypto.pbkdf2(
                mnemonicBuffer,
                saltBuffer,
                2048,  // iterations
                64,    // key length (512 bits)
                'sha512',
                (err, derivedKey) => {
                    if (err) reject(err);
                    else resolve(new Uint8Array(derivedKey));
                }
            );
        });
    }

    // Derive master key using "Octra seed" HMAC
    deriveMasterKey(seed) {
        const key = this.stringToBytes("Octra seed");
        const hmac = this.hmacSha512(key, seed);

        return {
            privateKey: new Uint8Array(hmac.slice(0, 32)),
            chainCode: new Uint8Array(hmac.slice(32, 64))
        };
    }

    // Derive address from public key
    deriveAddress(publicKey) {
        try {
            const publicKeyBytes = Buffer.from(publicKey, 'base64');
            const hash = this.sha256(publicKeyBytes);
            const base58Hash = this.bytesToBase58(hash);
            return 'oct' + base58Hash;
        } catch (error) {
            throw new Error('Failed to derive address: ' + error.message);
        }
    }

    // Main recovery function: mnemonic -> address + private key
    async recoverFromMnemonic(mnemonic) {
        try {
            // Normalize mnemonic (trim and single space)
            const normalizedMnemonic = mnemonic.trim().toLowerCase().replace(/\s+/g, ' ');

            // Validate word count
            const words = normalizedMnemonic.split(' ');
            if (words.length !== 12) {
                throw new Error(`Invalid mnemonic: expected 12 words, got ${words.length}`);
            }

            // Convert mnemonic to seed
            const seed = await this.mnemonicToSeed(normalizedMnemonic);

            // Derive master key
            const masterKey = this.deriveMasterKey(seed);

            // Create signing key pair
            this.signingKey = nacl.sign.keyPair.fromSeed(masterKey.privateKey);

            const privateKeyRaw = masterKey.privateKey;
            const publicKeyRaw = this.signingKey.publicKey;

            const privateKeyB64 = this.bytesToBase64(privateKeyRaw);
            const publicKeyB64 = this.bytesToBase64(publicKeyRaw);

            // Derive address
            const address = this.deriveAddress(publicKeyB64);

            this.privateKey = privateKeyB64;
            this.publicKey = publicKeyB64;

            return {
                success: true,
                address: address,
                privateKey: privateKeyB64,
                publicKey: publicKeyB64,
                seedHex: this.bytesToHex(seed),
                privateKeyHex: this.bytesToHex(privateKeyRaw),
                publicKeyHex: this.bytesToHex(publicKeyRaw)
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }
}

// CLI Interface
async function main() {
    console.log('\n\x1b[36m╔════════════════════════════════════════════════╗\x1b[0m');
    console.log('\x1b[36m║    0xio Wallet Recovery Tool - CLI Version    ║\x1b[0m');
    console.log('\x1b[36m╚════════════════════════════════════════════════╝\x1b[0m\n');

    // Get mnemonic from command line arguments
    const args = process.argv.slice(2);
    let mnemonic = args.join(' ');

    if (!mnemonic) {
        console.log('\x1b[33mUsage:\x1b[0m');
        console.log('  node mnemonic-to-wallet.js "word1 word2 word3 ... word12"\n');
        console.log('\x1b[33mExample:\x1b[0m');
        console.log('  node mnemonic-to-wallet.js "abandon ability able about above absent absorb abstract absurd abuse access accident"\n');
        process.exit(1);
    }

    console.log('\x1b[90m⚠️  Security Warning: Never share your seed phrase or private key!\x1b[0m\n');
    console.log('Processing seed phrase...\n');

    const recovery = new WalletRecovery();
    const result = await recovery.recoverFromMnemonic(mnemonic);

    if (result.success) {
        console.log('\x1b[32m✓ Wallet recovered successfully!\x1b[0m\n');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('\x1b[1mWallet Information:\x1b[0m');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

        console.log('\x1b[36mAddress:\x1b[0m');
        console.log('  ' + result.address + '\n');

        console.log('\x1b[36mPrivate Key (Base64):\x1b[0m');
        console.log('  ' + result.privateKey + '\n');

        console.log('\x1b[36mPublic Key (Base64):\x1b[0m');
        console.log('  ' + result.publicKey + '\n');

        console.log('\x1b[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m');
        console.log('\x1b[90mTechnical Details (Hex Format):\x1b[0m');
        console.log('\x1b[90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m\n');

        console.log('\x1b[90mSeed (Hex):\x1b[0m');
        console.log('\x1b[90m  ' + result.seedHex + '\x1b[0m\n');

        console.log('\x1b[90mPrivate Key (Hex):\x1b[0m');
        console.log('\x1b[90m  ' + result.privateKeyHex + '\x1b[0m\n');

        console.log('\x1b[90mPublic Key (Hex):\x1b[0m');
        console.log('\x1b[90m  ' + result.publicKeyHex + '\x1b[0m\n');

    } else {
        console.log('\x1b[31m✗ Failed to recover wallet\x1b[0m');
        console.log('\x1b[31mError: ' + result.error + '\x1b[0m\n');
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main().catch(error => {
        console.error('\x1b[31mUnexpected error:', error.message, '\x1b[0m');
        process.exit(1);
    });
}

// Export for use as module
module.exports = { WalletRecovery };
