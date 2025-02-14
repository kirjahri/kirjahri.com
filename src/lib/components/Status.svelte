<script lang="ts">
  import ExternalLink from './ExternalLink.svelte';

  let username = 'kirjahri';

  let data: any = $state({});
  fetch(`https://status.cafe/users/${username}/status.json`)
    .then((response) => response.json())
    .then((json) => (data = json));
</script>

<section>
  <h1>
    <ExternalLink content="status.cafe" href="https://status.cafe" size={20} />
  </h1>
  <hr />
  <section>
    <div class="status">
      <div class="status-username">
        <ExternalLink
          content={data.author || username}
          href={`https://status.cafe/users/${username}`}
        /> &bull;
        {data.face || '...'} &bull;
        {data.timeAgo || '...'}
      </div>
      <div class="status-content">{@html data.content || '...'}</div>
    </div>
  </section>
</section>

<style lang="scss">
  section section {
    border-style: solid;
    padding: 0;
  }

  .status-username {
    padding: $padding;
    color: $primary;
    background-color: $secondary;
    border-radius: 5px 5px 0 0;
    margin-bottom: 5px;
  }

  .status-content {
    padding: $padding;
    margin: 0 10px 5px 10px;
  }
</style>
