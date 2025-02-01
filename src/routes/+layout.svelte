<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import '@fontsource/inter/400.css';
  import '@fontsource/inter/700.css';
  import '@fontsource/ibm-plex-mono/400.css';
  import '@fontsource/ibm-plex-mono/700.css';

  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let visible = $state(false);
  onMount(() => (visible = true));

  let { children } = $props();
</script>

<svelte:head>
  <title>kirjahri.com</title>
</svelte:head>

{#if visible}
  <div class="container" transition:fade={{ duration: 300 }}>
    <Header />
    <Sidebar />
    <main>
      {@render children()}
    </main>
    <Footer />
  </div>
{/if}

<style>
  :global(:root) {
    --primary-color: #ffffff;
    --secondary-color: #000000;

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
  }

  .container {
    width: 60%;
    height: 60%;
    display: grid;
    grid:
      'header header' auto
      'sidebar main' 1fr
      'footer footer' auto
      / 0.5fr 3fr;
    gap: 5px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }

  .container > :global(*) {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }

  .container > :global(header) {
    grid-area: header;
  }

  .container > :global(nav) {
    grid-area: sidebar;
  }

  .container > main {
    grid-area: main;
  }

  .container > :global(footer) {
    grid-area: footer;
  }
</style>
