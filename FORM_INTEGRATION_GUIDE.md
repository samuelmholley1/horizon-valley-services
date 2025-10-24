# Form Submission Integration Guide

## Overview
This guide explains how to set up email notifications and Google Sheets integration for the quote request form.

## Current Status
✅ Form validates inputs client-side
✅ API endpoint created at `/api/submit-quote`
⏳ Email integration (needs setup)
⏳ Google Sheets integration (needs setup)

## Integration Options

### Option 1: Resend (Recommended for Email)
**Why**: Simple, modern, great developer experience
**Cost**: Free tier: 3,000 emails/month

1. Sign up at https://resend.com
2. Add your domain: `horizonvalleycleaning.com`
3. Get API key
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   RESEND_FROM_EMAIL=owners@horizonvalleycleaning.com
   ```
5. Install: `yarn add resend`

### Option 2: SendGrid
**Why**: Industry standard, reliable
**Cost**: Free tier: 100 emails/day

1. Sign up at https://sendgrid.com
2. Get API key
3. Add to `.env.local`:
   ```
   SENDGRID_API_KEY=SG.your_key_here
   SENDGRID_FROM_EMAIL=owners@horizonvalleycleaning.com
   ```
4. Install: `yarn add @sendgrid/mail`

### Option 3: Google Sheets Integration

**Steps**:
1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create Service Account and download JSON key
4. Share your Google Sheet with service account email
5. Add to `.env.local`:
   ```
   GOOGLE_SHEETS_PRIVATE_KEY="your_private_key"
   GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
   GOOGLE_SHEET_ID=your_sheet_id_here
   ```
6. Install: `yarn add googleapis`

## Implementation Files

### 1. Email Templates
Create `src/lib/email-templates.ts` with:
- Customer confirmation email
- Owner notification email

### 2. Google Sheets Client
Create `src/lib/google-sheets.ts` with:
- Sheet append function
- Data formatting

### 3. Update API Route
Update `src/app/api/submit-quote/route.ts` to:
- Send customer confirmation
- Send owner notification
- Append to Google Sheets
- Handle errors gracefully

## Environment Variables Needed

Create `.env.local` in project root:
```env
# Email Service (choose one)
RESEND_API_KEY=re_xxxxx
# OR
SENDGRID_API_KEY=SG.xxxxx

# Email Configuration
FROM_EMAIL=owners@horizonvalleycleaning.com

# Google Sheets
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_SHEET_ID=1abc123def456ghi789jkl
```

## Quick Setup Script

I can create ready-to-use integration code once you choose:
1. Email provider (Resend or SendGrid)
2. Whether to use Google Sheets

Let me know which services you want to use and I'll create the complete implementation!

## Testing

After setup:
1. Test form submission locally
2. Check email delivery
3. Verify Google Sheet entry
4. Test error handling
5. Deploy to production

## Cost Estimate

**Free tier (sufficient for most small businesses)**:
- Resend: 3,000 emails/month FREE
- Google Sheets API: FREE (read/write quota very high)

Total: $0/month for reasonable usage
