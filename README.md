# Enterprise Change Governance Website

## Overview

This is a professional website for José Luis Díaz, Change Management Consultant.

**URL:** www.changemanagement.site  
**Technologies:** HTML, CSS, JavaScript (No frameworks, fully responsive)  
**Calendly Integration:** Yes (embedded 15-min calls)

---

## File Structure

```
CM/
├── index.html           # Main website (home page)
├── styles.css           # All styling
├── script.js            # Blog loading and interactions
├── articles/
│   ├── EXAMPLE_CAB_vs_CCB.md    # Example article (reference format)
│   ├── cab-vs-ccb.md            # Articles you'll add (format shown above)
│   ├── retainer-model.md
│   ├── change-metrics.md
│   └── risk-assessment.md
└── README.md            # This file
```

---

## Website Sections

### 1. Navigation Bar
- Sticky navigation at top
- Links to: Home, Services, About, Insights, Contact
- Clean, professional design

### 2. Hero Section
- **Headline:** "Enterprise Change Governance That Works"
- **Subheadline:** 99.9% success rate, 94% efficiency improvement
- **CTAs:** 
  - "Schedule a 15-Min Call" (primary)
  - "Learn More" (secondary)
- **Stats:** 20+ years, 99.9% rate, 94% improvement

### 3. Problem/Solution Section
- Left: **Your CAB Is Probably Broken**
  - Changes take 2+ weeks
  - Risk isn't managed
  - Stakeholders frustrated
  - etc.
- Right: **We Fix This**
  - Approvals in 48 hours
  - Risk visibility
  - Stakeholder alignment
  - etc.

### 4. Services Section
- **4 Service Cards:**
  1. **Enterprise Change Governance Lead** (€13,000/month) - MAIN
     - Retainer-based, 20-30h/week, 12-month
  2. **ITSM & Change Process Transformation** (€5K-8K/month)
     - 3-6 month project, transformation focus
  3. **CAB Quick Assessment** (€3,500 fixed)
     - 2-week engagement, entry point
  4. **Risk Assessment & Impact Management** (€2K-5K)
     - Per-engagement, specialized

### 5. About Section
- **20+ Years Driving Change Governance**
- Experience at NATO, Amadeus, NXP
- Key credentials and languages
- Stats: 20+ years, 99.9%, 94%, 100+ teams

### 6. Blog/Insights Section
- Loads articles dynamically from `script.js`
- Currently shows 4 blog posts (you add more)
- Each article has:
  - Title
  - Date published
  - Read time estimate
  - Excerpt
  - Link to full article

### 7. Calendly Section
- Embedded Calendly iframe
- 15-minute discovery calls
- **Change URL:** https://calendly.com/joseluisds/15min
  - Update `joseluisds` with your Calendly username

### 8. Contact Section
- Email, LinkedIn, Phone, Location
- Quick link to calendar
- CTA to schedule

### 9. Footer
- Copyright and tagline

---

## How to Customize

### 1. Update Personal Information

**In `index.html`, find and replace:**

```html
<!-- Change these -->
<a href="https://calendly.com/joseluisds/15min">
<a href="mailto:joseluisds@gmail.com">
<a href="tel:+32494115505">
<a href="https://linkedin.com/in/joseluisds/">
```

**Replace with your actual:**
- Calendly URL
- Email
- Phone
- LinkedIn profile

### 2. Update Pricing

**In `index.html`, find service cards and update prices:**

```html
<p class="service-price">€13,000<span>/month</span></p>
```

Change `€13,000` to your actual rate.

### 3. Update Company Names / Experience

**In About section:**

```html
<li>
    <strong>NATO Communications & Information Agency</strong><br>
    Change governance for 100+ cross-functional teams...
</li>
```

Update with your actual companies and roles.

### 4. Update Colors (Optional)

**In `styles.css`, find CSS variables:**

