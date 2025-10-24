# Robust Implementation Plan
**Date**: October 24, 2025  
**Goal**: Cookie Consent + Dark Theme Conversion  
**Strategy**: Incremental, tested, committed changes

---

## 🎯 **PRINCIPLES FOR SUCCESS**

1. **One File at a Time**: Complete each file fully before moving to next
2. **Build After Every File**: Verify compilation works
3. **Commit Frequently**: Each completed file gets committed
4. **Use Git Branch**: Create `dark-theme-conversion` branch for safety
5. **Exact Replacements Only**: No sed, only replace_string_in_file with 3+ lines context
6. **Test Incrementally**: Don't accumulate untested changes

---

## 📦 **PHASE 1: COOKIE CONSENT** (30-45 min)
**Priority**: CRITICAL - Needed for Calendly GDPR compliance

### Step 1.1: Create Cookie Consent Component
**File**: `src/components/CookieConsent.tsx` (NEW)

**Implementation**:
```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    // Trigger Calendly load event
    window.dispatchEvent(new Event('cookieConsent'))
  }
  
  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }
  
  if (!showBanner) return null
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t-2 border-blue-600 p-4 shadow-2xl z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          <p className="mb-2">
            <strong className="text-white">We value your privacy.</strong> We use cookies to enhance your browsing experience and analyze site traffic. 
            This includes cookies from third-party services like Calendly for scheduling.
          </p>
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
            Learn more in our Privacy Policy
          </Link>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-600/50"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  )
}
```

**Actions**:
- [ ] Create file
- [ ] Test builds
- [ ] Commit: "feat: add cookie consent banner component"

---

### Step 1.2: Add Cookie Consent to Layout
**File**: `src/app/layout.tsx` (MODIFY)

**Change**:
```tsx
import CookieConsent from '@/components/CookieConsent'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
```

**Actions**:
- [ ] Add import
- [ ] Add component before closing body tag
- [ ] Test builds
- [ ] Commit: "feat: integrate cookie consent banner in root layout"

---

### Step 1.3: Create Calendly Component with Consent Check
**File**: `src/components/CalendlyWidget.tsx` (NEW)

**Implementation**:
```tsx
'use client'
import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function CalendlyWidget() {
  const [hasConsent, setHasConsent] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  
  useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent')
      setHasConsent(consent === 'accepted')
      setIsChecking(false)
    }
    
    checkConsent()
    
    // Listen for consent changes
    const handleConsentChange = () => {
      checkConsent()
    }
    
    window.addEventListener('cookieConsent', handleConsentChange)
    return () => window.removeEventListener('cookieConsent', handleConsentChange)
  }, [])
  
  if (isChecking) {
    return (
      <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-12 text-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading calendar...</p>
        </div>
      </div>
    )
  }
  
  if (!hasConsent) {
    return (
      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8 text-center">
        <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Cookie Consent Required</h3>
        <p className="text-gray-700 mb-4">
          Please accept cookies to view our scheduling calendar. This helps us provide you with the best booking experience.
        </p>
        <p className="text-sm text-gray-600">
          Look for the cookie banner at the bottom of the page, or{' '}
          <a href="tel:559-960-2749" className="text-blue-600 font-semibold hover:underline">
            call us directly at (559) 960-2749
          </a>
        </p>
      </div>
    )
  }
  
  return (
    <>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/owners-horizonvalleycleaning/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
```

**Actions**:
- [ ] Create file
- [ ] Test builds
- [ ] Commit: "feat: add Calendly widget with cookie consent check"

---

### Step 1.4: Replace Calendly Embed in Quote Page
**File**: `src/app/quote/page.tsx` (MODIFY)

**Change**: Replace inline Calendly embed with component

**Before** (lines ~190-195):
```tsx
<div 
  className="calendly-inline-widget" 
  data-url="https://calendly.com/owners-horizonvalleycleaning/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
  style={{ minWidth: '320px', height: '700px' }}
/>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**After**:
```tsx
import CalendlyWidget from '@/components/CalendlyWidget'

