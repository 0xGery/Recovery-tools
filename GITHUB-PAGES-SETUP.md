#  GitHub Pages Setup Guide

## Step-by-Step: Enable GitHub Pages for Your Recovery Tool

### Prerequisites

 GitHub account
 Repository created (or ready to create)
 Files ready to upload

---

##  Part 1: Create & Push to GitHub Repository

### Step 1: Create Repository on GitHub

1. **Go to GitHub**: https://github.com
2. **Click** the green "New" button (or the + icon → "New repository")
3. **Fill in details**:
   ```
   Repository name: 0xio-recovery-tools
   Description: Recover 0xio wallet from seed phrase
   Public  (must be public for free GitHub Pages)
    Add a README file (we already have one)
    Add .gitignore (we'll add later)
    Choose a license (optional: MIT)
   ```
4. **Click** "Create repository"

### Step 2: Push Your Code

Open terminal in the Recovery-Tools folder:

```bash
cd /Users/gery/Documents/0xio/Recovery-Tools

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: 0xio wallet recovery tools"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/0xio-recovery-tools.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Expected output:**
```
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
...
To https://github.com/YOUR-USERNAME/0xio-recovery-tools.git
 * [new branch]      main -> main
```

 **Files now on GitHub!** Let's enable Pages...

---

##  Part 2: Enable GitHub Pages

### Step 3: Navigate to Repository Settings

1. **Go to your repository**:
   ```
   https://github.com/YOUR-USERNAME/0xio-recovery-tools
   ```

2. **Click** the "Settings" tab ( icon at the top right of the page)
   - It's next to "Insights"
   - You'll see it in the horizontal menu bar

### Step 4: Find Pages Section

**In Settings:**

1. **Look at the left sidebar**
2. **Scroll down** to the "Code and automation" section
3. **Click** "Pages" (it has a  icon)

### Step 5: Configure Pages Settings

You'll see the **"GitHub Pages"** configuration page.

**Under "Build and deployment":**

1. **Source**:
   - Click the dropdown that says "None"
   - Select: **"Deploy from a branch"**

2. **Branch**:
   - First dropdown: Select **"main"** (or "master" if that's your default)
   - Second dropdown: Select **"/ (root)"**

   It should look like:
   ```
   Branch: [main ▼] [/ (root) ▼]
   ```

3. **Click** the blue **"Save"** button

### Step 6: Wait for Deployment

After clicking Save:

1. You'll see a message: **"GitHub Pages source saved"**
2. The page will refresh
3. At the top, you'll see a blue box saying:
   ```
   ⓘ Your site is ready to be published at
   https://YOUR-USERNAME.github.io/0xio-recovery-tools/
   ```

**Initial build takes 1-2 minutes** ⏱

### Step 7: Verify It's Live

After ~2 minutes:

1. **Refresh the Settings → Pages page**
2. The blue box will turn **GREEN** :
   ```
    Your site is live at
   https://YOUR-USERNAME.github.io/0xio-recovery-tools/
   ```

3. **Click the URL** or visit:
   ```
   https://YOUR-USERNAME.github.io/0xio-recovery-tools/mnemonic-to-wallet.html
   ```

---

##  You're Done!

### Your Tool is Now Live At:

```
https://YOUR-USERNAME.github.io/0xio-recovery-tools/mnemonic-to-wallet.html
```

**You can now:**
-  Access from ANY device with internet
-  Share the link with others
-  Use at workplace (no installation needed)
-  Add to phone home screen
-  Bookmark it

---

##  Visual Guide (What You'll See)

### Settings Tab Location
```
[Code] [Issues] [Pull requests] [Actions] [Projects] [Wiki] [Security] [Insights] [Settings]
                                                                                      ↑ Click here
