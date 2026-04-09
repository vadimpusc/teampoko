<script>
  export let onNavigate = () => {}

  const socialLinks = [
    { name: 'YouTube', url: 'https://youtube.com/@HankandYu', icon: 'youtube' },
    { name: 'Instagram', url: 'https://instagram.com/hankandyu', icon: 'instagram' },
    { name: 'TikTok', url: 'https://tiktok.com/@hankandyu', icon: 'tiktok' }
  ]
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <span class="footer-logo">Hank & Yu</span>
      <p class="footer-tagline">Traveling between Europe and Japan</p>
    </div>

    <div class="footer-social">
      {#each socialLinks as link}
        <a 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-link"
          aria-label={link.name}
        >
          {#if link.icon === 'youtube'}
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          {:else if link.icon === 'instagram'}
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          {:else if link.icon === 'tiktok'}
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 20 11.24V6.7z"/></svg>
          {/if}
        </a>
      {/each}
    </div>

    <p class="footer-copyright">
      © 2026 Hank and Yu. All rights reserved.
    </p>
    
    <p class="footer-designed">
      Design by <a href="https://sanrokuku.com" target="_blank" rel="noopener noreferrer">San Roku Ku</a>
    </p>
  </div>
</footer>

<style>
  .footer {
    background: #2D2926;
    color: #FEFCF9;
    padding: 3rem 2rem;
    margin-top: 4rem;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .footer-tagline {
    font-size: 0.9rem;
    color: #9A9590;
  }

  .footer-social {
    display: flex;
    gap: 1.5rem;
  }

  .social-link {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(254, 252, 249, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FEFCF9;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: #C9A87C;
    transform: translateY(-3px);
  }

  .social-link svg {
    width: 20px;
    height: 20px;
  }

  .footer-copyright {
    font-size: 0.85rem;
    color: #9A9590;
  }

  .footer-designed {
    font-size: 0.8rem;
    color: #6B6560;
  }

  .footer-designed a {
    color: #9A9590;
    transition: color 0.2s ease;
  }

  .footer-designed a:hover {
    color: #C9A87C;
  }

  @media (max-width: 480px) {
    .footer {
      padding: 2rem 1.5rem;
    }
  }
</style>