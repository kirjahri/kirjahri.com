<script lang="ts">
  import { IconExternalLink } from '@tabler/icons-svelte';

  export let href: string;
  export let target: string = '_blank';
  export let content: string;
</script>

<a {href} {target}>{content} <IconExternalLink /></a>

<style lang="scss">
  a :global(svg) {
    width: 16px;
    height: 16px;
    stroke-width: 3;
  }
</style>