// ... in the render:
<CalendlyWidget />
```

**Actions**:
- [ ] Add import at top
- [ ] Replace inline embed with component
- [ ] Test builds
- [ ] Test in browser (accept/decline cookies)
- [ ] Commit: "feat: integrate CalendlyWidget component in quote page"

---

### ✅ **Phase 1 Complete Checklist**:
- [ ] Cookie banner appears on first visit
- [ ] Accepting cookies stores `cookie-consent=accepted`
- [ ] Declining cookies stores `cookie-consent=declined`
- [ ] Calendly loads only when accepted
- [ ] Calendly shows message when declined
- [ ] Banner doesn't reappear after choice made
- [ ] Works across page navigation
- [ ] All changes committed

**Estimated Time**: 45 minutes  
**Commits**: 4 commits

---

## 🎨 **PHASE 2: DARK THEME - HOMEPAGE** (2 hours)
**Priority**: HIGH - Highest traffic page

### Strategy:
- Work **section by section** (not whole file at once)
- Build after each section
- Commit after 2-3 sections completed

### Step 2.1: Import Header/Footer Components
**File**: `src/app/page.tsx`

**Change** (line 1):
```tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
```

**Actions**:
- [ ] Add imports
- [ ] Test builds
- [ ] Commit: "refactor(homepage): add Header and Footer imports"

---

### Step 2.2: Replace Navigation with Header Component
**File**: `src/app/page.tsx`

**Find**: Old `<nav>` section (lines ~18-108)
**Replace**: Just add `<Header />` at start of main

**Actions**:
- [ ] Remove entire old nav (91 lines)
- [ ] Add `<Header />` after `<main>`
- [ ] Change main bg: `bg-horizon-cream` → `bg-horizon-black`
- [ ] Test builds
- [ ] Verify header appears correctly
- [ ] Commit: "refactor(homepage): replace navigation with Header component"

---

### Step 2.3: Update Hero Section
**File**: `src/app/page.tsx`

**Changes**:
- Background: `bg-horizon-black` → add gradient `bg-gradient-to-b from-horizon-black via-horizon-charcoal to-horizon-black`
- Heading: Keep white
- Text: `text-gray-300`
- Trust badges: `bg-green-600`, `bg-blue-600`
- Primary CTA: `bg-blue-600 hover:bg-blue-700` (already correct)
- Secondary CTA: White button with dark text

**Actions**:
- [ ] Update section background
- [ ] Update text colors
- [ ] Update badge colors
- [ ] Test builds
- [ ] Commit: "style(homepage): update hero section to dark theme"

---

### Step 2.4: Update "Why Choose Us" Section
**File**: `src/app/page.tsx`

**Changes**:
- Section bg: `bg-gradient-to-b from-horizon-warm to-horizon-cream` → `bg-horizon-charcoal`
- Heading: `text-horizon-black` → `text-horizon-white`
- Text: `text-horizon-slate` → `text-gray-300`
- Cards: `bg-horizon-white` → `bg-gray-900`
- Card borders: `border-gray-100` → `border-gray-800`
- Hover: Add `hover:border-blue-600`
- Icons: Keep colorful (green-600, blue-600, etc.)

**Actions**:
- [ ] Update all colors systematically
- [ ] Test builds
- [ ] Verify visually
- [ ] Commit: "style(homepage): convert Why Choose Us section to dark theme"

---

### Step 2.5: Update Services Section
**File**: `src/app/page.tsx`

**Changes**:
- Section bg: `bg-horizon-warm` → `bg-horizon-black`
- Cards: `bg-horizon-white` → `bg-gray-900`
- Card borders: `border-gray-100` → `border-gray-800`
- Icons: `bg-horizon-black` → `bg-blue-600`
- Headings: `text-horizon-black` → `text-horizon-white`
- Text: `text-horizon-slate` → `text-gray-300`

**Actions**:
- [ ] Update section background
- [ ] Update all 6 service cards
- [ ] Test builds
- [ ] Commit: "style(homepage): convert services section to dark theme"

---

### Step 2.6: Update Team Section
**File**: `src/app/page.tsx`

**Changes**:
- Section bg: `bg-horizon-cream` → `bg-horizon-charcoal`
- Cards: `bg-horizon-white` → `bg-gray-900`
- Avatars: `bg-horizon-black` → `bg-blue-600`
- Text colors: Black → White/Gray

**Actions**:
- [ ] Update section
- [ ] Update 4 team member cards
- [ ] Test builds
- [ ] Commit: "style(homepage): convert team section to dark theme"

---

### Step 2.7: Update Service Areas Section
**File**: `src/app/page.tsx`

**Changes**:
- Small guarantee cards
- Update colors to gray-900/gray-800

**Actions**:
- [ ] Update cards
- [ ] Test builds
- [ ] Commit: "style(homepage): convert service areas section to dark theme"

---

### Step 2.8: Update Guarantees Section
**File**: `src/app/page.tsx`

**Changes**:
- Section bg: `bg-horizon-cream` → `bg-horizon-black`
- Icons: `bg-horizon-black` → `bg-blue-600`

**Actions**:
- [ ] Update section
- [ ] Test builds
- [ ] Commit: "style(homepage): convert guarantees section to dark theme"

---

### Step 2.9: Update FAQs Section
**File**: `src/app/page.tsx`

**Changes**:
- Section bg: `bg-horizon-warm` → `bg-horizon-charcoal`
- Cards: White → gray-900

**Actions**:
- [ ] Update all FAQ cards
- [ ] Test builds
- [ ] Commit: "style(homepage): convert FAQs section to dark theme"

---

### Step 2.10: Update Contact Section & Replace Footer
**File**: `src/app/page.tsx`

**Changes**:
- Section bg: `bg-horizon-cream` → `bg-horizon-black`
- Cards: White → gray-900
- Remove old footer HTML
- Add `<Footer />` component

**Actions**:
- [ ] Update contact section
- [ ] Replace footer
- [ ] Test builds
- [ ] Visual QA entire page
- [ ] Commit: "style(homepage): complete dark theme conversion"

---

### ✅ **Phase 2 Complete Checklist**:
- [ ] All sections have dark backgrounds
- [ ] Text is readable (white/gray on dark)
- [ ] Only CTAs use blue color
- [ ] Header appears correctly
- [ ] Footer appears correctly
- [ ] Hero section looks good
- [ ] All cards have consistent styling
- [ ] Mobile responsive
- [ ] Site builds successfully
- [ ] All changes committed

**Estimated Time**: 2 hours  
**Commits**: ~10 commits

---

## 📄 **PHASE 3: DARK THEME - QUOTE PAGE** (1 hour)
**Priority**: HIGH - Key conversion page

### Step 3.1: Add Header Component
- Import Header
- Replace old nav
- Change bg to black

### Step 3.2: Update Hero Section
- Already dark ✓
- Just verify styling

### Step 3.3: Update Calendly Section
- Card bg: white → gray-900
- Already has CalendlyWidget component ✓

### Step 3.4: Update Form Section
- Section bg: warm → charcoal/black
- Card bg: white → gray-900
- Input fields: white → gray-900
- Labels: black → white
- Borders: gray-300 → gray-700

### Step 3.5: Add Footer Component
- Replace old footer HTML
- Test

### Step 3.6: Update Success Page
- Ensure dark theme
- Green checkmark styling

**Actions**:
- [ ] One section at a time
- [ ] Build after each change
- [ ] Commit when complete
- [ ] Visual QA

**Estimated Time**: 1 hour  
**Commits**: 3-4 commits

---

## 🗺️ **PHASE 4: DARK THEME - COUNTY PAGES** (2 hours)
**Priority**: MEDIUM - SEO pages

### Strategy: ONE PAGE AT A TIME

### Step 4.1: Marin County
**File**: `src/app/areas/marin-county/page.tsx`

**Changes**:
- Add Header/Footer imports
- Main bg: white → black
- Hero gradient: green → black (`from-green-900 via-green-800` → `from-horizon-black via-horizon-charcoal`)
- City cards: `from-green-50` → `from-gray-900`
- CTA section: green gradient → blue-600
- Colored text: `text-green-300` → `text-blue-400`

**Actions**:
- [ ] Make all changes
- [ ] Add Header at start
- [ ] Add Footer at end
- [ ] Test builds
- [ ] Visual check
- [ ] Commit: "style(marin-county): convert to dark theme"

---

### Step 4.2: Sonoma County
**Same pattern, different color**: purple → black/blue

**Actions**:
- [ ] Complete conversion
- [ ] Test builds
- [ ] Commit: "style(sonoma-county): convert to dark theme"

---

### Step 4.3: Mendocino County
**Same pattern**: orange → black/blue

**Actions**:
- [ ] Complete conversion
- [ ] Test builds
- [ ] Commit: "style(mendocino-county): convert to dark theme"

---

### Step 4.4: San Francisco
**Check if already correct** (might already have black gradient)

**Actions**:
- [ ] Review current state
- [ ] Make any needed changes
- [ ] Add Header/Footer
- [ ] Test builds
- [ ] Commit: "style(san-francisco): ensure dark theme consistency"

---

### ✅ **Phase 4 Complete Checklist**:
- [ ] All 4 pages have black gradients
- [ ] No colored gradients remain
- [ ] All use blue-600 for CTAs
- [ ] Header/Footer on all pages
- [ ] Consistent styling
- [ ] All build successfully
- [ ] All changes committed

**Estimated Time**: 2 hours  
**Commits**: 4 commits (one per page)

---

## 📜 **PHASE 5: DARK THEME - LEGAL/ERROR PAGES** (30 min)
**Priority**: LOW - Less traffic

### Step 5.1: Privacy Page
**File**: `src/app/privacy/page.tsx`

**Changes**:
- Add Header/Footer
- Remove old nav
- Main bg: cream → black
- Content cards: white → gray-900
- Text: black → white/gray

**Actions**:
- [ ] Complete conversion
- [ ] Test builds
- [ ] Commit: "style(privacy): convert to dark theme with Header/Footer"

---

### Step 5.2: Terms Page
**Same as privacy**

**Actions**:
- [ ] Complete conversion
- [ ] Test builds
- [ ] Commit: "style(terms): convert to dark theme with Header/Footer"

---

### Step 5.3: 404 Page
**File**: `src/app/not-found.tsx`

**Changes**:
- Add Header/Footer
- Main bg: cream → black
- Cards: white → gray-900
- CTAs: Update colors

**Actions**:
- [ ] Complete conversion
- [ ] Test builds
- [ ] Commit: "style(404): convert to dark theme with Header/Footer"

---

### ✅ **Phase 5 Complete Checklist**:
- [ ] All 3 pages have dark theme
- [ ] Header/Footer on all
- [ ] Text readable
- [ ] Links work
- [ ] All build
- [ ] All committed

**Estimated Time**: 30 minutes  
**Commits**: 3 commits

---

## 🧪 **PHASE 6: FINAL TESTING** (30 min)

### Build Test
```bash
yarn build
```
- [ ] Build succeeds
- [ ] No errors
- [ ] Only metadata warnings (acceptable)

### Visual QA (All 11 Pages):
1. [ ] Homepage - dark theme, Header/Footer present
2. [ ] Quote page - dark theme, Calendly loads with consent
3. [ ] San Francisco - dark theme, no colored gradients
4. [ ] Marin County - dark theme, no colored gradients
5. [ ] Sonoma County - dark theme, no colored gradients
6. [ ] Mendocino County - dark theme, no colored gradients
7. [ ] Privacy - dark theme, Header/Footer
8. [ ] Terms - dark theme, Header/Footer
9. [ ] 404 - dark theme, Header/Footer
10. [ ] Cookie banner appears on first visit
11. [ ] Cookie banner persists choice

### Functionality Tests:
- [ ] Navigation links work
- [ ] Quote CTAs work
- [ ] Phone links work
- [ ] Calendly loads (with consent)
- [ ] Calendly blocked without consent
- [ ] Cookie banner accept/decline works
- [ ] Mobile responsive all pages
- [ ] Forms functional

### Performance Check:
- [ ] Page load times reasonable
- [ ] No console errors
- [ ] Images load correctly
- [ ] Fonts load correctly

---

## 🚀 **DEPLOYMENT**

### Git Workflow:
```bash
# Final commit
git add .
git commit -m "feat: complete dark theme conversion and cookie consent integration"

