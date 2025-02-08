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

  let isVisible = $state(false);
  onMount(() => (isVisible = true));

  let { data, children } = $props();
</script>

<svelte:head>
  <title>kirjahri.com</title>
</svelte:head>

{#if isVisible}
  <div class="app" transition:fade={{ duration: 300 }}>
    <Header />
    <Navbar />
    <main>
      {#key data.pathname}
        <div
          in:fade={{ delay: 100, duration: 100 }}
          out:fade={{ duration: 100 }}
        >
          {@render children?.()}
        </div>
      {/key}
    </main>
    <Sidebar />
    <Footer />
  </div>
{/if}

<style lang="scss">
  @use '$styles/app.scss';

  .app {
    width: 1440px;
    height: 90%;
    display: grid;
    grid:
      'header header header' auto
      'nav main sidebar' 1fr
      'footer footer footer' auto
      / 1fr 5fr 1fr;
    gap: $gap;
    padding: $padding;
    border: $border-width solid $secondary;
    outline: $outline-width solid $primary;
    border-radius: $border-radius;
    background-color: $primary;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .app > :global(*) {
    padding: $padding;
    border: $border-width solid $secondary;
    border-radius: $border-radius;
  }

  .app > :global(header) {
    grid-area: header;
    border: none;
    border-radius: 100vmax;
  }

  .app > :global(nav) {
    grid-area: nav;
  }

  .app > :global(aside) {
    grid-area: sidebar;
  }

  .app > main {
    grid-area: main;
  }

  .app > :global(footer) {
    grid-area: footer;
  }

  main {
    display: grid;
  }
</style>
