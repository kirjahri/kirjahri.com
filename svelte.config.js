import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    sveltePreprocess({
      scss: {
        prependData: "@use 'src/styles/style.scss';",
      },
    }),
  ],
  kit: {
    adapter: adapter({
      fallback: 'not_found.html',
    }),
  },
};

export default config;
