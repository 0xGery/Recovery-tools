# 0xio Wallet Recovery Tool

This tool allows you to recover your wallet address and private key from your BIP39 seed phrase (mnemonic).

## 🔒 Security Warning

**NEVER share your seed phrase or private key with anyone!**

- These tools run entirely locally (browser-based or CLI)
- No data is transmitted over the network
- Keep your seed phrase and private key secure
- Only use these tools on a trusted, secure device

## 📋 What You Get

From your 12-word seed phrase, this tool derives:
- **Wallet Address** - Your public Octra wallet address (starting with `oct`)
- **Private Key** - Your private key in Base64 format
- **Public Key** - Your public key in Base64 format

## 🌐 Browser Version (HTML)

### Usage

1. Open `mnemonic-to-wallet.html` in your web browser
2. Enter your 12-word seed phrase
3. Click "Recover Wallet"
4. Copy your address and private key

### Features

- Clean, modern UI
- One-click copy to clipboard
- No installation required
- Works offline after initial load
- Mobile-friendly responsive design

### Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- The `libs/nacl.min.js` file must be in the same directory structure

## 💻 Command Line Version (Node.js)

### Installation

First, install the required dependencies:

```bash
cd /Users/gery/Documents/0xio/Legacy/legacy-0xio-extension
npm install tweetnacl
```

### Usage

```bash
# Basic usage
node mnemonic-to-wallet.js "word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12"

# Example with sample mnemonic
node mnemonic-to-wallet.js "abandon ability able about above absent absorb abstract absurd abuse access accident"
```

### Output Example

```
╔════════════════════════════════════════════════╗
║    0xio Wallet Recovery Tool - CLI Version    ║
╚════════════════════════════════════════════════╝

⚠️  Security Warning: Never share your seed phrase or private key!

Processing seed phrase...

✓ Wallet recovered successfully!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Wallet Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Address:
  octXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Private Key (Base64):
  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Public Key (Base64):
  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## 🔧 How It Works

The tool follows the official 0xio wallet derivation process:

1. **Mnemonic to Seed**: Converts your 12-word BIP39 mnemonic to a 512-bit seed using PBKDF2-SHA512 with 2048 iterations
2. **Master Key Derivation**: Derives the master private key using HMAC-SHA512 with the key "Octra seed"
3. **Key Pair Generation**: Creates an Ed25519 signing key pair from the master private key using TweetNaCl
4. **Address Derivation**: Derives the wallet address by:
   - SHA-256 hashing the public key
   - Base58 encoding the hash
   - Prepending "oct" prefix

This is the exact same process used by the official 0xio wallet extension.

## 📁 Files

- `mnemonic-to-wallet.html` - Browser-based recovery tool (standalone, user-friendly)
- `mnemonic-to-wallet.js` - Node.js CLI tool (scriptable, automation-friendly)
- `WALLET-RECOVERY-TOOL.md` - This documentation file

## 🔍 Technical Details

### Cryptographic Standards

- **BIP39**: Standard for mnemonic seed phrases
- **PBKDF2**: Key derivation function with SHA-512
- **Ed25519**: Elliptic curve signature algorithm (via TweetNaCl)
- **HMAC-SHA512**: Master key derivation
- **SHA-256**: Address hashing
- **Base58**: Address encoding (Bitcoin-style alphabet)

### Key Formats

- **Private Key**: 32 bytes (256 bits), encoded in Base64
- **Public Key**: 32 bytes (256 bits), encoded in Base64
- **Address**: "oct" + Base58(SHA-256(publicKey))

## 🚀 Use Cases

1. **Wallet Recovery**: Recover access to your wallet if you've lost your browser extension data
2. **Multi-Device Setup**: Import your wallet on a new device
3. **Backup Verification**: Verify your seed phrase produces the correct address
4. **Development**: Generate test wallets for development purposes
5. **Automation**: Use the CLI version in scripts for bulk wallet operations

## ⚙️ Integration Example

You can use the Node.js version as a module in your own code:

```javascript
const { WalletRecovery } = require('./mnemonic-to-wallet.js');

async function example() {
    const recovery = new WalletRecovery();
    const mnemonic = "word1 word2 word3 ... word12";

    const result = await recovery.recoverFromMnemonic(mnemonic);

    if (result.success) {
        console.log('Address:', result.address);
        console.log('Private Key:', result.privateKey);
    } else {
        console.error('Error:', result.error);
    }
}

example();
```

## 🛡️ Security Best Practices

1. **Offline Usage**: For maximum security, use these tools on an air-gapped computer
2. **Clear Memory**: Close your browser/terminal after use
3. **Secure Storage**: Store your seed phrase in a secure, offline location
4. **Verify Source**: Always verify you're using the legitimate tool (check file hashes)
5. **No Screenshots**: Never take screenshots of your seed phrase or private keys
6. **Physical Backup**: Write down your seed phrase on paper as a backup

## 📝 Troubleshooting

### "Invalid mnemonic: expected 12 words, got X"
- Ensure your seed phrase has exactly 12 words
- Words should be separated by single spaces
- Remove any leading/trailing spaces

### "Failed to recover wallet"
- Verify your seed phrase is correct
- Check for typos in the words
- Ensure you're using BIP39 standard words

### Browser version not loading
- Check that `libs/nacl.min.js` is in the correct location
- Try opening in a different browser
- Check browser console for errors (F12)

### CLI version: "TweetNaCl not found"
- Run `npm install tweetnacl` in the same directory
- Ensure Node.js is installed (`node --version`)

## 📄 License

This tool is part of the 0xio Legacy wallet extension project.

## ⚠️ Disclaimer

Use this tool at your own risk. Always verify the source code before use. The authors are not responsible for any loss of funds due to misuse of this tool.

---

**Made for 0xio Wallet Users** | Reverse-engineered from legacy-0xio-extension
