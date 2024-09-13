<script>
  // @ts-check
  import { onMount } from 'svelte';
  import { marked } from 'marked';

  /** @type {string} */
  export let slug;

  /** @type {{title: string, content: string}} */
  let postData = { title: '', content: '' };

  onMount(async () => {
    try {
      const response = await fetch(`/content/blog/${slug}.md`);
      if (!response.ok) throw new Error('Failed to fetch blog post');
      const markdown = await response.text();
      
      // Simple front matter parsing
      const [, frontMatter, content] = markdown.split('---');
      const metadata = Object.fromEntries(
        frontMatter.trim().split('\n').map(line => line.split(': '))
      );

      postData = {
        title: metadata.title || '',
        content: await marked(content)
      };
    } catch (e) {
      console.error(`Error loading blog post: ${slug}`, e);
      // Handle 404 error here
    }
  });
</script>

<svelte:head>
  <title>{postData.title}</title>
</svelte:head>

<article>
  <h1>{postData.title}</h1>
  {@html postData.content}
</article>

<style>
  /* ... (styles remain the same) ... */
</style>