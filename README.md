# Cephas Life Sciences (CLS) - Corporate Website

This is a modern, statically-generated corporate web application for Cephas Life Sciences, built with Next.js 14 (App Router) and an embedded Sanity Headless CMS.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Framer Motion
- **CMS / Database:** Sanity.io (Embedded Studio)
- **Icons:** Lucide React

## Server Deployment Instructions

If you are deploying this to a modern hosting provider (like Vercel, AWS Amplify, or Netlify), the platform should automatically detect that this is a Next.js application.

### Build Commands
To deploy this project to production, the server must run the standard Next.js build sequence:
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Build the Application:**
   ```bash
   npm run build
   ```
3. **Start the Production Server:**
   ```bash
   npm start
   ```

### Content Security Policy (CSP)
If you are modifying the Next.js configuration (`next.config.ts`), please note that strict CSP headers are already implemented. The Sanity CDN domains (`cdn.sanity.io`, `*.sanity.io`) have been whitelisted in the Next/Image `remotePatterns` and HTTP headers to allow the embedded dashboard at `/admin` to function correctly without cross-origin blocks.

## Content Management (Sanity CMS)
The website features an embedded Sanity Studio directly within the Next.js app. 
- **Admin Dashboard URL:** `https://your-domain.com/admin`
- **Sanity Project ID:** `49dzk6do`
- **Dataset:** `production`

All dynamic data (Gallery Images, Client Logos, Accreditations, Company Milestones, and Laboratory Equipment) is fetched live from the Sanity Cloud using GROQ queries inside Server Components. Because the frontend uses Next.js server-side fetching, data changes made in the `/admin` dashboard will instantly reflect on the live site upon the next page request/revalidation.

## Local Development
To run this project locally on your machine:
```bash
npm install
npm run dev
```
Then open `http://localhost:3000` in your browser.

## Project Structure
- `src/app/(main)/*`: Public facing frontend website pages.
- `src/app/(admin)/admin/*`: The embedded Sanity CMS Studio.
- `src/sanity/*`: Sanity client configuration, GROQ queries, and Database Schemas.
- `src/components/*`: Reusable React components (UI, layout, interactive sections).
