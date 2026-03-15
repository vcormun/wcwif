# Publishing the WCWIF website on GitHub (GitHub Pages)

Follow these steps to put your site online with a URL like `https://YOUR-USERNAME.github.io/wcwif/`.

---

## 1. Create a GitHub account (if you don’t have one)

Go to [github.com](https://github.com) and sign up.

---

## 2. Create a new repository on GitHub

1. Click the **+** (top right) → **New repository**.
2. **Repository name:** e.g. `wcwif` (lowercase, no spaces). This will be in the URL.
3. **Public**, and leave “Add a README” **unchecked** (you already have files).
4. Click **Create repository**.

---

## 3. Push the website from your computer

Open **Terminal** (Mac) or **Command Prompt** (Windows) and run these commands. Replace `YOUR-USERNAME` and `wcwif` with your GitHub username and repo name if different.

```bash
# Go into the website folder (the one that contains index.html)
cd /Users/vitocormun/Library/CloudStorage/Dropbox/WCWIF/website

# Turn this folder into a Git repo
git init

# Add all files (HTML, CSS, JS, PDFs, README)
git add .

# First commit
git commit -m "Initial commit: WCWIF conference website"

# Rename the default branch to main (GitHub uses "main")
git branch -M main

# Add your GitHub repo as the remote (use YOUR repo URL from GitHub)
git remote add origin https://github.com/YOUR-USERNAME/wcwif.git

# Push to GitHub (you’ll be asked for your GitHub username and password/token)
git push -u origin main
```

**Note:** If GitHub asks for a password, use a **Personal Access Token** instead of your account password. Create one: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**. Give it “repo” scope and use it when the terminal asks for a password.

---

## 4. Turn on GitHub Pages

1. On GitHub, open your repo (e.g. `https://github.com/YOUR-USERNAME/wcwif`).
2. Click **Settings** → in the left sidebar, click **Pages** (under “Code and automation” or “Build and deployment”).
3. Under **Source**, choose **Deploy from a branch**.
4. Under **Branch**, select **main** and **/ (root)**.
5. Click **Save**.

After a minute or two, your site will be at:

**https://YOUR-USERNAME.github.io/wcwif/**

(If the repo name is `wcwif`; otherwise replace `wcwif` with your repo name.)

---

## 5. Updating the site later

After you change files in the `website` folder:

```bash
cd /Users/vitocormun/Library/CloudStorage/Dropbox/WCWIF/website
git add .
git commit -m "Update agenda / accommodation / etc."
git push
```

GitHub Pages will automatically update the site within a few minutes.
