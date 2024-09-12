<script>
  import { navigateTo } from '../router';

  function goHome() {
    navigateTo('/');
  }
</script>

<main>
  <h1>404 - Page Not Found</h1>
  <p>Sorry, the page you're looking for doesn't exist.</p>
  <button on:click={goHome}>Go to Home</button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007acc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #005fa3;
  }
</style>
