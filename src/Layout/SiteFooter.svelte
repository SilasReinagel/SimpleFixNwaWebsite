<script>
  export let company;

  import SingleColorSocialLinks from '../Elements/SingleColorSocialLinks.svelte';

  const year = new Date().getFullYear();
</script>

<footer>
  <div class="row">
    <p>© {year} {company.owner}</p>

    <SingleColorSocialLinks/>

    <p class="small-text">Site by: <a href="http://www.silasreinagel.com" class="small-text footer-link">Silas Reinagel</a></p>
  </div>
</footer>

<style>
  footer {
    height: 5.4em;
    background-color: var(--footer-background-color);
    color: var(--footer-color);

    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .footer-link {
    color: #80d4ff;
  }

  a {
    font-weight: 800;

    font-size: 1em;
  }

  p {
    color: var(--footer-color);
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 18px;
    max-width: 48em;
  }

</style>