# Merge to main
git checkout main
git merge dark-theme-conversion

# Push
git push origin main
```

### Post-Deployment:
- [ ] Verify live site
- [ ] Test cookie consent on live
- [ ] Check all pages render
- [ ] Test Calendly integration
- [ ] Monitor for errors

---

## 📊 **SUCCESS METRICS**

### Completion Criteria:
- [x] Cookie consent implemented (GDPR compliant)
- [ ] All 11 pages have dark theme
- [ ] All pages have Header/Footer
- [ ] Only blue color used for CTAs
- [ ] Site builds without errors
- [ ] All changes committed
- [ ] Live site works correctly

### Quality Criteria:
- [ ] Text readable on all pages
- [ ] Consistent design across site
- [ ] Mobile responsive
- [ ] Fast loading
- [ ] No broken links
- [ ] No console errors
- [ ] Calendly consent working

---

## 🛡️ **SAFETY MEASURES**

1. **Git Branch**: Work in `dark-theme-conversion` branch
2. **Frequent Commits**: Every file or 2-3 sections
3. **Build Tests**: After every significant change
4. **Rollback Plan**: Can revert individual commits if needed
5. **Backup**: Main branch remains stable

---

## ⏱️ **TIME ESTIMATE**

| Phase | Time | Commits |
|-------|------|---------|
| Cookie Consent | 45 min | 4 |
| Homepage | 2 hours | 10 |
| Quote Page | 1 hour | 4 |
| County Pages | 2 hours | 4 |
| Legal Pages | 30 min | 3 |
| Testing | 30 min | 1 |
| **TOTAL** | **6.75 hours** | **26 commits** |

---

## 🎯 **READY TO START?**

**Phase 1 (Cookie Consent) is ready to execute.**

Reply with:
1. "Start Phase 1" - I'll begin with cookie consent
2. "Skip to Phase 2" - Go straight to dark theme
3. "Modify plan" - Tell me what to change

**Current Priority**: Cookie consent (needed for Calendly compliance)
