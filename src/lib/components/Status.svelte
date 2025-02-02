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
        >{data.author}</a
      >
      {data.face}
      {data.timeAgo}
    </div>
    <div class="status-content">{data.content}</div>
  </div>
</section>

<style>
</style>
