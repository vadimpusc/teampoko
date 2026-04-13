<script>
  export let onNavigate = () => {}
</script>

<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-image">
    <img src="/images/hero.jpg" alt="Hank and Yu" />
  </div>
  <div class="hero-content">
    <div class="hero-label">A Couple & Family Vlog</div>
    <h1>Hank <span class="amp">&</span> Yu</h1>
    <p class="hero-tagline">
      Traveling between Europe and Japan.<br/>
      <span class="italic">Sharing the slow moments.</span>
    </p>
    <div class="hero-actions">
      <a href="https://youtube.com/@hankandyu" target="_blank" rel="noopener noreferrer" class="hero-cta">
        <span>Watch on YouTube</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="/our-story" class="hero-secondary" on:click|preventDefault={() => onNavigate('/our-story')}>
        Our Story
      </a>
    </div>
  </div>
  <div class="scroll-indicator">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<section class="intro">
  <div class="intro-inner">
    <div class="intro-content">
      <span class="section-label">About Us</span>
      <h2>Between Two Worlds</h2>
      <p>We met in London and began documenting our life together on YouTube. From weekend escapes to quiet moments at home, our channel is a diary of the places we visit and the moments we want to remember.</p>
      <a href="/our-story" class="intro-link" on:click|preventDefault={() => onNavigate('/our-story')}>
        Read More
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
    <div class="intro-image">
      <img src="/images/story-1.jpg" alt="Hank and Yu" />
      <div class="image-frame"></div>
    </div>
  </div>
</section>

