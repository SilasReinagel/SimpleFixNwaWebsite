<script>
  import { onMount } from 'svelte';
  import { marked } from 'marked';

  export let markdownContent = '';

  let htmlContent = '';

  onMount(() => {
    htmlContent = marked(markdownContent);
    console.log("Mounted", { htmlContent })
  });
</script>

<div class="content">
  {@html htmlContent}
</div>

<style>
  .content {
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
