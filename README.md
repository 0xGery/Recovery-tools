#  0xio Wallet Recovery Tool

> Recover your 0xio wallet address and private key from your 12-word BIP39 seed phrase

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org)

##  Quick Start

###  Use Online (Easiest - No Installation)

**Just open this URL in your browser:**

```
https://YOUR-USERNAME.github.io/0xio-wallet-recovery/mnemonic-to-wallet.html
```

 That's it! Works on **any device** - desktop, mobile, tablet.

###  Use Offline (Most Secure)

```bash
# Clone and run
git clone https://github.com/YOUR-USERNAME/0xio-wallet-recovery.git
cd 0xio-wallet-recovery
npm install
node mnemonic-to-wallet.js "word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12"
```

##  What This Tool Does

Converts your **12-word seed phrase** into:

| Input | Output |
|-------|--------|
|  12-word mnemonic | →  Wallet Address (`octXXXXX...`) |
| | →  Private Key (Base64) |
| | →  Public Key (Base64) |

### Example

**Input:**
```
abandon ability able about above absent absorb abstract absurd abuse access accident
```

**Output:**
```
Address:      octH1gDMfecqW4ExycT6Pd99nmF2avrZcLQQrphvqjgFxfZ
Private Key:  KzNHm/LbrzxPiJTpcHJGw8Ozxtvr3LXN3x+oBFO+TtQ=
Public Key:   U0n18IQBPt+j2DJjHaEFzs3IfmAHiUNFKUhf/a3ImPQ=
```

 **Never use this example mnemonic for real funds!** It's publicly known.

##  Features

-  **Two Versions**: Browser (HTML) & CLI (Node.js)
-  **No Installation** (browser version)
-  **Fully Offline** capable
-  **Mobile Friendly** responsive design
-  **One-Click Copy** to clipboard
-  **100% Client-Side** - no data transmitted
-  **Open Source** - verify the code yourself
-  **BIP39 Standard** compliant
-  **Battle Tested** with comprehensive test suite

##  Use Cases

| Scenario | Solution |
|----------|----------|
|  Lost browser extension data | Recover wallet with seed phrase |
|  New workplace computer | Use browser version (no admin rights needed) |
|  Setting up new device | CLI version for quick import |
|  Verify backup | Confirm seed phrase generates correct address |
|  Mobile recovery | Open in phone browser |

##  Security

### Why It's Safe

1. ** Client-Side Only**: All cryptography runs in YOUR browser/computer
2. ** Zero Network Calls**: No data sent to any server
3. ** Open Source**: Inspect every line of code
4. ** Standard Crypto**: Uses BIP39, PBKDF2, Ed25519, TweetNaCl
5. ** HTTPS**: GitHub Pages uses SSL/TLS encryption

### Maximum Security Mode

For paranoid users (recommended for large amounts):

```bash
# 1. Download files
curl -O https://raw.githubusercontent.com/YOUR-USERNAME/0xio-wallet-recovery/main/mnemonic-to-wallet.html
mkdir -p libs
curl -o libs/nacl.min.js https://raw.githubusercontent.com/YOUR-USERNAME/0xio-wallet-recovery/main/libs/nacl.min.js

# 2. Disconnect from internet
# (Turn off WiFi)

# 3. Open mnemonic-to-wallet.html in browser
open mnemonic-to-wallet.html

# 4. Recover wallet

# 5. Close browser completely

# 6. Reconnect to internet
```

##  Documentation

| Document | Description |
|----------|-------------|
| [QUICK-START.md](QUICK-START.md) | Fast-track guide to recover your wallet |
| [WALLET-RECOVERY-TOOL.md](WALLET-RECOVERY-TOOL.md) | Complete technical documentation |
| [.github-deployment.md](.github-deployment.md) | GitHub Pages deployment guide |

##  Technical Details

### Derivation Process

```
Mnemonic (12 words)
    ↓ (PBKDF2-SHA512, 2048 iterations)
Seed (512 bits)
    ↓ (HMAC-SHA512 with "Octra seed")
Master Key (256 bits)
    ↓ (Ed25519 key pair generation)
Private Key + Public Key
    ↓ (SHA-256 → Base58)
Address (oct + Base58)
```

### Standards Used

