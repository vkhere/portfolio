# SETUP.md

# ⚙ Setup Guide

Complete guide to set up, run, and deploy Vinay Kumar's portfolio website.

---

## Prerequisites

| Tool                      | Version       | Required? |
|---------------------------|---------------|-----------|
| Modern Web Browser        | Chrome 90+    | ✅ Yes     |
| Code Editor               | VS Code (recommended) | Optional |
| Git                       | 2.x+          | Optional (for version control) |
| Node.js                   | 18+ (for dev server only) | Optional |
| Internet connection        | -             | For Google Fonts |

> **Note:** This is a pure static website. No Node.js, no build tools, and no package managers are required to simply open and view the site.

---

## Option A: Open Directly (Simplest)

The fastest way to view the portfolio:

1. Open **File Explorer** and navigate to:
   ```
   C:\Users\DELL\Documents\Portfolio\
   ```

2. Double-click `index.html`

3. The portfolio opens in your default browser. ✅

> **Limitation:** Some browsers may block local file requests for fonts from Google Fonts if you're offline. Use Option B for a proper local server experience.

---

## Option B: VS Code Live Server (Recommended for Development)

### Step 1: Install VS Code
Download from [https://code.visualstudio.com](https://code.visualstudio.com)

### Step 2: Install Live Server Extension
1. Open VS Code
2. Go to **Extensions** (Ctrl + Shift + X)
3. Search: `Live Server`
4. Install by **Ritwick Dey** ✅

### Step 3: Open Portfolio Folder
```
File → Open Folder → C:\Users\DELL\Documents\Portfolio
```

### Step 4: Launch Live Server
- Right-click `index.html` in the file explorer
- Select **"Open with Live Server"**
- Browser opens at `http://127.0.0.1:5500/index.html`

✅ **Live reload** - any file changes are reflected instantly.

---

## Option C: Python Simple HTTP Server

If Python is installed:

```powershell
# PowerShell - navigate to Portfolio folder
cd C:\Users\DELL\Documents\Portfolio

# Python 3
python -m http.server 8080

# Open browser at
Start-Process "http://localhost:8080"
```

---

## Option D: Node.js HTTP Server

```powershell
# Install serve globally (one-time)
npm install -g serve

# Navigate to Portfolio folder
cd C:\Users\DELL\Documents\Portfolio

# Start server
serve .

# Access at http://localhost:3000
```

---

## File Structure Verification

After setup, verify these files exist:

```
Portfolio/
├── index.html          ← Main page
├── css/
│   ├── style.css       ← Core stylesheet
│   └── animations.css  ← Animation keyframes
├── js/
│   └── main.js         ← Interactive JavaScript
├── Resume_Vinay.pdf    ← Downloadable resume (for download button)
├── Resume_Vinay.png    ← Resume image
├── README.md
├── REQUIREMENTS.md
├── PRD.md
├── SKILLS.md
├── RULES.md
├── ACTION PLAN.md
├── LEARNINGS.md
├── SETUP.md            ← This file
└── WALKTHROUGH.md
```

---

## Deployment Guide

### Deploy to GitHub Pages (Free)

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio setup"
   ```

2. **Create repo on GitHub.com**
  - Go to [github.com/new](https://github.com/new)
  - Name it: `portfolio` or `vinaykumar.github.io`

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
  - Go to repo Settings → Pages
  - Source: `Deploy from branch` → `main` → `/ (root)`
  - Click **Save**
  - URL: `https://YOUR_USERNAME.github.io/portfolio/`

---

### Deploy to Netlify (Free - Recommended)

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `Portfolio` folder
4. Site is live instantly at a `*.netlify.app` URL

**Or via GitHub integration:**
1. Connect Netlify to your GitHub repository
2. Netlify auto-deploys on every `git push`

---

### Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm install -g vercel

# From Portfolio directory
cd C:\Users\DELL\Documents\Portfolio
vercel

# Follow prompts - deployed in seconds
```

---

## Customization Quick Reference

### Update Contact Details
Edit `index.html` - search for `vinayhereon@gmail.com`:
```html
<a href="mailto:vinayhereon@gmail.com">vinayhereon@gmail.com</a>
```

### Update Hero Stats
Edit `index.html` - find `.hero-stats`:
```html
<span class="stat-num">5+</span>
<span class="stat-label">Years Experience</span>
```

### Update Skill Bar Percentages
Edit `index.html` - find `data-width`:
```html
<div class="skill-bar-fill" data-width="94"></div>
```

### Change Accent Color
Edit `css/style.css` - change `:root` variable:
```css
:root {
  --accent: #00d4ff; /* Change this */
}
```

### Add Real Email to Contact Form
1. Create account at [formspree.io](https://formspree.io)
2. Create a form and get the endpoint URL
3. In `js/main.js`, replace the `setTimeout` simulation:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
}).then(() => showFormMsg('Message sent!', 'success'));
```

---

## Troubleshooting

| Issue                           | Solution                                                   |
|---------------------------------|------------------------------------------------------------|
| Fonts not loading               | Check internet connection; Google Fonts requires network   |
| Resume download not working     | Ensure `Resume_Vinay.pdf` is in same folder as index.html  |
| Animations not triggering       | Open in Chrome; check browser supports IntersectionObserver |
| Mobile menu not working         | Open browser console; check for JS errors                  |
| Skill bars stuck at 0%          | Scroll down to the skills section to trigger animation     |
| Contact form shows no response  | Check browser console for JS errors on form submit         |
| Page looks unstyled             | Ensure `css/style.css` path is correct relative to html    |

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| IE 11   | -       | ❌ Not supported (uses modern CSS/JS) |
