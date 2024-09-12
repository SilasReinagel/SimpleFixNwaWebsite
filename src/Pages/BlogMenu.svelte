<script>
  import { navigateTo } from '../router'

  function handleClick(event, path) {
    event.preventDefault();
    navigateTo(path);
  }
</script>

<main>
  <h1>Blogs</h1>
  <ul>
    <li>
      <a href="/blog/how-to-fix-a-sagging-gate-diy-tips" on:click={(e) => handleClick(e, '/blog/how-to-fix-a-sagging-gate-diy-tips')}>
        How to Fix a Sagging Gate: DIY Tips
      </a>
    </li>
  </ul>
</main>

<style>
  main {
    padding: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0.5rem 0;
  }
  a {
    text-decoration: none;
    color: #007acc;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
