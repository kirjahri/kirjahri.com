<script lang="ts">
  let data: any = $state({});

  fetch('https://status.cafe/users/kirjahri/status.json')
    .then((response) => response.json())
    .then((json) => (data = json));
</script>

<section>
  <div class="status">
    <div class="status-username">
      <a href="https://status.cafe/users/kirjahri" target="_blank"
        >{data.author || 'loading...'}</a
      >
      {data.face}
      {data.timeAgo}
    </div>
    <div class="status-content">{@html data.content || 'loading...'}</div>
  </div>
</section>

<style>
  .status-username {
    margin-bottom: 5px;
  }

  .status-content {
    margin: 0 10px 5px 10px;
  }
</style>
