<script>
  export let page = 'home'
  
  const siteUrl = 'https://hankandyu.com'
  const siteName = 'Hank and Yu'
  const shopUrl = 'https://shop.hankandyu.com'
  const youtubeUrl = 'https://youtube.com/@HankandYu'
  const instagramUrl = 'https://instagram.com/hankandyu'
  const tiktokUrl = 'https://tiktok.com/@hankandyu'
  
  const pageData = {
    home: {
      title: 'Hank and Yu | Travel Vlog Between Europe and Japan',
      description: "We're a couple and family vlog traveling between Europe and Japan. Watch our travel adventures, slow travel moments, and daily life vlogs from Europe to Japan.",
      image: '/images/hero.jpg',
      schema: 'website'
    },
    'our-story': {
      title: 'Our Story - Hank and Yu | Travel Vloggers',
      description: 'Learn how we met in London and started our travel vlog journey between Europe and Japan. Our mission to share authentic travel moments and slow travel lifestyle.',
      image: '/images/story-1.jpg',
      schema: 'aboutPage'
    },
    contact: {
      title: 'Contact Hank and Yu | Business Inquiries & Collaborations',
      description: 'Get in touch with Hank and Yu for brand partnerships, sponsorships, collaborations, or just to say hello. We read every message!',
      image: '/images/hero.jpg',
      schema: 'contactPage'
    },
    'not-found': {
      title: 'Page Not Found - Hank and Yu',
      description: 'The page you are looking for does not exist.',
      image: '/images/hero.jpg',
      schema: 'website'
    }
  }
  
  $: data = pageData[page] || pageData.home
  $: isHome = page === 'home'
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": siteUrl + "/favicon.svg",
    "sameAs": [youtubeUrl, instagramUrl, tiktokUrl],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@hankandyu.com",
      "contactType": "business"
    }
  }
  
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": siteUrl + "/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteName,
    "url": siteUrl,
    "sameAs": [youtubeUrl, instagramUrl, tiktokUrl],
    "description": "A couple and family travel vlog traveling between Europe and Japan",
    "jobTitle": "Travel YouTubers"
  }
  
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Hank and Yu Travel Vlogs",
    "description": "Travel vlogs between Europe and Japan featuring slow travel, couple adventures, and daily life moments",
    "thumbnailUrl": siteUrl + "/images/hero.jpg",
    "uploadDate": "2024-01-01",
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": siteUrl + "/favicon.svg"
      }
    }
  }
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta name="keywords" content="travel vlog, couple vlog, Europe travel, Japan travel, family vlog, travel youtube channel, slow travel, lifestyle vlog, Hank and Yu, European travel vlog, Japan travel vlog, travel bloggers" />
  <meta name="author" content={siteName} />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <meta name="googlebot" content="index, follow" />
  <link rel="canonical" href={siteUrl + (page !== 'home' ? '/' + page : '')} />
  <link rel="alternate" href={siteUrl} hreflang="en" />
  
  <!-- Geo tags -->
  <meta name="geo.region" content="GB" />
  <meta name="geo.placename" content="London" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/favicon.svg" />
  
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://www.youtube.com" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={data.schema === 'website' ? 'website' : data.schema} />
  <meta property="og:url" content={siteUrl + (page !== 'home' ? '/' + page : '')} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:image" content={siteUrl + data.image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale:alternate" content="en_GB" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@HankandYu" />
  <meta name="twitter:creator" content="@HankandYu" />
  <meta name="twitter:url" content={siteUrl + (page !== 'home' ? '/' + page : '')} />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta name="twitter:image" content={siteUrl + data.image} />
  
  <!-- Additional SEO -->
  <meta name="format-detection" content="telephone=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  
  <!-- JSON-LD Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(personSchema)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(videoSchema)}</script>`}
  
  <!-- Breadcrumb Schema -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl + "/" },
      ...(page !== 'home' ? [{ "@type": "ListItem", position: 2, name: page === 'our-story' ? 'Our Story' : page === 'contact' ? 'Contact' : page, item: siteUrl + '/' + page }] : [])
    ]
  })}</script>`}
  
  <!-- Article Schema for About Page -->
  {#if page === 'our-story'}
    {@html `<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Our Story - Hank and Yu",
      "description": "Learn how we met in London and started our travel vlog journey between Europe and Japan.",
      "author": {
        "@type": "Person",
        "name": "Hank and Yu"
      },
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "logo": {
          "@type": "ImageObject",
          "url": siteUrl + "/favicon.svg"
        }
      },
      "datePublished": "2024-01-01",
      "dateModified": "2024-01-01",
      "image": siteUrl + "/images/story-1.jpg"
    })}</script>`}
  {/if}
</svelte:head>