<script>
  export let currentPath = '/'
  export let onNavigate = () => {}

  let scrolled = false
  let mobileMenuOpen = false

  function handleScroll() {
    scrolled = window.scrollY > 50
  }

  function getCleanPath(path) {
    return path || '/'
  }

  $: activePage = getCleanPath(currentPath)
  $: isHome = activePage === '/'
  $: showBackground = scrolled || isHome

  const navItems = [
    { path: '/', label: 'Home', href: '/', external: false },
    { path: '/our-story', label: 'Our Story', href: '/our-story', external: false },
    { path: '/shop', label: 'Shop', href: 'https://shop.hankandyu.com', external: true },
    { path: '/contact', label: 'Contact', href: '/contact', external: false }
  ]

  function navigate(path) {
    window.scrollTo(0, 0)
    onNavigate(path)
    mobileMenuOpen = false
  }
</script>

<svelte:window on:scroll={handleScroll} />

<header class:scrolled class:home={isHome}>
  <nav class="nav-container">
    <a href="/" class="logo" on:click|preventDefault={() => navigate('/')}>
      <span class="logo-text">Hank & Yu</span>
    </a>

    <button 
      class="mobile-toggle" 
      class:open={mobileMenuOpen}
      on:click={() => mobileMenuOpen = !mobileMenuOpen}
      aria-label="Toggle menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" class:open={mobileMenuOpen}>
      {#each navItems as item}
        <li>
          {#if item.external}
            <a 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              class:active={activePage === item.path}
            >
              {item.label}
            </a>
          {:else}
            <a 
              href={item.href}
              class:active={activePage === item.path}
              on:click|preventDefault={() => navigate(item.href)}
            >
              {item.label}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.25rem 2rem;
    transition: all 0.3s ease;
    background: transparent;
  }

  header.home {
    background: rgba(254, 252, 249, 0.85);
    backdrop-filter: blur(8px);
  }

  header.scrolled {
    background: rgba(254, 252, 249, 0.98);
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 20px rgba(45, 41, 38, 0.1);
    padding: 1rem 2rem;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: #2D2926;
  }

  .logo-text {
    letter-spacing: 0.02em;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
  }

  .nav-links a {
    font-size: 0.95rem;
    font-weight: 500;
    color: #6B6560;
    position: relative;
    padding: 0.25rem 0;
    transition: color 0.2s ease;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #C9A87C;
    transition: width 0.3s ease;
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: #2D2926;
  }

  .nav-links a:hover::after,
  .nav-links a.active::after {
    width: 100%;
  }

  .mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
  }

  .mobile-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: #2D2926;
    transition: all 0.3s ease;
  }

  .mobile-toggle.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .mobile-toggle.open span:nth-child(2) {
    opacity: 0;
  }

  .mobile-toggle.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 768px) {
    header {
      padding: 1rem 1.5rem;
    }

    header.scrolled {
      padding: 0.75rem 1.5rem;
    }

    .mobile-toggle {
      display: flex;
    }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background: rgba(254, 252, 249, 0.98);
      backdrop-filter: blur(10px);
      padding: 1.5rem;
      gap: 1.25rem;
      box-shadow: 0 10px 30px rgba(45, 41, 38, 0.1);
      transform: translateY(-20px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .nav-links.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .nav-links a {
      padding: 0.5rem 0;
    }
  }
</style>