```

### Left Sidebar in Settings
```
Settings
├── General
├── Access
│   └── Collaborators
├── Code and automation
│   ├── Branches
│   ├── Tags
│   ├── Actions
│   ├── Webhooks
│   ├── Environments
│   └── Pages ← Click here!
└── Security
```

### Pages Configuration Panel
```
┌─────────────────────────────────────────┐
│ GitHub Pages                             │
├─────────────────────────────────────────┤
│                                          │
│ Build and deployment                     │
│                                          │
│ Source                                   │
│ ┌──────────────────────────────────┐   │
│ │ Deploy from a branch         ▼  │   │
│ └──────────────────────────────────┘   │
│                                          │
│ Branch                                   │
│ ┌─────────┐ ┌──────────┐              │
│ │ main ▼ │ │ /(root) ▼│  [Save]       │
│ └─────────┘ └──────────┘              │
│                                          │
└─────────────────────────────────────────┘
```

---

##  Troubleshooting

### "I don't see the Settings tab"

**Problem**: You might not have permission
**Solution**: Make sure you're the owner of the repository

### "Pages option is greyed out"

**Problem**: Repository might be private
**Solution**: GitHub Pages is free for **public** repos only
1. Go to Settings → General
2. Scroll to bottom → "Danger Zone"
3. Click "Change visibility" → Make public

### "Build failed" or "404 error"

**Problem**: Files not in the right place
**Solution**:
1. Make sure files are in the root (not in a subfolder)
2. Check that `mnemonic-to-wallet.html` exists in your repo
3. Wait a few more minutes (can take up to 10 minutes)

### "Site not updating after I push changes"

**Problem**: GitHub Pages cache
**Solution**:
1. Wait 1-2 minutes after pushing
2. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Clear browser cache
4. Try incognito/private window

---

##  Advanced: Custom Domain (Optional)

If you want a custom domain like `wallet.yourdomain.com`:

1. In Pages settings, find "Custom domain"
2. Enter your domain: `wallet.yourdomain.com`
3. Click Save
4. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add CNAME record: `wallet` → `YOUR-USERNAME.github.io`
   - Wait for DNS propagation (up to 24 hours)

---

##  Check Deployment Status

### Method 1: Actions Tab

1. Click "Actions" tab in your repo
2. You'll see workflow runs for "pages build and deployment"
3. Green  = Success, Red  = Failed

### Method 2: Deployments

1. On your repo main page
2. Right sidebar → "Deployments"
3. Click "github-pages"
4. See deployment history

---

##  Updating Your Site

Whenever you make changes:

```bash
cd /Users/gery/Documents/0xio/Recovery-Tools

# Make your changes to files...

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Wait 1-2 minutes
# Changes will be live automatically!
```

---

##  Quick Reference Card

| Action | Command |
|--------|---------|
| **Push changes** | `git add . && git commit -m "msg" && git push` |
| **View site** | `https://YOUR-USERNAME.github.io/REPO-NAME/mnemonic-to-wallet.html` |
| **Check status** | Go to Actions tab on GitHub |
| **Settings** | Repo → Settings → Pages |

---

##  Final Checklist

Before sharing your tool, verify:

-  Repository is public
-  GitHub Pages is enabled
-  Source is set to "main" branch, "/ (root)"
-  Site shows green " Your site is live" message
-  Opening the URL works
-  `mnemonic-to-wallet.html` loads correctly
-  Tool functions (test with sample mnemonic)
-  All files loaded (check browser console - F12)

---

##  Pro Tips

1. **Bookmark Your Pages URL**: Save it for quick access
2. **Add to Phone**: Visit on mobile → Add to Home Screen
3. **Share Safely**: Only share with people who need wallet recovery
4. **Keep Updated**: Push improvements as you make them
5. **Monitor Usage**: Check "Traffic" in Insights tab

---

##  Still Need Help?

### Quick Fixes

**Can't find Settings tab?**
- Make sure you're logged in
- Check you're on the repository page (not your profile)

**Pages not deploying?**
- Check repo is public
- Verify files are in root directory
- Wait full 5 minutes
- Check Actions tab for errors

**404 on the page?**
- Verify filename is exactly `mnemonic-to-wallet.html`
- Check file is in root (not in a folder)
- Wait and try again

### Getting More Help

1. **GitHub Docs**: https://docs.github.com/en/pages
2. **GitHub Community**: https://github.community/
3. **Status Page**: https://www.githubstatus.com/

---

##  Success Indicators

You know it worked when:

1.  Green box in Settings → Pages: "Your site is live"
2.  URL opens without 404 error
3.  Tool interface displays correctly
4.  Test mnemonic recovery works
5.  Can access from different devices

---

**Congratulations! Your wallet recovery tool is now live on the internet!** 

Anyone with the URL can use it from anywhere - workplace, home, mobile device, etc.

**Your URL:**
```
https://YOUR-USERNAME.github.io/0xio-recovery-tools/mnemonic-to-wallet.html
```

Replace `YOUR-USERNAME` with your actual GitHub username.
