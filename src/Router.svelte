<script>
  import { onMount } from 'svelte';
  import { routePath, navigateTo } from './router';
  import DefaultLayout from './Layout/DefaultLayout.svelte';
  import { pages } from './static-content';

  let CurrentComponent;

  const routes = {};
  pages.forEach(page => {
    routes[page.path] = page.component;
  });

  const handleNavigation = () => {
    const path = window.location.pathname;
    routePath.set(path);
    console.log("Handling navigation", { path })
    CurrentComponent = routes[path] || NotFound;
  }

  onMount(() => {
    routePath.subscribe((path) => {
      console.log("Route path changed to", { path, routes })
      handleNavigation()
    });
    handleNavigation()
    window.addEventListener('popstate', handleNavigation);
  });
</script>

<DefaultLayout>
  <svelte:component this={CurrentComponent} />
</DefaultLayout>
