<script lang="ts">
  import ExternalLink from './ExternalLink.svelte';

  let username = 'kirjahri';

  let data: any = $state({});
  fetch(`https://status.cafe/users/${username}/status.json`)
    .then((response) => response.json())
    .then((json) => (data = json));
</script>

<section>
  <div class="status">
    <div class="status-username">
      <ExternalLink
        href={`https://status.cafe/users/${username}`}
        content={data.author || username}
      /> &bull;
      {data.face || '...'} &bull;
      {data.timeAgo || '...'}
    </div>
    <div class="status-content">{@html data.content || '...'}</div>
  </div>
</section>

<style lang="scss">
  section {
    padding: 0;
  }

  .status-username {
    padding: $padding;
    color: $primary;
    background-color: $secondary;
    margin-bottom: 5px;
  }

  .status-content {
    padding: $padding;
    margin: 0 10px 5px 10px;
  }
</style>
