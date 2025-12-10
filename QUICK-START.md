# Quick Start Guide - 0xio Wallet Recovery Tool

## TL;DR - Recover Your Wallet Now

### Option 1: Browser (Easiest)

1. Open `mnemonic-to-wallet.html` in your browser
2. Paste your 12-word seed phrase
3. Click "Recover Wallet"
4. Copy your address and private key

### Option 2: Command Line (Fastest)

```bash
# Install dependencies (one time only)
npm install tweetnacl

# Recover your wallet
node mnemonic-to-wallet.js "word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12"
```

## What This Tool Does

Converts your **12-word seed phrase** into:
- ✅ Wallet Address (e.g., `octH1gDMfecqW...`)
- ✅ Private Key (Base64 format)
- ✅ Public Key (Base64 format)

## Example

**Input:**
```
abandon ability able about above absent absorb abstract absurd abuse access accident
```

**Output:**
```
Address:         octH1gDMfecqW4ExycT6Pd99nmF2avrZcLQQrphvqjgFxfZ
Private Key:     KzNHm/LbrzxPiJTpcHJGw8Ozxtvr3LXN3x+oBFO+TtQ=
Public Key:      U0n18IQBPt+j2DJjHaEFzs3IfmAHiUNFKUhf/a3ImPQ=
```

## Use Cases

1. **Lost Extension Data** - Recover your wallet if you lost browser extension
2. **New Device** - Import wallet on another computer
3. **Backup Verification** - Verify your seed phrase is correct
4. **Import to Extension** - Get private key + address to import into wallet

## How to Import Into 0xio Extension

After recovering your wallet:

1. Open the 0xio wallet extension
2. Click "Import Wallet"
3. Enter:
   - **Wallet Name**: Any name you want
   - **Private Key**: Copy from recovery tool
   - **Wallet Address**: Copy from recovery tool
4. Click Import

## Security Reminders

🔒 **NEVER** share your seed phrase with anyone
🔒 **NEVER** enter it on websites you don't trust
🔒 Use offline for maximum security
🔒 Clear your screen after recovery

## Troubleshooting

**"Invalid mnemonic: expected 12 words"**
- Make sure you have exactly 12 words
- Separate words with single spaces
- Remove extra spaces at start/end

**"TweetNaCl not found" (CLI only)**
- Run: `npm install tweetnacl`

**Browser version not working**
- Make sure `libs/nacl.min.js` exists
- Try a different browser
- Check browser console (F12) for errors

## Files You Need

**For Browser:**
- `mnemonic-to-wallet.html` ← Open this
- `libs/nacl.min.js` ← Must exist

**For CLI:**
- `mnemonic-to-wallet.js` ← Run this
- `package.json` ← For dependencies
- Run `npm install` first

## Test It First

Use the test mnemonic to see it work:
```
abandon ability able about above absent absorb abstract absurd abuse access accident
```

**⚠️ DO NOT use this test mnemonic for real funds!** It's publicly known.

## Full Documentation

See `WALLET-RECOVERY-TOOL.md` for complete documentation including:
- Technical details
- Security best practices
- Integration examples
- Advanced usage

---

**Need Help?** Check the full documentation or open an issue on GitHub.
