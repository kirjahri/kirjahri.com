import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex(), sveltePreprocess()],
  kit: {
    adapter: adapter({
      fallback: 'not_found.html',
    }),
  },
  extensions: ['.svelte', '.svx'],
};

export default config;
