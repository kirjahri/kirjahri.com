<script lang="ts">
  import SidebarLink from './SidebarLink.svelte';
</script>

<nav>
  <ul>
    <SidebarLink path="/" name="home" />
    <SidebarLink path="/about" name="about" />
  </ul>
</nav>

<style>
  ul {
    list-style-type: none;
  }
</style>
