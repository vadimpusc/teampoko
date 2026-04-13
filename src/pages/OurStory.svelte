<section class="page-header">
  <div class="header-content">
    <span class="overline">Our Journey</span>
    <h1>Between Two Worlds</h1>
    <p class="subtitle">How it all began</p>
  </div>
</section>

<section class="story-content">
  <div class="content-wrapper">
    <p class="lead">
      We are a couple who met in London and began documenting our life together on YouTube. 
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
          <div class="value-number">01</div>
          <h3>Slow Travel</h3>
          <p>We believe in taking time to experience places rather than racing through bucket lists.</p>
        </div>
        <div class="value-card">
          <div class="value-number">02</div>
          <h3>Home Anywhere</h3>
          <p>Whether in Europe or Japan, we find comfort and create home in every place we stay.</p>
        </div>
        <div class="value-card">
          <div class="value-number">03</div>
          <h3>Real Moments</h3>
          <p>We share the highs and lows of our journey together, staying true to our experiences.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="image-section">
  <div class="image-grid">
    <div class="image-item">
      <img src="/images/story-1.jpg" alt="Hank and Yu together" />
    </div>
    <div class="image-item">
      <img src="/images/story-2.jpg" alt="Travel moment" />
    </div>
    <div class="image-item">
      <img src="/images/story-3.jpg" alt="Everyday life" />
    </div>
  </div>
</section>

<style>
  .page-header {
    padding: 10rem 2rem 6rem;
    text-align: center;
    background: #0D0D0D;
    position: relative;
  }

  .page-header::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100px;
    background: linear-gradient(to bottom, rgba(201, 168, 124, 0.3), transparent);
  }

  .overline {
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #C9A87C;
    margin-bottom: 1.5rem;
  }

  .page-header h1 {
    font-size: clamp(3rem, 8vw, 5rem);
    color: #F5F2ED;
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  .subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.25rem;
    font-style: italic;
    color: rgba(245, 242, 237, 0.55);
  }

  .story-content {
    padding: 6rem 2rem;
    max-width: 800px;
    margin: 0 auto;
    background: #0D0D0D;
  }

  .content-wrapper p {
    font-size: 1.1rem;
    line-height: 2;
    color: rgba(245, 242, 237, 0.75);
    margin-bottom: 2rem;
    font-weight: 400;
  }

  .content-wrapper .lead {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    color: #F5F2ED;
    font-style: italic;
    line-height: 1.7;
    padding-left: 2rem;
    border-left: 1px solid rgba(201, 168, 124, 0.3);
  }

  .values-section {
    margin-top: 6rem;
    padding-top: 5rem;
    position: relative;
  }

  .values-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #C9A87C, transparent);
  }

  .values-section h2 {
    font-size: clamp(2rem, 5vw, 2.75rem);
    color: #F5F2ED;
    text-align: center;
    margin-bottom: 4rem;
    font-weight: 400;
  }

  .value-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #F5F2ED;
    margin-bottom: 1rem;
    letter-spacing: 0.02em;
  }

  .value-card p {
    font-size: 0.95rem;
    color: rgba(245, 242, 237, 0.6);
    line-height: 1.8;
    margin: 0;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .value-card {
    padding: 2.5rem 2rem;
    border: 1px solid rgba(245, 242, 237, 0.1);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
  }

  .value-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #C9A87C, transparent);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  .value-card:hover {
    border-color: rgba(201, 168, 124, 0.2);
    background: rgba(201, 168, 124, 0.03);
  }

  .value-card:hover::before {
    transform: scaleX(1);
  }

  .value-number {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.85rem;
    font-style: italic;
    color: #C9A87C;
    margin-bottom: 1.5rem;
    letter-spacing: 0.1em;
  }

  .value-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #E8E4DF;
    margin-bottom: 1rem;
    letter-spacing: 0.02em;
  }

  .value-card p {
    font-size: 0.95rem;
    color: rgba(245, 242, 237, 0.55);
    line-height: 1.8;
    margin: 0;
  }

  .image-section {
    padding: 4rem 2rem 8rem;
    max-width: 1200px;
    margin: 0 auto;
    background: #0D0D0D;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .image-item {
    overflow: hidden;
  }

  .image-item img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    filter: grayscale(20%);
    transition: all 0.6s ease;
  }

  .image-item:hover img {
    transform: scale(1.03);
    filter: grayscale(10%);
  }

  @media (max-width: 900px) {
    .values-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .image-grid {
      grid-template-columns: 1fr;
    }

    .image-item img {
      aspect-ratio: 16/10;
    }
  }

  @media (max-width: 600px) {
    .page-header {
      padding: 8rem 1.5rem 4rem;
    }

    .story-content {
      padding: 4rem 1.5rem;
    }

    .content-wrapper p,
    .content-wrapper .lead {
      font-size: 1rem;
    }

    .content-wrapper .lead {
      font-size: 1.25rem;
    }

    .image-section {
      padding: 2rem 1.5rem 5rem;
    }
  }
</style>