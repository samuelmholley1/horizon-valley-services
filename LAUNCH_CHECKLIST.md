# 🚀 HORIZON VALLEY SERVICES - PRE-LAUNCH CHECKLIST

## 🔴 CRITICAL - MUST FIX BEFORE LAUNCH

### 1. **CONTACT INFORMATION** ⚠️ PLACEHOLDER DATA
- [ ] **Replace phone number** `(555) 123-4567` with REAL business phone
  - Consider getting tracking number (CallRail, CallTrackingMetrics)
  - Set up voicemail with professional greeting
- [ ] **Replace email** `info@horizonvalleyservices.com` with REAL email
  - Set up professional email (Google Workspace recommended)
  - Create forwarding rules to all 4 co-founders
  - Set up auto-responder for after-hours
- [ ] **Verify physical address** - Currently just says "Ukiah, CA"
  - Add full business address if you have office/location
  - Or keep vague for mobile-only business

### 2. **BOOKING/SCHEDULING SYSTEM** ❌ NOT IMPLEMENTED
- [ ] **Set up Calendly account** (or similar: Acuity, SimplyBook.me)
  - Create Calendly account at calendly.com
  - Configure availability for all 4 co-founders
  - Set up event types: "Free Consultation", "Quote Request", "Service Booking"
  - Add buffer times between appointments
  - Connect to Google Calendar
- [ ] **Integrate Calendly into website**
  - Replace "Get Free Quote" buttons with Calendly popup/link
  - Add Calendly embed in contact section
  - Test booking flow end-to-end
- [ ] **Set up confirmation emails**
  - Customize Calendly confirmation messages
  - Add company branding
  - Include what to expect/prepare

### 3. **CTA BUTTONS** ❌ DO NOTHING
- [ ] **"Get Free Quote" button (3 locations)** - Currently non-functional
  - Hero section button
  - Contact section button
  - All need to link to Calendly or contact form
- [ ] **"Learn More" button** - Goes nowhere
  - Link to #services section or services page

### 4. **MOBILE MENU** ❌ BROKEN
- [ ] **Fix hamburger menu** - Button exists but doesn't work
  - Implement mobile menu state management
  - Add slide-out or dropdown menu
  - Test on actual mobile devices

### 5. **FORMS** ❌ NO CONTACT FORM
- [ ] **Add contact form** (or use Calendly exclusively)
  - Use Formspree, Form.io, or custom API endpoint
  - Fields: Name, Email, Phone, Service Type, Message
  - Add spam protection (reCAPTCHA)
  - Set up email notifications to all co-founders
  - Add thank you page/message

---

## 🟡 HIGH PRIORITY - LAUNCH WEEK

### 6. **BUSINESS INFORMATION**
- [ ] **Business License Number** - Add to footer if required by state/county
- [ ] **Contractor License** - If required for your services in CA
- [ ] **Insurance Information**
  - Add "Licensed, Bonded & Insured" badge if applicable
  - Consider adding insurance certificate download
- [ ] **Service Area Details**
  - List specific cities/zip codes you serve
  - Consider adding interactive map
  - Add "Check if we serve your area" feature

### 7. **LEGAL PAGES** ❌ MISSING
- [ ] **Privacy Policy**
  - Use generator: termsfeed.com or iubenda.com
  - Required if collecting any user data
  - Add link to footer
- [ ] **Terms of Service**
  - Outline service agreements, cancellation policy
  - Liability limitations
  - Payment terms
  - Add link to footer
- [ ] **Cookie Consent** (if using analytics)
  - Add cookie banner if EU visitors expected
  - Use Cookiebot or similar

### 8. **ANALYTICS & TRACKING** ❌ NOT INSTALLED
- [ ] **Google Analytics 4**
  - Create GA4 property
  - Install tracking code in layout.tsx
  - Set up conversion goals (form submissions, calls, bookings)
- [ ] **Google Tag Manager** (recommended)
  - Easier to manage multiple tracking codes
  - Add GTM container
- [ ] **Facebook Pixel** (if running FB ads)
- [ ] **Conversion Tracking**
  - Track button clicks
  - Track Calendly bookings
  - Track phone number clicks
  - Track email clicks

### 9. **SEO OPTIMIZATION**
- [ ] **Google Search Console**
  - Verify domain ownership
  - Submit sitemap
  - Monitor indexing
- [ ] **Meta descriptions** - Currently generic
  - Write unique descriptions for each page
  - Include local keywords (Ukiah, Mendocino, etc.)
- [ ] **Open Graph tags** - For social sharing
  - Add OG image (create branded share image)
  - Add OG description
  - Test with Facebook debugger
- [ ] **Schema.org markup**
  - Add LocalBusiness schema
  - Add Service schema
  - Add Organization schema with co-founders
- [ ] **Sitemap.xml** - Next.js should auto-generate
  - Verify at yoursite.com/sitemap.xml
- [ ] **Robots.txt** - Ensure proper configuration

