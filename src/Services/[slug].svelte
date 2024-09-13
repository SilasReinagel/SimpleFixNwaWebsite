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
      const response = await fetch(`/content/services/${slug}.md`);
      if (!response.ok) throw new Error('Failed to fetch markdown file');
      const markdown = await response.text();
      
      // Simple front matter parsing
      const [, frontMatter, content] = markdown.split('---');
      const metadata = Object.fromEntries(
        frontMatter.trim().split('\n').map(line => line.split(': '))
      );

      serviceData = {
        title: metadata.title || '',
        description: metadata.description || '',
        content: await marked(content)
      };

      // Scroll to the top of the page
      window.scrollTo(0, 0);
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
  article {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 80px;
  }

  :global(article h1) {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  :global(article h2) {
    font-size: 1.8em;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  :global(article p) {
    margin-bottom: 1em;
    line-height: 1.6;
  }

  :global(article ul) {
    margin-bottom: 1em;
    padding-left: 20px;
  }

  :global(article li) {
    margin-bottom: 0.5em;
  }
</style>