```css
:root {
    --primary: #1e40af;           /* Main blue */
    --secondary: #0f766e;         /* Teal */
    --accent: #dc2626;            /* Red */
    --text: #1f2937;              /* Dark gray */
}
```

Change to your preferred colors.

---

## How to Add Blog Articles

### 1. Create a New Markdown File

**Create file:** `CM/articles/your-article-slug.md`

**Format (see EXAMPLE_CAB_vs_CCB.md for full reference):**

```markdown
# Article Title

**Published:** January 15, 2024 | **Read time:** 8 minutes

---

## Introduction

Your introduction here...

---

## Section 1

Content here...

---

## Section 2

More content...

---

## Conclusion

Wrap up here...
```

### 2. Add to Blog Posts List

**In `script.js`, find `blogPosts` array and add your article:**

```javascript
const blogPosts = [
    // ... existing posts ...
    {
        id: 'your-article-slug',
        title: 'Your Article Title',
        date: '2024-01-15',
        excerpt: 'A short excerpt (150 chars) that appears on the card',
        readTime: '8 min read'
    }
];
```

**Important:**
- `id` must match your markdown filename (without .md)
- `date` format: YYYY-MM-DD
- Keep excerpt short (150 chars max)
- `readTime` is approximate reading time

### 3. Article Appears Automatically

The website will:
1. Load your article metadata from `script.js`
2. Create a card in the Blog section
3. Link to the article (future: generate HTML from markdown)

---

## Deployment

### Option 1: Netlify (Easiest)
1. Push this folder to GitHub
2. Connect to Netlify
3. Deploy (automatic)
4. Update domain to changemanagement.site

### Option 2: Traditional Hosting
1. FTP upload to your hosting provider
2. Point domain to hosting
3. Done

### Option 3: Vercel
1. Push to GitHub
2. Import into Vercel
3. Auto-deploy on every push

---

## Important Notes

### Calendly Integration
- Change line in `index.html` with your Calendly URL
- Format: `https://calendly.com/YOUR_USERNAME/15min`
- Get URL from Calendly dashboard

### Email/Contact
- Update all contact methods:
  - Email: joseluisds@gmail.com
  - Phone: +32 (494) 11-55-05
  - LinkedIn: https://linkedin.com/in/joseluisds/

### Blog Articles
- Currently uses placeholder system (ready for content)
- Add .md files to `articles/` folder
- Update `script.js` with metadata
- (Future: can add markdown parser for auto-conversion to HTML)

---

## Features Included

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Fast loading (no heavy frameworks)  
✅ Professional styling  
✅ Service cards with hover effects  
✅ Blog article system (ready for your content)  
✅ Calendly integration  
✅ Smooth scrolling  
✅ Animation on scroll  
✅ Contact information section  
✅ Social proof (stats section)  

---

## Browser Support

Works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## Performance

- **Page Load:** < 1 second
- **No JavaScript frameworks** (fast)
- **Optimized CSS** (minimal, no bloat)
- **Responsive images** (auto-scale)

---

## Future Enhancements

Optional things you could add:
- [ ] Markdown parser (auto-convert .md to HTML)
- [ ] Contact form (with email notification)
- [ ] Case study section
- [ ] Testimonials slider
- [ ] Dark mode toggle
- [ ] Blog search functionality
- [ ] Email signup form
- [ ] Analytics integration (Google Analytics)

---

## Troubleshooting

### Calendly embed not showing?
- Check Calendly URL is correct
- Ensure embed is enabled in Calendly settings
- Check browser console for errors

### Blog articles not appearing?
- Verify `id` in `script.js` matches filename
- Check date format (YYYY-MM-DD)
- Clear browser cache and refresh

### Styling looks broken?
- Ensure `styles.css` is in same folder as `index.html`
- Check CSS file is being loaded (browser dev tools)
- Try clearing cache

---

## Questions?

The website is ready to deploy. Add your articles, update your contact info, and you're live.

Good luck! 🚀