### 10. **GOOGLE BUSINESS PROFILE** ❌ CRITICAL
- [ ] **Create/Claim Google Business Profile**
  - Go to google.com/business
  - Add business name, address, phone, website
  - Choose categories: Pressure Washing, Window Cleaning, etc.
  - Add service areas (Mendocino, Lake, Sonoma counties)
  - Add photos of work/team
  - Get verification postcard
- [ ] **Complete profile 100%**
  - Add business hours
  - Add services with descriptions
  - Add photos (minimum 10)
  - Get initial reviews from friends/family
- [ ] **Bing Places** - Don't forget Microsoft!

---

## 🟢 MEDIUM PRIORITY - POST-LAUNCH

### 11. **CONTENT ENHANCEMENTS**
- [ ] **Real Photos**
  - Replace placeholder avatars with actual co-founder photos
  - Add before/after photos of work
  - Add equipment/team in action photos
  - Minimum 20 high-quality photos
- [ ] **Service Details Pages**
  - Create individual pages for each service
  - Add pricing ranges or "Starting at $XX"
  - Add FAQs for each service
  - Add what's included/not included
- [ ] **Testimonials/Reviews**
  - Add testimonials section
  - Embed Google reviews widget
  - Get initial reviews from test customers/friends
- [ ] **Service Area Map**
  - Add interactive map showing coverage
  - List all cities served
- [ ] **About Page**
  - Company story/origin
  - Why choose Horizon Valley?
  - Company values
  - Longer bios for co-founders

### 12. **PERFORMANCE OPTIMIZATION**
- [ ] **Image optimization**
  - Compress HV_logo.jpeg and HV_icon.jpeg
  - Use WebP format
  - Add proper alt tags
- [ ] **Lighthouse audit**
  - Run PageSpeed Insights
  - Aim for 90+ scores
  - Fix any issues
- [ ] **Mobile performance**
  - Test on real devices (iPhone, Android)
  - Check load times on 3G/4G
- [ ] **Lazy loading**
  - Ensure images lazy load
  - Add loading states

### 13. **SOCIAL MEDIA** ❌ NO LINKS
- [ ] **Create social media accounts**
  - Facebook Business Page
  - Instagram Business Account
  - Yelp Business Page
  - NextDoor Business Page (CRITICAL for local services)
- [ ] **Add social links to website**
  - Add icons in footer
  - Link to profiles
- [ ] **Social media content plan**
  - Post before/after photos
  - Share customer testimonials
  - Show behind-the-scenes

### 14. **EMAIL MARKETING**
- [ ] **Email collection**
  - Add newsletter signup
  - Offer discount for first-time subscribers
- [ ] **Welcome email sequence**
  - Set up automated emails for new contacts
  - Use Mailchimp, ConvertKit, or similar
- [ ] **Seasonal promotions**
  - Spring cleaning specials
  - Gutter cleaning before winter

### 15. **SECURITY & COMPLIANCE**
- [ ] **SSL Certificate** - Should be automatic on Vercel ✅
- [ ] **Security headers**
  - Add Content-Security-Policy
  - Add X-Frame-Options
  - Configure in next.config.js
- [ ] **GDPR compliance** (if serving EU customers)
  - Cookie consent
  - Data deletion requests
- [ ] **Backup strategy**
  - Regular database backups (if you add backend)
  - Code is backed up on GitHub ✅

---

## 🔵 LOW PRIORITY - ONGOING

### 16. **ADVANCED FEATURES**
- [ ] **Live chat widget**
  - Intercom, Drift, or Tidio
  - 24/7 availability or business hours
- [ ] **Instant quote calculator**
  - Simple form with square footage
  - Provide instant estimate range
- [ ] **Customer portal**
  - For booking management
  - Invoice viewing
  - Service history
- [ ] **Blog section**
  - SEO content: "How often should you pressure wash?"
  - Local content: "Best time for exterior cleaning in Mendocino"
  - Build authority and organic traffic

### 17. **PAYMENT INTEGRATION**
- [ ] **Online payments**
  - Stripe or Square integration
  - Deposit collection
  - Invoice payment
- [ ] **Invoicing system**
  - FreshBooks, QuickBooks, or Wave
  - Automated invoice sending

### 18. **MARKETING AUTOMATION**
- [ ] **CRM system**
  - Track leads and customers
  - Follow-up sequences
  - HubSpot (free), Pipedrive, or similar
- [ ] **Review automation**
  - Auto-request reviews after service
  - Podium, Birdeye, or similar
- [ ] **Referral program**
  - Offer discount for referrals
  - Track referral sources

### 19. **LOCAL SEO ADVANCED**
- [ ] **Local citations**
  - Submit to Yelp, Angie's List, HomeAdvisor
  - Submit to local directories
  - Ensure NAP (Name, Address, Phone) consistency
- [ ] **Local content**
  - "Serving Ukiah for X years"
  - Local landmarks/area photos
  - Community involvement
- [ ] **Local link building**
  - Partner with local businesses
  - Sponsor local events
  - Join Chamber of Commerce

