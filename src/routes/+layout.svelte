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
  :global {
    @mixin margin-between-y($size) {
      margin: $size 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    :root {
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

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: 'Inter', sans-serif;
      font-size: 1.6rem;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--text);
    }

    section {
      @include margin-between-y(5px);

      border: var(--border-width) dashed var(--secondary);
      padding: var(--padding);
      border-radius: var(--border-radius);

      & > * {
        @include margin-between-y(5px);
      }
    }

    hr,
    p {
      @include margin-between-y(5px);
    }

    hr {
      color: var(--text);
    }
  }

  .app {
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

  .app > :global(*) {
    padding: var(--padding);
    border: var(--border-width) solid var(--secondary);
    border-radius: var(--border-radius);
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
