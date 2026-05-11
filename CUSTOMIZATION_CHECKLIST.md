# Quick Customization Checklist

Before deploying your website, make these changes:

---

## 1. UPDATE CALENDLY URL

**File:** `index.html`

Find and replace (appears 3 times):
```html
https://calendly.com/joseluisds/15min
```

With your actual Calendly URL:
```html
https://calendly.com/YOUR_USERNAME/15min
```

**Steps:**
1. Go to [calendly.com](https://calendly.com)
2. Find your 15-minute booking link
3. Copy the URL
4. Replace in 3 places in index.html:
   - Line ~97: In Calendly embed section
   - Line ~120 (approximate): Primary CTA in services
   - Line ~490 (approximate): Contact section CTA

---

## 2. UPDATE EMAIL

**File:** `index.html`

Find and replace:
```html
joseluisds@gmail.com
```

With your email:
```html
your-email@your-domain.com
```

**Appears in:**
- Contact section (~480)
- Multiple CTA buttons

---

## 3. UPDATE PHONE

**File:** `index.html`

Find and replace:
```html
+32 (494) 11-55-05
```

With your phone number.

**Appears in:**
- Contact section (~482)

---

## 4. UPDATE LINKEDIN

**File:** `index.html`

Find and replace:
```html
https://linkedin.com/in/joseluisds/
```

With your LinkedIn profile URL.

**Appears in:**
- Contact section (~479)

---

## 5. VERIFY SERVICE PRICING (Optional)

**File:** `index.html`

Check if these prices match your intended rates:

- Line ~165: Enterprise Change Governance Lead: **€13,000/month**
- Line ~190: ITSM Transformation: **€5K-8K/month**
- Line ~215: CAB Quick Assessment: **€3,500 fixed**
- Line ~240: Risk Assessment: **€2K-5K per engagement**

If different, update the price in the service-price class.

---

## 6. ADD YOUR ARTICLES

**File:** `script.js`

The blog section is ready but needs your articles.

### Step 1: Create Article File
Create file: `articles/your-article-slug.md`

Example:
```markdown
# Your Article Title

**Published:** January 15, 2024 | **Read time:** 8 minutes

---

## Introduction
...content...
```

(See `EXAMPLE_CAB_vs_CCB.md` for full format)

### Step 2: Register in script.js

Add to `blogPosts` array in `script.js`:

```javascript
{
    id: 'your-article-slug',
    title: 'Your Article Title',
    date: '2024-01-15',
    excerpt: 'Your short excerpt here (max 150 chars)',
    readTime: '8 min read'
}
```

**Currently defined articles:**
- cab-vs-ccb
- retainer-model
- change-metrics
- risk-assessment

You can use these slugs and add your content to the `articles/` folder.

---

## 7. TEST EVERYTHING

### Test on Desktop:
- [ ] Click all CTAs (should go to Calendly)
- [ ] Click all nav links (should scroll smoothly)
- [ ] Check all contact info is visible
- [ ] Service cards are aligned

### Test on Mobile:
- [ ] Navigation works
- [ ] Buttons are clickable
- [ ] Text is readable
- [ ] No layout breaks

### Test Links:
- [ ] Calendly embed works
- [ ] Email link works (click should open email client)
- [ ] Phone link works (click should open phone on mobile)
- [ ] LinkedIn link opens correctly

---

## 8. DEPLOY

### Option A: Netlify (Recommended)
1. Create GitHub account
2. Push CM folder to GitHub repo
3. Go to [netlify.com](https://netlify.com)
4. Connect GitHub repo
5. Deploy
6. Update DNS: changemanagement.site → Netlify URL

### Option B: Your Hosting Provider
1. FTP upload CM folder contents
2. Update DNS to point to hosting
3. Done

### Option C: Vercel
1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Deploy
4. Configure domain

---

## 9. POST-DEPLOYMENT

### Set Up Analytics (Optional)
Add Google Analytics to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Monitor
- Check site loads correctly
- Test Calendly booking
- Verify email works
- Monitor traffic

---

## QUICK REFERENCE: All Changes Needed

| Item | File | Find | Replace With |
|------|------|------|--------------|
| Calendly URL | index.html | `calendly.com/joseluisds/15min` | Your Calendly URL (3x) |
| Email | index.html | `joseluisds@gmail.com` | Your email |
| Phone | index.html | `+32 (494) 11-55-05` | Your phone |
| LinkedIn | index.html | `linkedin.com/in/joseluisds/` | Your LinkedIn URL |
| Pricing | index.html | €13,000 etc. | Your rates (if different) |
| Articles | script.js | blogPosts array | Add your articles |

---

## COMMON MISTAKES TO AVOID

❌ Forgetting to update Calendly URL (users can't book)
❌ Using old email (inquiries go nowhere)
❌ Not testing on mobile (breaks on phones)
❌ Leaving placeholder pricing (confuses clients)
❌ Not adding any articles (blog section empty)

---

## YOU'RE READY!

Once you've completed these steps:
1. Website is fully customized
2. Ready to deploy
3. Ready to accept bookings
4. Ready to start getting clients

Good luck! 🚀

Questions? Review the README.md for more details.