### 20. **PAID ADVERTISING**
- [ ] **Google Ads**
  - Local Service Ads (green checkmark)
  - Search ads for high-intent keywords
  - Set budget and geographic targeting
- [ ] **Facebook/Instagram Ads**
  - Target Mendocino/Lake/Sonoma residents
  - Retargeting website visitors
- [ ] **Nextdoor Ads**
  - Highly effective for local services
  - Lower cost than Google/Facebook

---

## 📋 PRE-LAUNCH TESTING CHECKLIST

- [ ] **Test on all browsers**
  - Chrome ✓
  - Safari ✓
  - Firefox ✓
  - Edge ✓
- [ ] **Test on all devices**
  - iPhone (various sizes)
  - Android phone
  - iPad/tablet
  - Desktop (various screen sizes)
- [ ] **Test all links**
  - Internal navigation
  - External links
  - Social links (once added)
- [ ] **Test forms/CTAs**
  - Contact form submission
  - Calendly booking flow
  - Button functionality
- [ ] **Spelling/grammar check**
  - Run through Grammarly
  - Have someone proofread
- [ ] **Load testing**
  - Can site handle traffic spike?
  - Test Vercel limits

---

## 🎯 IMMEDIATE ACTION ITEMS (DO TODAY)

1. **Get real phone number** - Port existing or get new VoIP (Google Voice free option)
2. **Set up business email** - Google Workspace ($6/user/month) or free with domain
3. **Create Calendly account** - Free plan works to start
4. **Integrate Calendly** - Replace button links with Calendly URL
5. **Set up Google Analytics** - 15 minutes to install
6. **Create Google Business Profile** - Takes 5-10 days to verify

---

## 💰 ESTIMATED COSTS

### Essential (Pre-Launch):
- **Google Workspace** (email): $6-18/month per user
- **Phone tracking** (optional): $30-100/month
- **Calendly Pro** (optional): $12/user/month (free plan works initially)
- **Domain email** (alternative to Google): $5-10/month

### Recommended (Post-Launch):
- **Google Ads**: $500-2000/month recommended budget
- **Review management**: $50-200/month
- **CRM**: $0-50/month (many free options)
- **Local Service Ads**: Pay per lead ($20-60 per lead typical)

### Total Minimum Monthly: ~$30-50
### Recommended Monthly: $200-500 (with ads)

---

## ⚡ LAUNCH DAY CHECKLIST

- [ ] **Verify all contact info is real**
- [ ] **Test booking flow 3+ times**
- [ ] **Set up Google Alerts** for company name
- [ ] **Monitor email/phone** for first 48 hours closely
- [ ] **Announce on personal social media**
- [ ] **Post in local Facebook groups** (check rules)
- [ ] **Tell friends/family** to spread word
- [ ] **Monitor analytics** for any errors/issues
- [ ] **Be ready to respond fast** to all inquiries

---

## 📊 SUCCESS METRICS TO TRACK

- Website visitors (daily/weekly)
- Conversion rate (visitors → leads)
- Leads per day
- Bookings per week
- Cost per lead (if running ads)
- Customer acquisition cost
- Average job value
- Customer lifetime value
- Review rating and count
- Organic search position for key terms

---

## 🔥 CURRENT CRITICAL ISSUES

1. ❌ **Fake phone number on live site**
2. ❌ **Fake email address on live site**  
3. ❌ **No way to actually book/contact**
4. ❌ **No Calendly integration**
5. ❌ **Broken mobile menu**
6. ❌ **No analytics tracking**
7. ❌ **No Google Business Profile**
8. ❌ **No social media presence**
9. ❌ **Missing legal pages**
10. ❌ **No real team photos**

**YOU CANNOT LAUNCH WITH ITEMS 1-4 UNFIXED. These are showstoppers.**

---

## 💡 RECOMMENDATIONS

### IMMEDIATE (Next 24 hours):
1. Replace contact info with real phone/email
2. Set up Calendly
3. Integrate Calendly into all CTA buttons
4. Set up basic Google Analytics

### THIS WEEK (Next 7 days):
1. Fix mobile menu
2. Create Google Business Profile
3. Add privacy policy
4. Set up Google Workspace email
5. Test everything on mobile

### NEXT 2 WEEKS (Post-Launch):
1. Get 5-10 initial reviews
2. Take professional photos
3. Set up social media accounts
4. Create Facebook/Instagram ads
5. Monitor and optimize based on data

---

## 🎬 READY TO LAUNCH?

**NO** - You have critical blockers that must be fixed first.

**Timeline to Launch-Ready:**
- If you work on this today: **2-3 days** (waiting for Google Business verification)
- If you do minimum: **Tomorrow** (just fix contact info + Calendly)
- If you do it right: **1-2 weeks** (complete everything above)

**Recommended Approach:**
Launch with real contact info + Calendly ASAP, then improve weekly based on this checklist.

---

**Last Updated:** October 23, 2025  
**Created by:** GitHub Copilot Red Team Audit  
**For:** Horizon Valley Services LLC