<script>
  import Container from '../Elements/Container.svelte';

</script>

<Container>
  <section class="service-area">
    <div class="center-vh service-area-content">
      <div class="flex-column">
        <h2>Service Area</h2>
        <div class="map-photo">
          <a href="https://www.openstreetmap.org/#map=12/36.4077/-94.1848" target="_blank">
            <img src="/images/map.jpg" alt="Service Area Map" />
          </a>
        </div>
        <p class="mb3">We proudly serve the following cities:</p>
        <ul class="mb3">
          <li>Bella Vista</li>
          <li>Bentonville</li>
          <li>Rogers</li>
          <li>Pea Ridge</li>
          <li>Centerton</li>
          <li>Lowell</li>
        </ul>
      </div>
    </div>
  </section>
</Container>

<style>
  .service-area {
    background-color: var(--secondary-background-color);
    background-size: cover;
    background-position: center;
    text-align: center;
    width: 100%;
    padding: 0;
    color: var(--primary-color);
  }

  .service-area-content {
    max-width: 1024px;
    padding: 0 0em;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mb3 {
    margin-bottom: 1.5em;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 48px, 16px;
    flex-wrap: wrap;
  }

  .map-photo {
    text-align: center;
    width: 100%;
    max-width: 100vw;
  }

  .area-info {
    width: 100%;
  }

  p {
    margin-top: 0px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5em;
  }

  @media (min-width: 768px) {
    .flex-row {
      flex-direction: row;
    }

    .map-photo {
      flex: 1 1 50%;
    }

    .area-info {
      flex: 1 1 50%;
    }
  }
</style>

