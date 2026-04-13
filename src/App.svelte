<script>
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  import SEO from './components/SEO.svelte'
  import Home from './pages/Home.svelte'
  import OurStory from './pages/OurStory.svelte'
  import Contact from './pages/Contact.svelte'
  import NotFound from './pages/NotFound.svelte'

  let currentPath = window.location.pathname
  
  $: page = getPage(currentPath)

  function getPage(path) {
    const cleanPath = path || '/'
    
    switch(cleanPath) {
      case '/':
      case '/index.html':
        return 'home'
      case '/our-story':
        return 'our-story'
      case '/contact':
        return 'contact'
      default:
        return 'not-found'
    }
  }

  window.addEventListener('popstate', () => {
    currentPath = window.location.pathname
  })

  function navigate(path) {
    window.history.pushState({}, '', path)
    currentPath = path
  }
</script>

<SEO {page} />

<Nav {currentPath} onNavigate={navigate} />

<main>
  {#if page === 'home'}
    <Home onNavigate={navigate} />
  {:else if page === 'our-story'}
    <OurStory />
  {:else if page === 'contact'}
    <Contact />
  {:else}
    <NotFound onNavigate={navigate} />
  {/if}
</main>

<Footer />

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    background-color: #0D0D0D;
    color: #F5F2ED;
    line-height: 1.8;
    letter-spacing: 0.02em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(h1, h2, h3, h4) {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
    letter-spacing: 0.04em;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  :global(img) {
    max-width: 100%;
    display: block;
  }

  :global(::selection) {
    background: rgba(201, 168, 124, 0.3);
    color: #fff;
  }

  main {
    min-height: calc(100vh - 200px);
  }
</style>
