<script lang="ts">
  import Tab from './Tab.svelte';
</script>

<nav>
  <ul>
    <Tab path="/" name="home" />
    <Tab path="/about" name="about" />
  </ul>
</nav>

<style lang="scss">
  ul {
    list-style-type: none;
  }
</style>
