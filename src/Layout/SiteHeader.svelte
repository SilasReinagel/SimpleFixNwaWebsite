<script>
  import PhoneNumberLink from '../Elements/PhoneNumberLink.svelte';
  import EmailLink from '../Elements/EmailLink.svelte';

  import company, { pages } from '../static-content.js';
</script>

<header class="">
  <div class="row top">
    <a href="." class="logo">
      <div class="logo-img">
        <img src={company.logo} alt="Logo"/>
      </div>
      <h1>{company.name}</h1>
    </a>
    <nav class="navbar tablet-hidden">
      {#each pages.filter(page => page.showInMainNav) as page}
        <a 
          class="navlink decor-font" 
          href={page.href} 
          on:click|preventDefault={() => {
            if (page.scrollTo !== undefined) {
              document.getElementById(page.scrollTo).scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = page.href;
            }
          }}
        >
          {page.name}
        </a>
      {/each}
    </nav>
  </div>
</header>
<div class="sticky-contact-links">
  <div class="contact-links">
    <PhoneNumberLink />
    <EmailLink />
  </div>
</div>


<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    background-color: var(--header-background-color);
    padding: 0 16px 8px;
    margin: 0;
    z-index: 1000;
  }

  @media (max-width: 600px) {
    header {
      padding: 2px 8px 8px;
    }
  }

  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
  }

  @media (max-width: 600px) {
    .row.top {
      justify-content: center;
    }
  }

  h1 {
    color: var(--header-color);
    margin-left: 10px;
  }

  .logo {
    display: flex;
    flex-direction: row;
    max-height: 92px;
  }

  .logo-img {
    width: 48px;
  }

  .navlink {
    color: var(--header-color);
    margin: 5px 15px;
    font-size: 1.1em;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition-duration: 0.2s;
  }

  .navlink:hover {
    color: var(--header-color-hover);
  }

  .sticky-contact-links {
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    padding: 2px 4px 4px;
    background-color: var(--header-background-color) !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    .contact-links {
      flex-direction: row;
      gap: 24px;
      justify-content: center;
    }

    .sticky-contact-links {
      padding: 2px 4px 8px;
    }
  }

    /* The sticky class is added to the header with JS when it reaches its scroll position */
  .sticky {
    position: fixed;
    top: 0;
    width: 100%
  }

  /* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
  .sticky + .content {
      padding-top: 102px;
    }
</style>
