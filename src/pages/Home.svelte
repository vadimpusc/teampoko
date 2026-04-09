<script>
  export let onNavigate = () => {}
  import videos from '../data/videos.json'
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

<section class="videos-section">
  <div class="section-header">
    <h2>Latest Uploads</h2>
    <a href="/youtube" class="view-all" on:click|preventDefault={() => onNavigate('/youtube')}>
      View All →
    </a>
  </div>
  
  <div class="video-grid">
    {#each videos.slice(0, 6) as video}
      <a href={video.url} target="_blank" rel="noopener noreferrer" class="video-card">
        <div class="video-thumbnail">
          <img src={video.thumbnail} alt={video.title} />
          <div class="play-button">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="video-info">
          <h3>{video.title}</h3>
          <div class="video-meta">
            <span>{video.date}</span>
          </div>
        </div>
      </a>
    {/each}
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

  .videos-section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    color: #2D2926;
  }

  .view-all {
    color: #C9A87C;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.2s ease;
  }

  .view-all:hover {
    color: #B8956A;
  }

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  .video-card {
    background: #FFFFFF;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(45, 41, 38, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .video-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(45, 41, 38, 0.12);
  }

  .video-thumbnail {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  .video-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .video-card:hover .video-thumbnail img {
    transform: scale(1.05);
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: rgba(254, 252, 249, 0.95);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .play-button svg {
    width: 24px;
    height: 24px;
    color: #2D2926;
    margin-left: 3px;
  }

  .video-card:hover .play-button {
    opacity: 1;
  }

  .video-info {
    padding: 1.25rem;
  }

  .video-info h3 {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2D2926;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  .video-meta {
    font-size: 0.85rem;
    color: #6B6560;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .separator {
    color: #C9A87C;
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
    font-size: clamp(1.75rem, 4vw, 2.5rem);
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
    font-size: 1rem;
    padding: 0.75rem 0;
    border-bottom: 2px solid #C9A87C;
    transition: all 0.2s ease;
  }

  .about-link:hover {
    color: #B8956A;
    border-color: #B8956A;
  }

  @media (max-width: 768px) {
    .videos-section {
      padding: 3rem 1.5rem;
    }

    .section-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .video-grid {
      grid-template-columns: 1fr;
    }

    .about-preview {
      padding: 3rem 1.5rem;
    }
  }
</style>