<section class="page-header">
  <h1>Our Story</h1>
  <p class="subtitle">How it all began</p>
</section>

<section class="story-content">
  <div class="content-wrapper">
    <p class="lead">
      We are a couple who met in London and decided to document our life together on YouTube. 
      From weekend escapes to quiet days at home, our channel is a diary of the places we visit 
      and the moments we want to remember.
    </p>
    
    <p>
      Our videos mix travel with honest conversation and small everyday details. We love discovering 
      spots that feel special, returning to places that feel like home, and showing what it is 
      really like to live between two cultures.
    </p>
    
    <p>
      We started creating content because we wanted to capture our experiences in a way that felt 
      authentic. Not the polished, perfect version of travel that often gets shown online, but the 
      real moments — the early mornings, the wrong turns, the quiet evenings when nothing particularly 
      happened but everything felt right.
    </p>
    
    <p>
      Living between Europe and Japan has given us a unique perspective on both places. We get to 
      see the familiar through new eyes and discover hidden gems that tourists often miss. It's not 
      always glamorous — sometimes it's just sitting in a small café, watching the world go by, 
      and that's exactly what we love about it.
    </p>
    
    <p>
      If you enjoy travel, couple vlogs, and stories that grow over time, you are in the right place. 
      Thank you for being here with us.
    </p>

    <div class="values-section">
      <h2>What We Stand For</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">🌍</div>
          <h3>Slow Travel</h3>
          <p>We believe in taking time to experience places rather than racing through bucket lists.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🏠</div>
          <h3>Home Anywhere</h3>
          <p>Whether in Europe or Japan, we find comfort and create home in every place we stay.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">💕</div>
          <h3>Real Moments</h3>
          <p>We share the highs and lows of our journey together, staying true to our experiences.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="image-section">
  <div class="image-grid">
    <img src="/images/story-1.jpg" alt="Hank and Yu together" />
    <img src="/images/story-2.jpg" alt="Travel moment" />
    <img src="/images/story-3.jpg" alt="Everyday life" />
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
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #6B6560;
  }

  .story-content {
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .content-wrapper p {
    font-size: 1.125rem;
    line-height: 1.9;
    color: #6B6560;
    margin-bottom: 1.75rem;
  }

  .content-wrapper .lead {
    font-size: 1.35rem;
    color: #2D2926;
    font-weight: 500;
    line-height: 1.7;
  }

  .values-section {
    margin-top: 4rem;
    padding-top: 4rem;
    border-top: 1px solid #E8E2D9;
  }

  .values-section h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    color: #2D2926;
    text-align: center;
    margin-bottom: 3rem;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .value-card {
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(45, 41, 38, 0.06);
    transition: transform 0.3s ease;
  }

  .value-card:hover {
    transform: translateY(-5px);
  }

  .value-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .value-card h3 {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: #2D2926;
    margin-bottom: 0.75rem;
  }

  .value-card p {
    font-size: 0.95rem;
    color: #6B6560;
    line-height: 1.6;
    margin: 0;
  }

  .image-section {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto 4rem;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .image-grid img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 7rem 1.5rem 3rem;
    }

    .story-content {
      padding: 2rem 1.5rem;
    }

    .content-wrapper p,
    .content-wrapper .lead {
      font-size: 1rem;
    }

    .values-grid {
      grid-template-columns: 1fr;
    }

    .image-grid {
      grid-template-columns: 1fr;
    }

    .image-grid img {
      aspect-ratio: 4/3;
    }
  }
</style>