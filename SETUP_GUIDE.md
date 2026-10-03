# Tasara Limited - Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

#### Get Supabase Credentials

1. Go to [https://supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Project Settings > API
4. Copy your:
   - Project URL
   - Anon/Public Key

#### Add Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

#### Apply Database Migration

The contact form needs a database table. Go to your Supabase Dashboard:

1. Navigate to SQL Editor
2. Click "New Query"
3. Copy and paste the following SQL:

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  phone text DEFAULT '',
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
```

4. Click "Run" to execute the query

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
npm run build
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

Your site will be live in minutes!

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [https://netlify.com](https://netlify.com)
3. Click "Add new site"
4. Import your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Netlify dashboard
7. Deploy

### Option 3: Self-Hosting

You can deploy to any Node.js hosting service:

```bash
npm run build
npm run start
```

## Customization

### Update Company Information

1. **Footer**: Edit `components/layout/footer.tsx`
   - Company name
   - Address
   - Phone number
   - Email

2. **Contact Page**: Edit `app/contact/page.tsx`
   - Update contact details in the cards section

### Change Colors

The site uses red as the primary color. To change:

1. Open any component file
2. Find `bg-red-600`, `text-red-600`, etc.
3. Replace with your color (e.g., `bg-blue-600`)

For global color changes, edit:
- `tailwind.config.ts`
- `app/globals.css`

### Add More Content

- **Home Page**: `app/page.tsx`
- **About Page**: `app/about/page.tsx`
- **Services Page**: `app/services/page.tsx`
- **Contact Page**: `app/contact/page.tsx`

### Update SEO Metadata

Edit the `metadata` object in each page file:

```typescript
export const metadata = {
  title: 'Your Title',
  description: 'Your description',
};
```

## Viewing Contact Form Submissions

### Option 1: Supabase Dashboard

1. Go to your Supabase project
2. Click "Table Editor"
3. Select `contact_submissions` table
4. View all submissions

### Option 2: Create Admin Dashboard (Advanced)

You can create a protected admin page to view submissions:

1. Set up Supabase Authentication
2. Create an admin route (e.g., `/admin`)
3. Protect it with authentication
4. Query the `contact_submissions` table

## Email Notifications (Optional)

To receive email notifications when someone submits the contact form:

### Using Supabase Edge Functions

1. Create a Supabase Edge Function
2. Set up email service (SendGrid, Resend, or Mailgun)
3. Trigger the function on new row insert in `contact_submissions`

### Using Webhooks

1. Set up a webhook service
2. Configure Supabase to send webhooks on new rows
3. Process the webhook and send emails

## Troubleshooting

### Contact Form Not Working

1. Check environment variables are set correctly
2. Verify Supabase database migration was applied
3. Check browser console for errors
4. Verify Supabase project is active

### Build Errors

1. Delete `.next` folder and `node_modules`
2. Run `npm install` again
3. Run `npm run build`

### Styling Issues

1. Clear browser cache
2. Check Tailwind CSS is properly configured
3. Verify all UI components are installed

## Support

For additional help:

- Email: info@tasaralimited.com
- Phone: +880 1XXX XXXXXX

## Next Steps

After deployment:

1. Test all pages on mobile and desktop
2. Test contact form submission
3. Update company information with real details
4. Add Google Analytics (optional)
5. Set up custom domain
6. Configure email notifications
7. Add more pages as needed

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
