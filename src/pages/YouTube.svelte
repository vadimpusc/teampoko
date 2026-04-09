<script>
  import videos from '../data/videos.json'
</script>

<section class="page-header">
  <h1>YouTube</h1>
  <p class="subtitle">Travel vlogs between Europe and Japan</p>
  <a href="https://youtube.com/@hankandyu" target="_blank" rel="noopener noreferrer" class="subscribe-btn">
    Subscribe
  </a>
</section>

<section class="youtube-content">
  <div class="channel-intro">
    <div class="channel-icon">
      <img src="/images/channel-icon.png" alt="Hank and Yu Channel" />
    </div>
    <div class="channel-info">
      <h2>Hank and Yu</h2>
      <p class="channel-desc">
        A couple and family vlog traveling between Europe and Japan. 
        We love discovering new places and sharing the slow moments.
      </p>
    </div>
  </div>

  {#if videos.length > 0}
    <div class="featured-video">
      <h3>Featured Video</h3>
      <a href={videos[0].url} target="_blank" rel="noopener noreferrer" class="video-embed">
        <img src={videos[0].thumbnail.replace('mqdefault', 'hqdefault')} alt={videos[0].title} />
        <div class="play-overlay">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </a>
      <h4 class="featured-title">{videos[0].title}</h4>
    </div>
  {/if}

  <div class="videos-section">
    <h3>Latest Videos</h3>
    <div class="video-grid">
      {#each videos as video}
        <article class="video-card">
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <div class="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
            </div>
            <div class="video-info">
              <h4>{video.title}</h4>
              <div class="video-meta">
                <span>{video.date}</span>
              </div>
            </div>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

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
    margin-bottom: 1.5rem;
  }

  .subscribe-btn {
    display: inline-block;
    padding: 0.875rem 2rem;
    background: #C9A87C;
    color: #FEFCF9;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 50px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .subscribe-btn:hover {
    background: #B8956A;
    transform: translateY(-2px);
  }

  .youtube-content {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .channel-intro {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    background: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(45, 41, 38, 0.06);
    margin-bottom: 3rem;
  }

  .channel-icon img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }

  .channel-info h2 {
    font-size: 1.75rem;
    color: #2D2926;
    margin-bottom: 0.75rem;
  }

  .channel-desc {
    font-size: 1rem;
    color: #6B6560;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .channel-stats {
    display: flex;
    gap: 2rem;
    font-size: 0.9rem;
    color: #6B6560;
  }

  .channel-stats strong {
    color: #2D2926;
  }

  .featured-video {
    margin-bottom: 4rem;
  }

  .featured-video h3,
  .videos-section h3 {
    font-size: 1.5rem;
    color: #2D2926;
    margin-bottom: 1.5rem;
  }

  .video-embed {
    aspect-ratio: 16/9;
    background: #2D2926;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    display: block;
  }

  .video-embed img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .video-embed:hover img {
    transform: scale(1.03);
  }

  .play-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: rgba(254, 252, 249, 0.95);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .video-embed:hover .play-overlay {
    background: #C9A87C;
    transform: translate(-50%, -50%) scale(1.1);
  }

  .play-overlay svg {
    width: 32px;
    height: 32px;
    color: #2D2926;
    margin-left: 4px;
  }

  .video-embed:hover .play-overlay svg {
    color: #FEFCF9;
  }

  .featured-title {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2D2926;
    margin-top: 1rem;
  }

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }

  .video-card a {
    display: block;
  }

  .video-thumbnail {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }

  .video-thumbnail img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .video-card:hover .video-thumbnail img {
    transform: scale(1.03);
  }

  .video-info h4 {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #2D2926;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .video-meta {
    font-size: 0.85rem;
    color: #6B6560;
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 7rem 1.5rem 3rem;
    }

    .youtube-content {
      padding: 2rem 1.5rem;
    }

    .channel-intro {
      flex-direction: column;
      text-align: center;
      padding: 1.5rem;
    }

    .channel-icon img {
      width: 80px;
      height: 80px;
    }

    .channel-stats {
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .video-grid {
      grid-template-columns: 1fr;
    }
  }
</style>