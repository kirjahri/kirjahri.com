<script lang="ts">
  import { page } from '$app/state';

  export let path: string;
  export let name: string;
</script>

<li><a href={path} class:active={page.url.pathname === path}>{name}</a></li>

<style lang="scss">
  li {
    text-align: center;

    a {
      display: block;
      padding: $padding;
      color: $secondary;
      background-color: $primary;
      border-radius: $border-radius;
      text-decoration: none;

      &:not(.active):hover {
        background-color: $sidebar-lnk-hover;
        transition: 0.15s;
      }

      &.active {
        color: $primary;
        background-color: $secondary;
        animation: bounce-in-out 0.3s;
        cursor: default;
      }

      &:not(.active):active {
        transform: scale(0.9);
        transition: 0.15s;
      }
    }
  }

  @keyframes bounce-in-out {
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
