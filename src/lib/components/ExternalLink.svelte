<script lang="ts">
  import { IconExternalLink } from '@tabler/icons-svelte';

  export let content, href: string;
  export let size: number = 16;
  export let stroke: number = 3;
  export let target: string = '_blank';
</script>

<a {href} {target}>{content}<IconExternalLink {size} {stroke} /></a>

<style lang="scss">
  a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
</style>
