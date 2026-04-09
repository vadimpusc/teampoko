<section class="page-header">
  <h1>Shop</h1>
  <p class="subtitle">Support us through our partners</p>
</section>

<section class="shop-content">
  <p class="intro">
    Thank you for supporting our journey! Below you'll find our recommended 
    products and partners. We only recommend items we genuinely use and love.
  </p>

  <div class="shop-grid">
    {#each shops as shop}
      <a href={shop.url} target="_blank" rel="noopener noreferrer" class="shop-card">
        <div class="shop-image">
          <img src={shop.image} alt={shop.name} />
        </div>
        <div class="shop-info">
          <span class="shop-type">{shop.type}</span>
          <h3>{shop.name}</h3>
          <p>{shop.description}</p>
          <span class="shop-cta">Visit Shop →</span>
        </div>
      </a>
    {/each}
  </div>

  <div class="support-note">
    <h3>Ways to Support Us</h3>
    <div class="support-grid">
      <div class="support-item">
        <div class="support-icon">❤️</div>
        <h4>YouTube Membership</h4>
        <p>Join our channel membership for exclusive perks</p>
      </div>
      <div class="support-item">
        <div class="support-icon">☕</div>
        <h4>Buy Us a Coffee</h4>
        <p>Support our content with a one-time donation</p>
      </div>
      <div class="support-item">
        <div class="support-icon">🛒</div>
        <h4>Amazon Links</h4>
        <p>Use our affiliate links when you shop</p>
      </div>
    </div>
  </div>
</section>

<script>
  const shops = [
    { 
      name: 'Hank & Yu Merch', 
      type: 'Official Merchandise', 
      description: 'T-shirts, hoodies, and accessories with our branding',
      url: 'https://store.example.com/hankandyu',
      image: 'https://placehold.co/600x400/e8e0d8/6b6560?text=Merch'
    },
    { 
      name: 'Travel Gear', 
      type: 'Recommended Equipment', 
      description: 'Cameras, bags, and travel accessories we use',
      url: 'https://gear.example.com',
      image: 'https://placehold.co/600x400/e8e0d8/6b6560?text=Gear'
    },
    { 
      name: 'Book Recommendations', 
      type: 'Books We Love', 
      description: 'Books about travel, lifestyle, and personal growth',
      url: 'https://books.example.com',
      image: 'https://placehold.co/600x400/e8e0d8/6b6560?text=Books'
    },
    { 
      name: 'Home & Living', 
      type: 'Lifestyle', 
      description: 'Home decor and lifestyle products we recommend',
      url: 'https://home.example.com',
      image: 'https://placehold.co/600x400/e8e0d8/6b6560?text=Home'
    }
  ]
</script>

<style>
  .page-header {
    padding: 8rem 2rem 4rem;
    text-align: center;
    background: linear-gradient(180deg, #F5F0E8 0%, #FEFCF9 100%);
  }

  .page-header h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: #2D2926;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #6B6560;
  }

  .shop-content {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .intro {
    text-align: center;
    font-size: 1.1rem;
    color: #6B6560;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.8;
  }

  .shop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .shop-card {
    display: block;
    background: #FFFFFF;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(45, 41, 38, 0.06);
    transition: all 0.3s ease;
  }

  .shop-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(45, 41, 38, 0.12);
  }

  .shop-image {
    aspect-ratio: 3/2;
    overflow: hidden;
  }

  .shop-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .shop-card:hover .shop-image img {
    transform: scale(1.05);
  }

  .shop-info {
    padding: 1.5rem;
  }

  .shop-type {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #C9A87C;
    margin-bottom: 0.5rem;
  }

  .shop-info h3 {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: #2D2926;
    margin-bottom: 0.5rem;
  }

  .shop-info p {
    font-size: 0.9rem;
    color: #6B6560;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .shop-cta {
    font-size: 0.9rem;
    font-weight: 600;
    color: #C9A87C;
  }

  .support-note {
    background: #F5F0E8;
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
  }

  .support-note h3 {
    font-size: 1.75rem;
    color: #2D2926;
    margin-bottom: 2rem;
  }

  .support-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .support-item {
    padding: 1.5rem;
    background: #FFFFFF;
    border-radius: 12px;
  }

  .support-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .support-item h4 {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2D2926;
    margin-bottom: 0.5rem;
  }

  .support-item p {
    font-size: 0.9rem;
    color: #6B6560;
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 7rem 1.5rem 3rem;
    }

    .shop-content {
      padding: 2rem 1.5rem;
    }

    .shop-grid {
      grid-template-columns: 1fr;
    }

    .support-note {
      padding: 2rem 1.5rem;
    }

    .support-grid {
      grid-template-columns: 1fr;
    }
  }
</style>