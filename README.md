# Tasara Limited - Corporate Website

A modern, professional business website for Tasara Limited, a supply and indenting company connecting raw material suppliers with international buyers.

## Features

- Modern Next.js 13+ with TypeScript
- Responsive design with Tailwind CSS
- Professional UI components using shadcn/ui
- SEO-optimized pages
- Functional contact form with Supabase integration
- Fast loading and production-ready

## Pages

- **Home**: Hero section with company overview and key statistics
- **About Us**: Company story, mission, vision, values, and sustainability commitment
- **Services**: Detailed service offerings (Indenting, Sourcing, Supply Chain)
- **Contact**: Working contact form with business information

## Tech Stack

- **Framework**: Next.js 13+ (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KSBMR/TasaraLimited.git
cd TasaraLimited
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

To get these values:
- Go to [Supabase Dashboard](https://supabase.com/dashboard)
- Create a new project or select existing one
- Go to Project Settings > API
- Copy the Project URL and anon/public key

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup

The contact form requires a Supabase database table. The migration has been created and should be applied automatically. If you need to set it up manually:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the migration file located in your project

The database includes:
- Contact form submissions table
- Row Level Security (RLS) policies
- Public insert policy for contact forms
- Authenticated read policy for admin access

## Building for Production

```bash
npm run build
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Add environment variables in Netlify dashboard
5. Deploy

## Project Structure

```
tasara-limited/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/
│   ├── layout/
│   │   ├── header.tsx        # Navigation header
│   │   └── footer.tsx        # Footer component
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── utils.ts              # Utility functions
│   └── supabase.ts           # Supabase client
└── public/                   # Static assets
```

## Customization

### Colors

The site uses red/gray color scheme. To change the primary color:
- Edit `tailwind.config.ts`
- Update red-600 references in components
- Modify CSS variables in `globals.css`

### Content

Update business information in:
- `components/layout/footer.tsx` - Contact details
- Page components - Replace with your actual content

### Contact Form

The form submits to Supabase. To add email notifications:
- Set up Supabase Edge Functions
- Configure email service (SendGrid, Resend, etc.)
- Add webhook on form submission

## Support

For issues or questions:
- Email: info@tasaralimited.com
- Phone: +880 1XXX XXXXXX

## License

© 2024 Tasara Limited. All rights reserved.
