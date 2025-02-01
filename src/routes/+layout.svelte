<script lang="ts">
  import '@fontsource/inter';
  import '@fontsource/ibm-plex-mono';

  import Header from '$lib/components/Header.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>kirjahri.com</title>
</svelte:head>

<div class="container">
  <Header />
  <Sidebar />
  <main>
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  :global(:root) {
    --primary-color: #ffffff;
    --secondary-color: #000000;
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
