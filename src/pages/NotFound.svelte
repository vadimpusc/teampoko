<script>
  export let onNavigate = () => {}
</script>

<section class="not-found">
  <div class="content">
    <div class="error-code">404</div>
    <h1>Page Not Found</h1>
    <p>Looks like this page wandered off the map. Let's get you back home.</p>
    <div class="actions">
      <a href="/" class="home-btn" on:click|preventDefault={() => onNavigate('/')}>
        Back to Home
      </a>
      <a href="https://youtube.com/@hankandyu" target="_blank" rel="noopener noreferrer" class="youtube-btn">
        Watch on YouTube
      </a>
    </div>
  </div>
</section>

<style>
  .not-found {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    text-align: center;
  }

  .content {
    max-width: 500px;
  }

  .error-code {
    font-family: 'Playfair Display', serif;
    font-size: clamp(6rem, 15vw, 10rem);
    font-weight: 700;
    color: #C9A87C;
    line-height: 1;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: #2D2926;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #6B6560;
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .home-btn {
    padding: 1rem 2rem;
    background: #2D2926;
    color: #FEFCF9;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
  }

  .home-btn:hover {
    background: #C9A87C;
    transform: translateY(-3px);
  }

  .youtube-btn {
    padding: 1rem 2rem;
    background: transparent;
    color: #2D2926;
    font-weight: 600;
    border: 2px solid #2D2926;
    border-radius: 50px;
    transition: all 0.3s ease;
  }

  .youtube-btn:hover {
    background: #2D2926;
    color: #FEFCF9;
  }

  @media (max-width: 480px) {
    .actions {
      flex-direction: column;
    }

    .home-btn,
    .youtube-btn {
      width: 100%;
    }
  }
</style>