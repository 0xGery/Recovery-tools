# ✅ GitHub Pages Deployment Checklist

## Quick Start (TL;DR)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/0xio-recovery-tools.git
git push -u origin main

# 2. On GitHub website:
# Settings → Pages → Source: "main" branch → Save

# 3. Wait 2 minutes, then visit:
# https://YOUR-USERNAME.github.io/0xio-recovery-tools/mnemonic-to-wallet.html
```

---

## 📋 Complete Step-by-Step Checklist

### Part 1: Prepare Your Files

- [ ] Open terminal
- [ ] Navigate to Recovery-Tools folder
  ```bash
  cd /Users/gery/Documents/0xio/Recovery-Tools
  ```
- [ ] Verify all files are present
  ```bash
  ls -la
  # Should see: mnemonic-to-wallet.html, libs/, etc.
  ```

### Part 2: Create GitHub Repository

- [ ] Go to https://github.com
- [ ] Click your profile picture (top right)
- [ ] Click "Your repositories"
- [ ] Click green "New" button
- [ ] Fill in:
  - [ ] **Repository name**: `0xio-recovery-tools`
  - [ ] **Description**: `Recover 0xio wallet from seed phrase`
  - [ ] **Public** ✓ (must be checked!)
  - [ ] **Do NOT** check "Add a README file"
  - [ ] **Do NOT** check "Add .gitignore"
- [ ] Click "Create repository"
- [ ] **IMPORTANT**: Copy the URL shown (you'll need it)
  ```
  https://github.com/YOUR-USERNAME/0xio-recovery-tools.git
  ```

### Part 3: Push Code to GitHub

In terminal:

- [ ] Initialize git repository
  ```bash
  git init
  ```

- [ ] Add all files
  ```bash
  git add .
  ```

- [ ] Commit files
  ```bash
  git commit -m "Initial commit: 0xio wallet recovery tools"
  ```

- [ ] Add remote (paste YOUR URL)
  ```bash
  git remote add origin https://github.com/YOUR-USERNAME/0xio-recovery-tools.git
  ```

- [ ] Rename branch to main
  ```bash
  git branch -M main
  ```

- [ ] Push to GitHub
  ```bash
  git push -u origin main
  ```

- [ ] Verify: Check GitHub repo page - files should be visible

### Part 4: Enable GitHub Pages

- [ ] On your GitHub repository page, click **"Settings"** tab
  - Located at the top right of the page
  - Icon looks like ⚙️

- [ ] In left sidebar, scroll down to find **"Pages"**
  - Under "Code and automation" section
  - Click on "Pages"

- [ ] Under "Build and deployment":

  **Source:**
  - [ ] Click dropdown (currently says "None")
  - [ ] Select **"Deploy from a branch"**

  **Branch:**
  - [ ] First dropdown: Select **"main"**
  - [ ] Second dropdown: Select **"/ (root)"**

- [ ] Click blue **"Save"** button

- [ ] Wait for the page to refresh

### Part 5: Verify Deployment

- [ ] You should see a blue box at the top:
  ```
  ⓘ Your site is ready to be published at
  https://YOUR-USERNAME.github.io/0xio-recovery-tools/
  ```

- [ ] **Wait 2-3 minutes** for initial build

- [ ] Refresh the Settings → Pages page

- [ ] Blue box should turn **GREEN**:
  ```
  ✓ Your site is live at
  https://YOUR-USERNAME.github.io/0xio-recovery-tools/
  ```

### Part 6: Test Your Live Site

- [ ] Open in browser:
  ```
  https://YOUR-USERNAME.github.io/0xio-recovery-tools/mnemonic-to-wallet.html
  ```

- [ ] Verify page loads correctly

- [ ] Test with example mnemonic:
  ```
  abandon ability able about above absent absorb abstract absurd abuse access accident
  ```

- [ ] Check address appears:
  ```
  octH1gDMfecqW4ExycT6Pd99nmF2avrZcLQQrphvqjgFxfZ
  ```

- [ ] Test "Copy" buttons work

- [ ] Test on mobile device (optional)

### Part 7: Save & Share

- [ ] Bookmark the URL
- [ ] Save URL to a secure note
- [ ] (Optional) Share with trusted people

---

## 🎯 Success Criteria

✅ All of these should be TRUE:

1. ✅ Green checkmark in GitHub Settings → Pages
2. ✅ URL opens without errors
3. ✅ Tool interface visible
4. ✅ Test recovery works
5. ✅ No console errors (press F12 to check)

---

## ⚠️ Common Issues & Solutions

### Issue: "Settings tab is missing"

**Solution:**
- Make sure you're logged into GitHub
- Verify you're on the repository page
- Check you're the owner of the repo

### Issue: "Pages option not in sidebar"

**Solution:**
- Repository must be PUBLIC
- Go to Settings → General → scroll to bottom
- "Change repository visibility" → Make public

### Issue: "404 Not Found" when visiting site

**Possible causes:**

1. **Not enough time passed**
   - [ ] Wait 5 full minutes
   - [ ] Try again

2. **Wrong URL**
   - [ ] Check spelling
   - [ ] Format: `https://USERNAME.github.io/REPO-NAME/FILE.html`
   - [ ] Username is case-sensitive!

