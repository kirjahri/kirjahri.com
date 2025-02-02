<script lang="ts">
  import NavLink from './NavLink.svelte';
</script>

<nav>
  <ul>
    <NavLink path="/" name="home" />
    <NavLink path="/about" name="about" />
  </ul>
</nav>

<style>
  ul {
    list-style-type: none;
  }
</style>
