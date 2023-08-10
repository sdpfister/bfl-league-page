<!-- __layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components"

    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    
    inject({ mode: dev ? 'development' : 'production' });
</script>

<main>
    <Nav /> <!-- adds the nav (small and large) -->
  
    <slot />

    <Footer /> <!-- adds the footer -->
</main>