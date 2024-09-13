<script>
  // @ts-check
  import { onMount } from 'svelte';
  import { navigateTo } from '../router';

  /** @type {Array<{slug: string, title: string, description: string}>} */
  let services = [];

  onMount(async () => {
    const serviceFiles = [
      'furniture-assembly.md',
      // Add other service files here as they are created
    ];

    for (const file of serviceFiles) {
      const response = await fetch(`/content/services/${file}`);
      const markdown = await response.text();
      const [, frontMatter] = markdown.split('---');
      const metadata = Object.fromEntries(
        frontMatter.trim().split('\n').map(line => line.split(': '))
      );
      const slug = file.slice(0, -3);
      services.push({
        slug,
        title: metadata.title || '',
        description: metadata.description || ''
      });
    }
  });

  /**
   * @param {string} slug
   */
  function handleServiceClick(slug) {
    navigateTo(`/service-detail/${slug}`);
  }
</script>

<svelte:head>
  <title>Our Services | Handyman Services in Northwest Arkansas</title>
  <meta name="description" content="Explore our range of professional handyman services in Northwest Arkansas, including furniture assembly, home maintenance, and more.">
</svelte:head>

<h1>Our Services</h1>

<ul>
  {#each services as service}
    <li>
      <span on:click={() => handleServiceClick(service.slug)} class="service-link">{service.title}</span>
      <p>{service.description}</p>
    </li>
  {/each}
</ul>

<style>
  h1 {
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1.5em;
  }

  .service-link {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
  }

  .service-link:hover {
    text-decoration: underline;
  }

  p {
    margin-top: 0.5em;
  }
</style>