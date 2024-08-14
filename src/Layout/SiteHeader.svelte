<script>
  import PhoneNumberLink from '../Elements/PhoneNumberLink.svelte';
  import EmailLink from '../Elements/EmailLink.svelte';

  import company, { pages } from '../static-content.js';
</script>

<header class="">
  <div class="row">
    <a href="." class="logo">
      <div class="logo-img mobile-hidden">
        <img src={company.logo} alt="Logo"/>
      </div>
      <h1 class="company-name">{company.name}</h1>
    </a>
    <nav class="navbar tablet-hidden">
      {#each pages.filter(page => page.showInMainNav) as page}
      <a 
      class="navlink decor-font" 
      href={page.href} 
      on:click|preventDefault={() => {
        if (page.scrollTo !== undefined) {
          const element = document.getElementById(page.scrollTo);
          const offset = 64; // Adjust this value as needed
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
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
    padding: 8px 16px;
    margin: 0;
    z-index: 1000;
  }

  @media (max-width: 600px) {
    header {
      padding: 8px 8px 2px 8px;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
  }

  h1 {
    color: var(--header-color);
    margin: 0;
  }

  .company-name {
    width: 100%;
  }

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    max-height: 92px;
    width: 100%;
  }

  .logo-img {
    width: 48px;
    margin-right: 12px;
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

  @media (max-width: 600px) {
    .company-name {
      text-align: center;
      margin: 0;
    }
  }
</style>
