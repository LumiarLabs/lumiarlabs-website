# Waitlist System Setup Guide

## Prerequisites

Before the waitlist system will work, you need to set up:

### 1. Vercel Postgres Database

1. Go to your Vercel dashboard
2. Select your project
3. Navigate to **Storage** tab
4. Click **Create Database** → **Postgres**
5. Once created, Vercel will automatically add environment variables to your project

### 2. Initialize Database Schema

After creating the Postgres database, run the SQL schema to create the waitlist table:

1. In your Vercel dashboard, go to **Storage** → your Postgres database
2. Click on **Query** tab
3. Copy and paste the contents of `src/db/schema.sql`
4. Click **Run** to execute the schema

Alternatively, you can use the Vercel CLI:
```bash
vercel env pull
npx vercel/postgres-cli < src/db/schema.sql
```

### 3. Resend API Setup

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Verify your email
3. In Resend dashboard, go to **API Keys**
4. Create a new API key
5. Add to your environment variables:

**Local development** (`.env.local`):
```env
RESEND_API_KEY=re_your_api_key_here
```

**Production** (Vercel dashboard):
1. Go to **Settings** → **Environment Variables**
2. Add `RESEND_API_KEY` with your key
3. Redeploy your application

### 4. Configure Email Domain (Optional - for production)

For production use, verify your domain with Resend:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Follow DNS verification steps
4. Update the `from` field in `src/app/actions.ts`:
   ```typescript
   from: 'LumiarLabs <noreply@yourdomain.com>'
   ```

For testing, you can use Resend's default domain: `onboarding@resend.dev`

## Testing the Waitlist

1. Start your dev server: `npm run dev`
2. Navigate to the contact section
3. Fill in name and email
4. Submit the form
5. Check:
   - Success toast appears
   - Email is received (check spam folder)
   - Database entry is created (check Vercel Postgres dashboard)

## Sending Beta Invitations

When you're ready to launch beta, run:

```bash
npx tsx src/scripts/send-beta-invites.ts
```

This will:
- Find all users who haven't received beta invites
- Send them the beta invitation email
- Mark them as sent in the database
- Show progress and results

## Troubleshooting

### Database Connection Errors
- Verify `POSTGRES_URL` is in your environment variables
- Check that the schema has been initialized
- Ensure you're using the correct Vercel environment

### Email Not Sending
- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for error logs
- Ensure you haven't hit rate limits
- Check spam folder for emails

### Form Submission Errors
- Check browser console for errors
- Verify server action is imported correctly
- Check Vercel function logs for backend errors

## Environment Variables Summary

Required environment variables:
```env
# Automatically added by Vercel when you create Postgres database
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

# You need to add this manually
RESEND_API_KEY=re_your_api_key_here
```
