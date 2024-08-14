<script>
  import Container from '../Elements/Container.svelte';
  import company from '../static-content';

</script>

<Container>
  <section class="about">
    <div class="center-vh about-content">
      <div class="flex-row wrap">
        <div class="face-photo">
          <img src="{company.facePhoto}" alt="Smiling Handyman" />
        </div>
        <div class="flex-column contact-info">
          <h2>About Me</h2>
          <p class="mb3">Hi there! I'm thrilled to welcome you to my handyman services. As a proud Christian and former Iraq Veteran, I bring a strong sense of integrity, discipline, and commitment to every project I undertake.</p>
          <p class="mb3">With years of experience in the field, I understand the importance of quality workmanship and attention to detail. Whether you need help with small repairs or larger renovation projects, I'm here to assist you with professionalism and care.</p>
          <p class="mb3">My mission is to serve our community with honesty and excellence, ensuring that your property is in the best possible condition. You can trust me to handle your handyman needs with the same dedication and respect that I bring to my own home.</p>
          <p class="mb3">Thank you for considering my services. I look forward to working with you and making your home a better place.</p>
        </div>
      </div>
    </div>
  </section>
</Container>

<style>
  .about {
    background-color: var(--secondary-background-color);
    background-size: cover;
    background-position: center;
    text-align: center;
    width: 100%;
    padding: 4em 1em;
    color: var(--primary-color);
  }

  .about-content {
    max-width: 1024px;
    padding: 0 1em;
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

  .face-photo {
    text-align: center;
    width: 100%;
    max-width: 320px;
  }

  .contact-info {
    width: 100%;
  }

  p {
    margin-top: 0px;
  }

  @media (min-width: 768px) {
    .flex-row {
      flex-direction: row;
    }

    .face-photo {
      flex: 1 1 50%;
    }

    .contact-info {
      flex: 1 1 50%;
    }
  }
</style>

