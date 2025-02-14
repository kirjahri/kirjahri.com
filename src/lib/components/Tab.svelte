<script lang="ts">
  import { page } from '$app/state';
  import type { Icon } from '@tabler/icons-svelte';

  export let content: string;
  export let href: string;
  export let Icon: Icon;
</script>

<li>
  <a {href} class:active={page.url.pathname === href}><Icon />{content}</a>
</li>

<style lang="scss">
  li {
    @include margin-between-y(5px);

    a {
      display: flex;
      align-items: center;
      justify-content: left;
      gap: 5px;
      font-weight: normal;
      padding: $padding;
      border-radius: $border-radius;
      background-color: $primary;
      transition: 0.15s;

      & :global(svg) {
        width: 18px;
        height: 18px;
        stroke-width: 2;
      }

      &:hover {
        filter: none;
        text-decoration: none;
      }

      &:not(.active) {
        &:hover {
          background-color: $sidebar-lnk-hover;
        }
      }

      &.active {
        font-weight: bold;
        color: $primary;
        background-color: $secondary;

        & :global(svg) {
          stroke-width: 2.5;
        }
      }
    }
  }
</style>
