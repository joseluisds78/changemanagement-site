# Deployment Guide: changemanagement.site

## Overview

Your website is ready to deploy. This guide covers 3 hosting options.

**Domain:** changemanagement.site  
**Files Size:** ~50KB (very fast)  
**Estimated Load Time:** < 1 second

---

## Option 1: Netlify (EASIEST - Recommended)

### Why Netlify?
- ✅ Free tier is excellent
- ✅ Auto-deploys on every change
- ✅ Automatic HTTPS
- ✅ CDN globally distributed
- ✅ No configuration needed
- ✅ Easy custom domain setup

### Step-by-Step:

#### 1. Create GitHub Account (if you don't have one)
- Go to [github.com](https://github.com)
- Sign up (takes 2 minutes)

#### 2. Create New Repository
- Click "New Repository"
- Name: `changemanagement-site`
- Public or Private (doesn't matter)
- Create repository

#### 3. Upload Files to GitHub
**Option A: Git Command Line (Recommended)**
```bash
cd CM
git init
git add .
git commit -m "Initial commit - Change Management website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/changemanagement-site.git
git push -u origin main
```

**Option B: GitHub Web Interface**
1. Go to your new repository
2. Click "Add file" → "Upload files"
3. Drag and drop all files from CM folder
4. Commit

#### 4. Deploy on Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" (use GitHub account)
3. Click "New site from Git"
4. Select GitHub
5. Choose your repository
6. Click Deploy

**Netlify will automatically:**
- Detect your site
- Build it
- Deploy to CDN
- Give you a URL

#### 5. Connect Custom Domain
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `changemanagement.site`
4. Follow instructions to update DNS

**At your domain registrar (where you bought changemanagement.site):**
- Update nameservers to Netlify's (provided in Netlify dashboard)
- OR add CNAME record pointing to Netlify
- Wait 24-48 hours for DNS to propagate

---

## Option 2: Vercel (Fast Alternative)

### Why Vercel?
- ✅ Extremely fast
- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ✅ Simple setup

### Step-by-Step:

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Go to "Settings" → "Domains"
7. Add `changemanagement.site`
8. Update DNS at registrar

---

## Option 3: Traditional Web Hosting (cPanel/FTP)

### Why This?
- ✅ If you already have hosting
- ✅ Full control
- ✅ No dependency on third-party

### Step-by-Step:

#### 1. Access Your Hosting Control Panel
- Log in to cPanel / hosting dashboard
- Find File Manager

#### 2. Upload Files
- Navigate to public_html folder
- Create new folder: `changemanagement` (or upload directly to public_html)
- Upload all files from CM folder:
  - index.html
  - styles.css
  - script.js
  - articles/ folder

#### 3. Test
- Visit your domain
- Should see website

#### 4. Update DNS (if needed)
- If you bought domain elsewhere, update DNS:
  - Login to domain registrar
  - Update nameservers OR A record to point to your hosting IP
  - Wait 24 hours for propagation

---

## Quick Decision: Which Option?

### Choose Netlify if:
- ✅ You want simplest setup
- ✅ You want auto-updates
- ✅ You're comfortable with Git/GitHub
- ✅ You want free HTTPS
- ✅ You don't have existing hosting

### Choose Vercel if:
- ✅ You want cutting-edge performance
- ✅ You're already using Vercel
- ✅ You want extreme speed

### Choose Traditional if:
- ✅ You already have hosting
- ✅ You're not comfortable with GitHub
- ✅ You want simple FTP upload

**Recommendation: Netlify** (most beginner-friendly)

---

## DNS Configuration

Assuming you bought `changemanagement.site` at a registrar (GoDaddy, Namecheap, etc.):

### For Netlify:

1. **Get Netlify Nameservers:**
   - Netlify dashboard → Domain settings
   - Copy the 4 nameservers provided

2. **Update at Registrar:**
   - Log in to your registrar (where you bought domain)
   - Find "Nameservers" settings
   - Replace existing nameservers with Netlify's

3. **Wait 24-48 hours** for DNS to propagate

### For Traditional Hosting:

1. **Get your Hosting IP:**
   - Email hosting provider OR
   - Check cPanel (look for "A record" or "Primary IP")

2. **Update at Registrar:**
   - Find "A Record" settings
   - Point `@` to your hosting IP

3. **Wait 24 hours** for DNS to propagate

---

## After Deployment

### 1. Test Everything
```
[ ] Website loads at changemanagement.site
[ ] All buttons work
[ ] Calendly embed works
[ ] Mobile responsive
[ ] Email links work
[ ] Phone links work
```

### 2. Set Up SSL/HTTPS
- **Netlify:** Automatic (no action needed)
- **Vercel:** Automatic (no action needed)
- **Traditional:** Your hosting provider usually auto-enables

### 3. Set Up Email Forwarding (Optional)
If your email is from changemanagement.site:
1. Registrar → Email forwarding settings
2. Forward to your personal email (joseluisds@gmail.com)
3. Done

### 4. Monitor Performance
- Visit [PageSpeed Insights](https://pagespeed.web.dev)
- Enter your URL
- Should score 90+

### 5. Set Up Analytics (Optional)
Add Google Analytics:
```html
<!-- Add to <head> of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Troubleshooting

### "Website shows 404 error"
- DNS hasn't propagated yet (wait 24 hours)
- OR files weren't uploaded correctly
- Check file permissions

### "Calendly embed shows blank"
- Ensure Calendly URL is correct
- Check browser console for errors
- Ensure Calendly embed is enabled in settings

### "Site is slow"
- Clear browser cache
- Check PageSpeed Insights
- Should be <1 second load time (if not, contact hosting provider)

### "Custom domain not working"
- DNS propagation takes 24-48 hours
- Use `nslookup` to check:
  ```bash
  nslookup changemanagement.site
  ```
- Should return Netlify/Vercel IPs

---

## File Structure on Server

Once deployed, your server should have:

```
/public_html/ (or root)
├── index.html
├── styles.css
├── script.js
└── articles/
    ├── EXAMPLE_CAB_vs_CCB.md
    ├── cab-vs-ccb.md
    ├── retainer-model.md
    ├── change-metrics.md
    └── risk-assessment.md
```

---

## Update Your Content

### Adding a New Article

1. Create file: `articles/your-slug.md`
2. Update `script.js` with new article metadata:
   ```javascript
   {
       id: 'your-slug',
       title: 'Your Title',
       date: '2024-01-15',
       excerpt: 'Short excerpt',
       readTime: '8 min read'
   }
   ```
3. Push to GitHub (Netlify auto-deploys)
   OR
   Upload manually to server

### Updating Pricing

1. Edit `index.html`
2. Find service prices
3. Update amounts
4. Push to GitHub (Netlify auto-deploys)
   OR
   Upload to server

---

## Backup & Maintenance

### Backup Your Files
1. **GitHub:** Automatic (as long as you push code)
2. **Traditional:** FTP download monthly
3. **Netlify:** Stores all deployments (can rollback anytime)

### Monitor Uptime
- **Netlify/Vercel:** 99.99% uptime included
- **Traditional:** Check with hosting provider

### Update Articles Regularly
- Add 1 new article every 2-4 weeks
- Keeps content fresh
- Helps SEO

---

## QUICK SUMMARY

1. ✅ Files are ready in `/CM` folder
2. ✅ Run CUSTOMIZATION_CHECKLIST.md first
3. ✅ Choose hosting (Netlify recommended)
4. ✅ Deploy (5-10 minutes)
5. ✅ Update DNS (24-48 hours)
6. ✅ Test everything
7. ✅ Done!

---

## Need Help?

### Netlify Support
- [docs.netlify.com](https://docs.netlify.com)
- Free live chat in dashboard

### Vercel Support
- [vercel.com/docs](https://vercel.com/docs)
- Discord community

### DNS Help
- Registrar support (GoDaddy, Namecheap, etc.)
- DNS propagation checker: [whatsmydns.net](https://whatsmydns.net)

---

## You're Ready!

Your website is production-ready. Deploy it and start getting clients! 🚀
