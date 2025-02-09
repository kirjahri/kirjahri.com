<script lang="ts">
  import { IconHome } from '@tabler/icons-svelte';
  import { IconInfoCircle } from '@tabler/icons-svelte';

  import Tab from './Tab.svelte';
</script>

<nav>
  <ul>
    <Tab content="home" href="/" Icon={IconHome} />
    <Tab content="about" href="/about" Icon={IconInfoCircle} />
  </ul>
</nav>

<style lang="scss">
  ul {
    list-style-type: none;
  }
</style>
