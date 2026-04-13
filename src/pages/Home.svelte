<script>
  export let onNavigate = () => {}
</script>

<section class="hero">
  <div class="hero-image">
    <img src="/images/hero.jpg" alt="Hank and Yu" />
  </div>
  <div class="hero-content">
    <h1>WE'RE HANK & YU</h1>
    <p class="hero-tagline">
      A couple and family vlog traveling between Europe and Japan.<br/>
      Sharing the slow moments that make travel meaningful.
    </p>
    <a href="https://youtube.com/@hankandyu" target="_blank" rel="noopener noreferrer" class="hero-cta">
      Watch on YouTube
    </a>
  </div>
</section>

<section class="about-preview">
  <div class="about-content">
    <h2>Our Journey</h2>
    <p>
      We met in London and decided to document our life together on YouTube.
      From weekend escapes to quiet days at home, our channel is a diary of
      the places we visit and the moments we want to remember.
    </p>
    <a href="/our-story" class="about-link" on:click|preventDefault={() => onNavigate('/our-story')}>
      Read Our Story →
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

  .hero-image {
    position: absolute;
    inset: 0;
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 2rem;
    max-width: 800px;
  }

  .hero-content h1 {
    font-size: clamp(1.75rem, 5vw, 5rem);
    color: #FEFCF9;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    white-space: nowrap;
  }

  @media (max-width: 600px) {
    .hero-content h1 {
      font-size: clamp(1.5rem, 6vw, 2.5rem);
    }
  }

  .hero-tagline {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: rgba(254, 252, 249, 0.9);
    line-height: 1.8;
    margin-bottom: 2.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .hero-cta {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: #C9A87C;
    color: #FEFCF9;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 50px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .hero-cta:hover {
    background: #B8956A;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(201, 168, 124, 0.4);
  }

  .about-preview {
    background: #F5F0E8;
    padding: 5rem 2rem;
    text-align: center;
  }

  .about-content {
    max-width: 700px;
    margin: 0 auto;
  }

  .about-content h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: #2D2926;
    margin-bottom: 1.5rem;
  }

  .about-content p {
    font-size: 1.1rem;
    color: #6B6560;
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .about-link {
    display: inline-block;
    color: #C9A87C;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.2s ease;
  }

  .about-link:hover {
    color: #B8956A;
    transform: translateX(5px);
  }
</style>
