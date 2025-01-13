fetch('https://status.cafe/users/kirjahri/status.json')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('statuscafe-face').innerHTML = data.face;
    document.getElementById('statuscafe-author').innerHTML = data.author;
    document.getElementById('statuscafe-time-ago').innerHTML = data.timeAgo;
    document.getElementById('statuscafe-content').innerHTML = data.content;
  });
