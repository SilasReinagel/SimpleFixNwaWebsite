<script>
  let sidebarOpen = false;

  import PhoneNumberLink from '../Elements/PhoneNumberLink.svelte';
  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';
  import SiteSidebar from './SiteSidebar.svelte';

  import company, { pages } from '../static-content.js';
</script>

<header>
  <div class="row top">
    <a href="." class="logo">
      <div class="logo-img">
        <img src={company.logo} alt="Logo"/>
      </div>
      <h1>{company.name}</h1>
    </a>
    <SiteSidebar bind:open={sidebarOpen}/>
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
    <HamburgerIcon bind:open={sidebarOpen}/>
  </div>
  <PhoneNumberLink />
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    background-color: var(--header-background-color);
    height: 120px;
    padding: 0 16px;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
  }

  .top {
    height: 68px;
  }

  h1 {
    color: var(--header-color);
    margin: 10px;
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

</style>
