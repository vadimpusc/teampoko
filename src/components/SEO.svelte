<script>
  export let page = 'home'
  
  const siteUrl = 'https://hankandyu.com'
  const shopUrl = 'https://shop.hankandyu.com'
  
  const pageData = {
    home: {
      title: 'Hank and Yu - Travel & Family Vlogs Between Europe and Japan',
      description: "We're a couple and family vlog traveling between Europe and Japan. We love discovering new places and sharing the slow moments that make travel meaningful - beachfront sunsets, train-window views, spontaneous detours, and cozy mornings with coffee.",
      image: '/images/hero.jpg'
    },
    'our-story': {
      title: 'Our Story - Hank and Yu',
      description: 'We met in London and decided to document our life together on YouTube. From weekend escapes to quiet days at home, our channel is a diary of the places we visit and the moments we want to remember.',
      image: '/images/story-1.jpg'
    },
    contact: {
      title: 'Contact - Hank and Yu',
      description: 'Get in touch with Hank and Yu for sponsorships, collaborations, or just to say hello. We read every message!',
      image: '/images/hero.jpg'
    },
    'not-found': {
      title: 'Page Not Found - Hank and Yu',
      description: 'The page you are looking for does not exist.',
      image: '/images/hero.jpg'
    }
  }
  
  $: data = pageData[page] || pageData.home
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta name="keywords" content="travel vlog, couple vlog, Europe, Japan, family vlog, travel youtube, lifestyle, Hank and Yu" />
  <link rel="canonical" href={siteUrl} />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:image" content={siteUrl + data.image} />
  <meta property="og:site_name" content="Hank and Yu" />
  <meta property="og:locale" content="en_US" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={siteUrl} />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta name="twitter:image" content={siteUrl + data.image} />
  
  <!-- Schema.org -->
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hank and Yu",
    "url": siteUrl,
    "sameAs": [
      "https://www.youtube.com/@HankandYu",
      "https://www.instagram.com/hankandyu",
      "https://www.tiktok.com/@hankandyu"
    ],
    "description": "A couple and family vlog traveling between Europe and Japan"
  })}</script>
  
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl + "/" },
      { "@type": "ListItem", position: 2, name: "Our Story", item: siteUrl + "/our-story" },
      { "@type": "ListItem", position: 3, name: "Shop", item: shopUrl },
      { "@type": "ListItem", position: 4, name: "Contact", item: siteUrl + "/contact" }
    ]
  })}</script>
  
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hank and Yu",
    "url": siteUrl,
    "sameAs": [
      "https://www.youtube.com/@HankandYu",
      "https://www.instagram.com/hankandyu",
      "https://www.tiktok.com/@hankandyu"
    ]
  })}</script>
</svelte:head>