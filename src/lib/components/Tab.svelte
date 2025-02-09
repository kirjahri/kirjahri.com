<script lang="ts">
  import { page } from '$app/state';
  import type { Icon } from '@tabler/icons-svelte';

  export let content: string;
  export let href: string;
  export let Icon: Icon;
</script>

<li>
  <a {href} class:active={page.url.pathname === href}><Icon />&nbsp;{content}</a
  >
</li>

<style lang="scss">
  li {
    @include margin-between-y(5px);

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.8rem;
      font-weight: normal;
      padding: $padding;
      border-radius: $border-radius;
      background-color: $primary;
      transition: 0.15s;

      & :global(svg) {
        width: 22px;
        height: 22px;
        stroke-width: 1.5;
      }

      &:hover {
        filter: none;
        text-decoration: none;
      }

      &:not(.active) {
        &:hover {
          background-color: $sidebar-lnk-hover;
        }

        &:active {
          transform: scale(0.9);
        }
      }

      &.active {
        font-weight: bold;
        color: $primary;
        background-color: $secondary;
        animation: bounce 0.3s;
        cursor: default;

        & :global(svg) {
          stroke-width: 2.5;
        }
      }
    }
  }

  @keyframes bounce {
    from {
      transform: scale(0.9);
    }

    50% {
      transform: scale(1.015);
    }

    to {
      transform: scale(1);
    }
  }
</style>
