<script lang="ts">
  import ExternalLink from '$lib/components/ExternalLink.svelte';
  import wooper from '$lib/assets/wooper.png';
</script>

<section>
  <div class="content">
    <img alt="plushy of wooper" src={wooper} />

    <h1>home</h1>
    <hr />

    <p>
      hi! welcome to my site, kirjahri.com! i am the webmaster, kirja<sup
        >(any/all)</sup
      >. here, you will be able to find info on all of my hobbies/interests,
      from *art, music, games, and more. learn more about me and this site
      <a href="/about">here.</a>
      for updates on this site, follow me on
      <ExternalLink
        content="neocities"
        href="https://neocities.org/site/kirjahri"
      />. thanks for visiting!!
    </p>

    <p>
      also, since this site's code is compiled, using inspect element won't
      really help you see how i did something. check out the <ExternalLink
        content="github repo"
        href="https://github.com/kirjahri/kirjahri.com"
      /> for this site if you want to do that (i don't mind people stealing my code),
      though you will need some knowledge of <ExternalLink
        content="svelte"
        href="https://svelte.dev/docs/svelte"
      /> and <ExternalLink
        content="sveltekit"
        href="https://svelte.dev/docs/kit"
      /> to understand what is going on. feel free to contribute btw as i am just
      a dumb {Math.abs(
        new Date(
          Date.now() - new Date('3/29/2010').getTime(),
        ).getUTCFullYear() - 1970,
      )} year old who learned how to program with a search engine and a strong will
      LOL
    </p>

    <p style="font-size: 1.2rem">
      *idk how i'm gonna do the art page since i don't rlly wanna have to upload
      every piece of artwork i've made to here :P i'll figure something out
    </p>
  </div>
</section>

<style lang="scss">
  img {
    width: 300px;
    display: block;
    margin: 0 auto;
  }
</style>
