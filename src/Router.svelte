<script>
  import { onMount } from 'svelte';
  import { routePath, navigateTo } from './router';
  import DefaultLayout from './Layout/DefaultLayout.svelte';
  import { pages } from './static-content';
  import ServiceDetail from './Services/[slug].svelte';
  import BlogPost from './Blog/[slug].svelte';
  import NotFound from './NotFound.svelte';

  let CurrentComponent;
  let params = {};
  let canonicalUrl = '';

  const routes = {};
  pages.forEach(page => {
    routes[page.path] = page.component;
  });

  const handleNavigation = () => {
    const path = window.location.pathname;
    routePath.set(path);
    console.log("Handling navigation", { path });

    if (path.startsWith('/service-detail/')) {
      CurrentComponent = ServiceDetail;
      params = { slug: path.split('/').pop() };
    } else if (path.startsWith('/blog/')) {
      CurrentComponent = BlogPost;
      params = { slug: path.split('/').pop() };
    } else {
      CurrentComponent = routes[path] || NotFound;
      params = {};
    }

    // Update canonical URL
    canonicalUrl = `${window.location.origin}${path}`;
  }

  onMount(() => {
    routePath.subscribe((path) => {
      console.log("Route path changed to", { path, routes });
      handleNavigation();
    });
    handleNavigation();
    window.addEventListener('popstate', handleNavigation);

    // Intercept clicks on all internal links
    document.body.addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (target && target.origin === window.location.origin) {
        e.preventDefault();
        navigateTo(target.pathname);
      }
    });
  });
</script>

<svelte:head>
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<DefaultLayout>
  <svelte:component this={CurrentComponent} {...params} />
</DefaultLayout>
