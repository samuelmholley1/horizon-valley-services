# Horizon Valley Services LLC - Landing Page

A professional landing page for Horizon Valley Services LLC, a local exterior cleaning and maintenance company serving Mendocino, Lake, and Sonoma counties in Northern California.

## Company Information

**Horizon Valley Services LLC** is a locally-owned exterior cleaning and maintenance company based in Ukiah, California. We provide professional services throughout Mendocino, Lake, and Sonoma counties.

### Co-Founders
- Cody White
- Treyton Scott  
- Caleb White
- Hudson Ford

### Services
- Professional pressure washing
- Window cleaning (residential & commercial)
- Exterior maintenance and facility upkeep
- Gutter cleaning

### Service Areas
- **Mendocino County** - Ukiah and surrounding areas
- **Lake County** - Complete county coverage  
- **Sonoma County** - Northern regions and beyond

## Tech Stack

This project is built with modern web technologies:

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with React 18
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom color scheme
- **Package Manager**: [Yarn Berry](https://yarnpkg.com/) (v4.x) with node_modules (not PnP)
- **Deployment**: Optimized for [Vercel](https://vercel.com/) deployment

## Getting Started

### Prerequisites
- Node.js 18.x or later
- Yarn (v4.x Berry - will be automatically configured)

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   yarn install
   ```

### Development

Start the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) with your browser to see the result.

### Building for Production

Create a production build:
```bash
yarn build
```

Start the production server:
```bash
yarn start
```

## Project Structure

```
├── src/
│   └── app/
│       ├── globals.css      # Global styles with Tailwind
│       ├── layout.tsx       # Root layout component
│       └── page.tsx         # Main landing page
├── .github/
│   └── copilot-instructions.md  # Project guidance
├── package.json             # Dependencies and scripts
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── .yarnrc.yml            # Yarn configuration
```

## Features

### Landing Page Sections
- **Navigation** - Clean, responsive navigation bar
- **Hero Section** - Compelling value proposition with call-to-action
- **Services** - Overview of cleaning and maintenance services
- **Team** - Introduction to the four co-founders
- **Service Areas** - Geographic coverage information
- **Contact** - Contact information and quote request
- **Footer** - Company information and copyright

### Design Features
- **Responsive Design** - Mobile-first approach, works on all device sizes
- **Professional Styling** - Clean, trustworthy design aesthetic
- **Custom Color Scheme** - Brand colors (horizon-blue, horizon-green)
- **Accessibility** - Semantic HTML and proper contrast ratios
- **SEO Optimized** - Meta tags, structured content, and fast loading

## Customization

### Brand Colors
The project uses custom Tailwind colors defined in `tailwind.config.js`:
- `horizon-blue`: #2563eb
- `horizon-green`: #16a34a  
- `horizon-gray`: #64748b

### Contact Information
Update contact details in `src/app/page.tsx`:
- Phone number
- Email address
- Physical address/location

### Content Updates
- Service descriptions
- Team member information
- Service area details
- Company messaging

## Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Scripts

- `yarn dev` - Start development server
- `yarn build` - Create production build
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Technologies Used

- **Next.js**: React framework with App Router
- **React**: UI library
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Yarn Berry**: Modern package manager with node_modules strategy

## Support

For questions about the website or to request updates, contact the development team or Horizon Valley Services LLC directly.

---

© 2025 Horizon Valley Services LLC. All rights reserved.
