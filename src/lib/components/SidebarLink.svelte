<script lang="ts">
  import { page } from '$app/state';

  let { path, name } = $props();

  let active = $derived(page.url.pathname === path);
</script>

<li><a href={path} class:active>{name}</a></li>

<style>
  li {
    text-align: center;
  }

  li a {
    display: block;
    padding: 5px;
    color: var(--secondary-color);
    background-color: var(--primary-color);
    border-radius: 100vmax;
    text-decoration: none;
  }

  li a:not(.active):hover {
    background-color: var(--sidebar-lnk-hover);
    transition: 0.15s;
  }

  li a.active {
    color: var(--primary-color);
    background-color: var(--secondary-color);
    animation: bounce-in-out 0.3s;
    cursor: default;
  }

  li a:not(.active):active {
    transform: scale(0.9);
    transition: 0.15s;
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
