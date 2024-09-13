<script>
  import { navigateTo } from './router';
</script>

<h1>404 - Page Not Found</h1>
<p>The page you're looking for doesn't exist.</p>
<button on:click={() => navigateTo('/')}>Go to Home</button>