<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import '@fontsource/inter/400.css';
  import '@fontsource/inter/700.css';
  import '@fontsource/ibm-plex-mono/400.css';
  import '@fontsource/ibm-plex-mono/700.css';

  import Header from '$lib/components/Header.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let visible = $state(false);
  onMount(() => (visible = true));

  let { data, children } = $props();
</script>

<svelte:head>
  <title>kirjahri.com</title>
</svelte:head>

{#if visible}
  <div class="container" transition:fade={{ duration: 300 }}>
    <Header />
    <Navbar />
    <main>
      {#key data.pathname}
        <div
          in:fade={{ delay: 100, duration: 100 }}
          out:fade={{ duration: 100 }}
        >
          {@render children()}
        </div>
      {/key}
    </main>
    <Sidebar />
    <Footer />
  </div>
{/if}

<style>
  :global(:root) {
    --padding: 10px;
    --gap: 10px;
    --border-width: 2px;
    --border-radius: 10px;
    --outline-width: 3px;

    --primary: #ffffff;
    --secondary: #008000;

    --text: #006400;

    --sidebar-lnk-hover: rgba(0, 0, 0, 0.1);
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html) {
    font-size: 62.5%;
  }

  :global(body) {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);
  }

  :global(section) {
    border: var(--border-width) dashed var(--secondary);
    padding: var(--padding);
    border-radius: var(--border-radius);
    margin: 5px 0;
  }

  :global(section:first-child) {
    margin-top: 0;
  }

  :global(section:last-child) {
    margin-bottom: 0;
  }

  :global(section > :first-child) {
    margin-top: 0;
  }

  :global(section > :last-child) {
    margin-bottom: 0;
  }

  :global(hr, p) {
    margin: 5px 0;
  }

  :global(hr) {
    color: var(--text);
  }

  .container {
    width: 1440px;
    height: 90%;
    display: grid;
    grid:
      'header header header' auto
      'nav main sidebar' 1fr
      'footer footer footer' auto
      / 1fr 5fr 1fr;
    gap: var(--gap);
    padding: var(--padding);
    border: var(--border-width) solid var(--secondary);
    outline: var(--outline-width) solid var(--primary);
    border-radius: var(--border-radius);
    background-color: var(--primary);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .container > :global(*) {
    padding: var(--padding);
    border: var(--border-width) solid var(--secondary);
    border-radius: var(--border-radius);
  }

  .container > :global(header) {
    grid-area: header;
    border: none;
    border-radius: 100vmax;
  }

  .container > :global(nav) {
    grid-area: nav;
  }

  .container > :global(aside) {
    grid-area: sidebar;
  }

  .container > main {
    grid-area: main;
  }

  .container > :global(footer) {
    grid-area: footer;
  }

  main {
    display: grid;
  }
</style>
