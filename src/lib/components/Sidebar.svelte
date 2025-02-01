<script lang="ts">
  import SidebarLink from './SidebarLink.svelte';
</script>

<nav>
  <h1>sidebar</h1>
  <ul>
    <SidebarLink path="/" name="home" />
  </ul>
</nav>

<style>
  ul {
    list-style-type: none;
  }
</style>
