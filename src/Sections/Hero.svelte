<script>
  import company from '../static-content';

  const handleCTAClick = () => {
    window.location.href = `tel:${company.phone}`;
  }
</script>

<section class="hero">
  <div class="center-vh hero-content">
    <div class="flex-column">
      <h1>Expert Handyman Services in Northwest Arkansas</h1>
      <p class="mb3 desc">Top-notch maintenance and enhancement for your rental, vacation, and home property in Bella Vista, Bentonville, Rogers, Lowell, and Pea Ridge.</p>
      <button class="cta-button" on:click={handleCTAClick}>Call for Your Fix Now!</button>
    </div>
  </div>
</section>

<style>
  .hero {
    background-color: var(--primary-background-color);
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/hero2.jpg');

    text-align: center;
    width: 100%;
    height: calc(100vh - 100px);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .hero {
      padding: 4em 1em;
    }

    h1 {
      font-size: 3em;
    }

    .desc {
      padding: 0 6em;
    }
  }

  .desc {
    font-size: 0.9em;
    color: #a8b0a8;
  }

  h1 {
    color: #fff;
    font-size: 1.8em;
  }

  .hero-content {
    width: 1024px;
    padding: 0 1em;
    color: var(--primary-color);
    margin-top: -64px;
  }

  .cta-button {
    background-color: #A34A28;
    color: var(--primary-background-color);
    border: none;
    padding: 0.75em 1.5em;
    font-size: 1.25em;
    cursor: pointer;
    transition: background-color 0.3s ease;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 4px;
  }

  .cta-button:hover {
    background-color: #B55332;
  }

  .cta-button:active {
    background-color: #C05C3C;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6em;
  }
</style>