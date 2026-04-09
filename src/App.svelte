<script>
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  import SEO from './components/SEO.svelte'
  import Home from './pages/Home.svelte'
  import OurStory from './pages/OurStory.svelte'
  import YouTube from './pages/YouTube.svelte'
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
      case '/youtube':
        return 'youtube'
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
  {:else if page === 'youtube'}
    <YouTube />
  {:else if page === 'contact'}
    <Contact />
  {:else}
    <NotFound onNavigate={navigate} />
  {/if}
</main>

<Footer onNavigate={navigate} />

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: 'Source Sans 3', sans-serif;
    background-color: #FEFCF9;
    color: #2D2926;
    line-height: 1.6;
  }

  :global(h1, h2, h3, h4) {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  :global(img) {
    max-width: 100%;
    display: block;
  }

  main {
    min-height: calc(100vh - 160px);
  }
</style>