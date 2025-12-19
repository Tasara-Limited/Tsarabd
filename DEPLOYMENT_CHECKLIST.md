# Tasara Limited - Deployment Checklist

## Pre-Deployment Setup

### 1. Supabase Configuration
- [ ] Create Supabase account at https://supabase.com
- [ ] Create new project
- [ ] Copy Project URL and Anon Key
- [ ] Create `.env.local` file with credentials
- [ ] Run database migration SQL in Supabase SQL Editor
- [ ] Test contact form locally

### 2. Local Testing
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test all pages (Home, About, Services, Contact)
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Check Supabase dashboard for form submissions

### 3. Production Build
- [ ] Run `npm run build`
- [ ] Fix any build errors
- [ ] Verify build completes successfully

## Deployment (Choose One)

### Option A: Vercel (Recommended)
- [ ] Push code to GitHub
- [ ] Connect GitHub to Vercel
- [ ] Import repository
- [ ] Add environment variables
- [ ] Deploy
- [ ] Test live site
- [ ] Configure custom domain (optional)

### Option B: Netlify
- [ ] Push code to GitHub
- [ ] Connect GitHub to Netlify
- [ ] Import repository
- [ ] Configure build settings
- [ ] Add environment variables
- [ ] Deploy
- [ ] Test live site
- [ ] Configure custom domain (optional)

## Post-Deployment

### Essential Updates
- [ ] Update all placeholder phone numbers
- [ ] Update email addresses
- [ ] Test contact form on live site
- [ ] Verify form submissions in Supabase
- [ ] Check all pages on mobile devices
- [ ] Test page load speeds
- [ ] Verify SEO meta tags

### Optional Enhancements
- [ ] Set up Google Analytics
- [ ] Configure email notifications for form submissions
- [ ] Add SSL certificate (usually automatic)
- [ ] Set up custom domain
- [ ] Create email aliases (info@tasaralimited.com)
- [ ] Add social media links
- [ ] Set up automated backups for Supabase

### Marketing & SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Add business to Google My Business
- [ ] Create social media profiles
- [ ] Add schema markup for business info
- [ ] Optimize images for web
- [ ] Set up 301 redirects if needed

## Maintenance

### Weekly
- [ ] Check contact form submissions
- [ ] Monitor website uptime
- [ ] Review analytics

### Monthly
- [ ] Update dependencies (`npm update`)
- [ ] Review and respond to all inquiries
- [ ] Check for broken links
- [ ] Review site performance

### Quarterly
- [ ] Update content and pricing
- [ ] Review and update SEO strategy
- [ ] Backup database
- [ ] Security audit

## Quick Reference

### Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Important Files
- `database_migration.sql` - Database setup
- `SETUP_GUIDE.md` - Detailed setup instructions
- `README.md` - Project documentation
- `.env.local` - Local environment variables (DO NOT COMMIT)

### Support Contacts
- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support/
- Supabase Support: https://supabase.com/support

## Troubleshooting

### Contact Form Not Working
1. Check Supabase credentials in environment variables
2. Verify database migration was applied
3. Check browser console for JavaScript errors
4. Verify Supabase project is not paused

### Build Failures
1. Clear `.next` folder
2. Delete `node_modules`
3. Run `npm install`
4. Run `npm run build` again

### Deployment Issues
1. Verify all environment variables are set in hosting platform
2. Check build logs for specific errors
3. Ensure Node.js version is compatible (18+)
4. Verify all dependencies are listed in package.json

## Success Criteria

Your deployment is successful when:
- ✓ All pages load without errors
- ✓ Contact form submits successfully
- ✓ Form submissions appear in Supabase
- ✓ Site is responsive on all devices
- ✓ Page load time is under 3 seconds
- ✓ All links and navigation work
- ✓ Images load properly
- ✓ SEO meta tags are present

## Next Steps After Launch

1. Announce launch on social media
2. Update business listings with new website
3. Monitor initial traffic and engagement
4. Collect feedback from users
5. Plan content updates and improvements

---

For detailed instructions, see SETUP_GUIDE.md