3. **File not in root**
   - [ ] On GitHub, verify `mnemonic-to-wallet.html` is visible at top level
   - [ ] Should NOT be inside a folder

4. **Build failed**
   - [ ] Click "Actions" tab
   - [ ] Check latest workflow run
   - [ ] Look for errors (red X)

### Issue: "Page loads but tool doesn't work"

**Solution:**
- [ ] Press F12 to open browser console
- [ ] Look for errors (red text)
- [ ] Common issue: `libs/nacl.min.js` not found
  - Verify `libs` folder exists in repo
  - Check `nacl.min.js` is inside it

### Issue: "Changes not showing up"

**Solution:**
- [ ] Did you push? `git push`
- [ ] Wait 2 minutes for rebuild
- [ ] Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- [ ] Try incognito/private window

---

## 🔄 Making Updates Later

When you need to update your tool:

```bash
# 1. Make changes to files
# 2. Then:

cd /Users/gery/Documents/0xio/Recovery-Tools
git add .
git commit -m "Update: describe your changes"
git push

# 3. Wait 1-2 minutes
# 4. Refresh browser to see changes
```

---

## 📱 Mobile Setup (Add to Home Screen)

### iPhone/iPad
1. Open URL in Safari
2. Tap Share button (square with arrow)
3. Scroll down, tap "Add to Home Screen"
4. Name it "0xio Recovery"
5. Tap "Add"
6. Now accessible like an app!

### Android
1. Open URL in Chrome
2. Tap menu (3 dots)
3. Tap "Add to Home screen"
4. Name it "0xio Recovery"
5. Tap "Add"
6. Icon appears on home screen!

---

## 🔐 Security Verification

Before using for real funds:

- [ ] Verify URL is YOUR GitHub Pages URL
- [ ] Check browser address bar (HTTPS, no warnings)
- [ ] Open browser console (F12)
- [ ] Look for "Network" tab
- [ ] Refresh page
- [ ] Verify NO external requests (should only load from github.io)
- [ ] Disconnect internet
- [ ] Refresh page (should work from cache)
- [ ] Tool still functions offline ✓

---

## 💾 Backup Your Repo URL

Save this somewhere safe:

```
Repository: https://github.com/YOUR-USERNAME/0xio-recovery-tools
Live Site: https://YOUR-USERNAME.github.io/0xio-recovery-tools/mnemonic-to-wallet.html
```

---

## 🎓 Understanding GitHub Pages

**What is GitHub Pages?**
- Free web hosting by GitHub
- Serves static files (HTML, CSS, JS)
- HTTPS enabled automatically
- Great for tools like this

**How it works:**
1. You push files to GitHub
2. GitHub builds the site
3. Site is served at `username.github.io/repo-name/`
4. Updates automatically when you push changes

**Limitations:**
- Only static files (no server-side code)
- 1 GB size limit (we're only ~120 KB!)
- 100 GB bandwidth/month (more than enough)
- Must be public repo (for free tier)

---

## ✨ You're All Set!

Once deployed, you can:
- ✅ Use from any device
- ✅ Access at work (no installation)
- ✅ Share with others safely
- ✅ Update anytime via git push
- ✅ Use offline (browser cache)

**Your live URL:**
```
https://YOUR-USERNAME.github.io/0xio-recovery-tools/mnemonic-to-wallet.html
```

---

## 📞 Need More Help?

1. **Re-read this checklist** - check every box
2. **Check GITHUB-PAGES-SETUP.md** - detailed guide
3. **GitHub Docs**: https://pages.github.com/
4. **GitHub Support**: https://support.github.com/

---

**Deployment Date**: __________

**Your GitHub Username**: __________

**Repository URL**: __________

**Live Site URL**: __________

---

**Happy Deploying!** 🚀