- **BIP39**: Mnemonic generation standard
- **PBKDF2**: Key derivation (2048 iterations, SHA-512)
- **Ed25519**: Elliptic curve cryptography
- **TweetNaCl**: Cryptographic library
- **HMAC-SHA512**: Master key derivation
- **SHA-256**: Address hashing
- **Base58**: Address encoding

### Dependencies

**Browser version:**
- TweetNaCl (included in `libs/nacl.min.js`)

**CLI version:**
- Node.js ≥ 14.0.0
- `tweetnacl` (installed via npm)

## 🧪 Testing

Run the comprehensive test suite:

```bash
npm install
npm test
```

Expected output:
```
 Test 1: Valid 12-word mnemonic recovery
 Test 2: Invalid word count rejection
 Test 3: Empty mnemonic rejection
 Test 4: Mnemonic normalization
 Test 5: Case insensitivity
```

##  Advanced Usage

### Use as a Module

```javascript
const { WalletRecovery } = require('./mnemonic-to-wallet.js');

async function recoverMyWallet() {
    const recovery = new WalletRecovery();
    const mnemonic = "your twelve words here...";

    const result = await recovery.recoverFromMnemonic(mnemonic);

    if (result.success) {
        console.log('Address:', result.address);
        console.log('Private Key:', result.privateKey);
        console.log('Public Key:', result.publicKey);
    } else {
        console.error('Error:', result.error);
    }
}

recoverMyWallet();
```

### Import into 0xio Extension

After recovering your wallet:

1. Open 0xio wallet extension
2. Click "Import Wallet"
3. Fill in:
   - **Wallet Name**: Any name
   - **Private Key**: (from recovery tool)
   - **Wallet Address**: (from recovery tool)
4. Submit

##  Browser Compatibility

| Browser | Supported | Notes |
|---------|-----------|-------|
| Chrome |  Yes | Full support |
| Firefox |  Yes | Full support |
| Safari |  Yes | Full support |
| Edge |  Yes | Full support |
| Opera |  Yes | Full support |
| Mobile Safari |  Yes | iOS 10+ |
| Chrome Mobile |  Yes | Android 5+ |

## 🤝 Contributing

This tool was reverse-engineered from the legacy 0xio extension. Contributions welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement`
3. Make your changes
4. Run tests: `npm test`
5. Commit: `git commit -am 'Add improvement'`
6. Push: `git push origin feature/improvement`
7. Open a Pull Request

##  License

MIT License - see [LICENSE](LICENSE) file for details

##  Disclaimer

**Use at your own risk.**

- This tool is provided as-is with no warranty
- Always verify the source code before use
- Never share your seed phrase or private key
- Authors are not responsible for any loss of funds
- Not affiliated with official 0xio development team

##  Support

### Common Issues

**"Invalid mnemonic: expected 12 words"**
- Ensure exactly 12 words
- Separate with single spaces
- No leading/trailing spaces

**"TweetNaCl not found" (CLI)**
- Run: `npm install tweetnacl`

**Browser version not loading**
- Check `libs/nacl.min.js` exists
- Try different browser
- Check browser console (F12)

### Get Help

-  Check [QUICK-START.md](QUICK-START.md)
-  Read [WALLET-RECOVERY-TOOL.md](WALLET-RECOVERY-TOOL.md)
-  [Open an issue](https://github.com/YOUR-USERNAME/0xio-wallet-recovery/issues)

##  Similar Projects

- [iancoleman/bip39](https://github.com/iancoleman/bip39) - BIP39 tool
- [bitcoin/bips](https://github.com/bitcoin/bips) - Bitcoin standards

##  Stats

- **Lines of Code**: ~600 (HTML + JS)
- **Dependencies**: 1 (TweetNaCl)
- **Test Coverage**: 5 core tests
- **File Size**: ~35 KB total

##  Acknowledgments

- Original 0xio wallet extension developers
- TweetNaCl cryptography library
- BIP39 standard authors
- Open source community

---

<div align="center">

**Made with  for 0xio Wallet Users**

[Report Bug](https://github.com/YOUR-USERNAME/0xio-wallet-recovery/issues) ·
[Request Feature](https://github.com/YOUR-USERNAME/0xio-wallet-recovery/issues) ·
[Documentation](WALLET-RECOVERY-TOOL.md)

</div>
