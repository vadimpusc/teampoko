# Hank and Yu - Website Specification

## Project Overview
- **Project Name**: Hank and Yu
- **Type**: Static Svelte website (non-Kit, with Vite)
- **Core Functionality**: Personal brand site for YouTube couple featuring travel/family vlogs between Europe and Japan
- **Target Users**: YouTube subscribers, potential sponsors, travel enthusiasts

## Deployment
- **Platform**: GitHub Pages
- **Base Path**: `/hankandyu`

## Pages

### 1. Home (`/`)
- Hero section with couple image and "WE'RE HANK AND YU" text
- Brief tagline about their content
- Latest YouTube uploads section (embedded video grid)
- Footer with social links

### 2. Our Story (`/our-story`)
- Full page content explaining their journey
- Meet in London, document life on YouTube
- Channel description and values
- Footer with social links

### 3. YouTube (`/youtube`)
- Embedded YouTube channel
- Latest videos grid
- Link to subscribe
- Footer with social links

### 4. Shop (`/shop`)
- External links to merch/stores
- Simple redirect-style page
- Footer with social links

### 5. Contact Us (`/contact`)
- Contact information
- Email: hello@hankandyu.com
- Message about sponsorships
- Footer with social links

## Visual Design

### Color Palette
- **Primary Background**: `#FEFCF9` (warm cream)
- **Secondary Background**: `#F5F0E8` (light warm beige)
- **Primary Text**: `#2D2926` (warm charcoal)
- **Secondary Text**: `#6B6560` (muted brown)
- **Accent**: `#C9A87C` (warm gold)
- **Accent Hover**: `#B8956A` (darker gold)
- **Card Background**: `#FFFFFF` (white)

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Source Sans 3 (clean sans-serif)
- **Hero Text**: 4rem desktop, 2.5rem mobile
- **Section Titles**: 2.5rem desktop, 1.75rem mobile
- **Body Text**: 1.125rem

### Layout
- Max content width: 1200px
- Responsive breakpoints: 480px, 768px, 1024px
- Generous whitespace
- Card-based layouts for video grids

### Components
- **Navigation**: Fixed top, transparent background, blur on scroll
- **Hero**: Full-width image with centered text overlay
- **Video Card**: Thumbnail, title, date, view count
- **Button**: Rounded, gold accent, hover animation
- **Footer**: Dark background, social icons, copyright

## Functionality

### Navigation
- Sticky header with page links
- Mobile hamburger menu
- Active state for current page

### YouTube Integration
- Fetch latest videos via YouTube Data API (or use oEmbed/iframe fallback)
- Fallback: Display embedded YouTube channel placeholder
- Video grid with 3 columns desktop, 2 tablet, 1 mobile

### Responsive Behavior
- Mobile-first approach
- Touch-friendly tap targets (min 44px)
- Optimized images for different screen sizes
- Fluid typography scaling

## Image Placeholders
- Couple hero: `https://placehold.co/1920x1080/e8e0d8/6b6560?text=Couple+Image`
- Video thumbnails: `https://placehold.co/640x360/e8e0d8/6b6560?text=Video+Thumbnail`
- Profile: `https://placehold.co/400x400/e8e0d8/6b6560?text=Hank+&+Yu`

## Footer Content
- Social links: YouTube, Instagram, TikTok, Twitter
- Copyright: © 2026 Hank and Yu. All rights reserved.

## Acceptance Criteria
1. All 5 pages accessible and navigable
2. Responsive on mobile, tablet, and desktop
3. Navigation works correctly with base path
4. YouTube section shows video grid
5. External shop links open in new tab
6. Contact email is clickable mailto link
7. Footer appears on all pages with social icons
8. All placeholder images display correctly
9. No console errors on page load