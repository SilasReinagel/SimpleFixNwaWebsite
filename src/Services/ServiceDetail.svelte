<script>
  // @ts-check
  import { onMount } from 'svelte';
  import { marked } from 'marked';

  /** @type {string} */
  export let slug;

  /** @type {{title: string, description: string, content: string}} */
  let serviceData = { title: '', description: '', content: '' };

  onMount(async () => {
    try {
      const module = await import(`./${slug}.md`);
      const { title, description } = module.metadata;
      const content = marked(module.default);
      serviceData = { title, description, content };
    } catch (e) {
      console.error(`Error loading service: ${slug}`, e);
      // Handle 404 error here
    }
  });
</script>

<svelte:head>
  <title>{serviceData.title}</title>
  <meta name="description" content={serviceData.description}>
</svelte:head>

<article>
  {@html serviceData.content}
</article>

<style>
</style>