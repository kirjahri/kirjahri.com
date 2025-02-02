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
    --padding: 10px;
    --gap: 10px;
    --border-width: 2px;
    --border-radius: 10px;

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
    width: 60%;
    height: 60%;
    display: grid;
    grid:
      'header header' auto
      'sidebar main' 1fr
      'footer footer' auto
      / 0.5fr 3fr;
    gap: var(--gap);
    padding: var(--padding);
    border: var(--border-width) solid var(--secondary);
    border-radius: var(--border-radius);
  }

  .container > :global(*) {
    padding: var(--padding);
    border: var(--border-width) solid var(--secondary);
    border-radius: var(--border-radius);
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