<section class="destinations">
  <div class="section-header">
    <span class="section-label">Where We've Been</span>
    <h2>Our Journey</h2>
  </div>
  <div class="destinations-grid">
    <div class="destination-card">
      <div class="card-image">
        <img src="/images/story-2.jpg" alt="Europe" />
      </div>
      <div class="card-content">
        <h3>Europe</h3>
        <p>Our home base, where cobblestone streets meet modern living.</p>
      </div>
    </div>
    <div class="destination-card">
      <div class="card-image">
        <img src="/images/story-3.jpg" alt="Japan" />
      </div>
      <div class="card-content">
        <h3>Japan</h3>
        <p>A place that feels like returning to something familiar yet ever new.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="cta-content">
    <h2>Join Our Journey</h2>
    <p>Subscribe and be part of our story between two cultures.</p>
    <a href="https://youtube.com/@hankandyu" target="_blank" rel="noopener noreferrer" class="cta-button">
      Subscribe on YouTube
    </a>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(13, 13, 13, 0.85) 0%,
      rgba(13, 13, 13, 0.6) 50%,
      rgba(13, 13, 13, 0.75) 100%
    );
    z-index: 2;
  }

  .hero-image {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(30%);
  }

  .hero-content {
    position: relative;
    z-index: 3;
    text-align: center;
    padding: 2rem;
    max-width: 800px;
  }

  .hero-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #C9A87C;
    margin-bottom: 2rem;
  }

  .hero-content h1 {
    font-size: clamp(3rem, 10vw, 7rem);
    color: #F5F2ED;
    margin-bottom: 1.5rem;
    line-height: 1;
    font-weight: 400;
  }

  .amp {
    font-style: italic;
    color: #C9A87C;
    font-weight: 300;
  }

  .hero-tagline {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: rgba(245, 242, 237, 0.8);
    line-height: 1.9;
    margin-bottom: 3rem;
    font-weight: 400;
  }

  .italic {
    font-style: italic;
    font-family: 'Cormorant Garamond', serif;
  }

  .hero-actions {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2.5rem;
    background: transparent;
    border: 1px solid #C9A87C;
    color: #E8E4DF;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    transition: all 0.4s ease;
  }

  .hero-cta svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  .hero-cta:hover {
    background: #C9A87C;
    border-color: #C9A87C;
    color: #0D0D0D;
  }

  .hero-cta:hover svg {
    transform: translateX(4px);
  }

  .hero-secondary {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-style: italic;
    color: rgba(245, 242, 237, 0.85);
    position: relative;
    padding-bottom: 4px;
  }

  .hero-secondary::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(245, 242, 237, 0.5);
    transition: background 0.3s ease;
  }

  .hero-secondary:hover::after {
    background: #C9A87C;
  }

  .hero-secondary:hover {
    color: #E8E4DF;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    z-index: 3;
  }

  .scroll-indicator span {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(245, 242, 237, 0.55);
  }

  .scroll-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, #C9A87C, transparent);
  }

  .intro {
    background: #0D0D0D;
    padding: 8rem 2rem;
    position: relative;
  }

  .intro::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201, 168, 124, 0.3), transparent);
  }

  .intro-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
  }

  .intro-content {
    padding-right: 2rem;
  }

  .section-label {
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #C9A87C;
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 3rem;
  }

  .section-label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    height: 1px;
    background: #C9A87C;
  }

  .intro-content h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    color: #F5F2ED;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  .intro-content p {
    font-size: 1.05rem;
    color: rgba(245, 242, 237, 0.7);
    line-height: 1.9;
    margin-bottom: 2.5rem;
    font-weight: 400;
  }

  .intro-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #C9A87C;
    transition: all 0.3s ease;
  }

  .intro-link svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  .intro-link:hover {
    color: #E8E4DF;
  }

  .intro-link:hover svg {
    transform: translateX(5px);
  }

  .intro-image {
    position: relative;
  }

  .intro-image img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    filter: grayscale(20%);
  }

  .image-frame {
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 1px solid rgba(201, 168, 124, 0.4);
    z-index: -1;
  }

  .destinations {
    background: #0F0F0F;
    padding: 8rem 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .section-header h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    color: #F5F2ED;
    font-weight: 400;
  }

  .card-content h3 {
    font-size: 1.75rem;
    color: #F5F2ED;
    margin-bottom: 0.75rem;
    font-weight: 400;
  }

  .card-content p {
    font-size: 0.95rem;
    color: rgba(245, 242, 237, 0.6);
    line-height: 1.8;
    font-weight: 400;
  }

  .destinations-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .destination-card {
    position: relative;
    overflow: hidden;
  }

  .card-image {
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .card-image img {
    width: 100%;
    aspect-ratio: 16/10;
    object-fit: cover;
    filter: grayscale(25%);
    transition: transform 0.6s ease, filter 0.6s ease;
  }

  .destination-card:hover .card-image img {
    transform: scale(1.05);
    filter: grayscale(10%);
  }

  .card-content h3 {
    font-size: 1.75rem;
    color: #E8E4DF;
    margin-bottom: 0.75rem;
    font-weight: 300;
  }

  .card-content p {
    font-size: 0.95rem;
    color: rgba(245, 242, 237, 0.6);
    line-height: 1.8;
    font-weight: 300;
  }

  .cta {
    background: linear-gradient(135deg, #141414 0%, #0D0D0D 100%);
    padding: 8rem 2rem;
    text-align: center;
    position: relative;
  }

  .cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 80px;
    background: linear-gradient(to bottom, transparent, #C9A87C);
  }

  .cta-content h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: #F5F2ED;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  .cta-content p {
    font-size: 1.1rem;
    color: rgba(245, 242, 237, 0.65);
    margin-bottom: 3rem;
    font-weight: 300;
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
  }

  .cta-button {
    display: inline-block;
    padding: 1.25rem 3rem;
    background: #C9A87C;
    color: #0D0D0D;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    transition: all 0.4s ease;
  }

  .cta-button:hover {
    background: #D4B88A;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(201, 168, 124, 0.3);
  }

  @media (max-width: 900px) {
    .intro-inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .intro-content {
      padding-right: 0;
      order: 2;
    }

    .intro-image {
      order: 1;
    }

    .image-frame {
      display: none;
    }

    .destinations-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .hero-actions {
      flex-direction: column;
      gap: 1.5rem;
    }

    .scroll-indicator {
      display: none;
    }

    .intro {
      padding: 5rem 1.5rem;
    }

    .destinations {
      padding: 5rem 1.5rem;
    }

    .cta {
      padding: 5rem 1.5rem;
    }
  }
</style>