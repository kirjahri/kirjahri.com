fetch('https://status.cafe/users/kirjahri/status.json')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('statuscafe-face').innerHTML = data.face;
    document.getElementById('statuscafe-author').innerHTML =
      `<a href="https://status.cafe/users/kirjahri"><b>${data.author}</b></a>`;
    document.getElementById('statuscafe-time-ago').innerHTML = data.timeAgo;
    document.getElementById('statuscafe-content').innerHTML = data.content;
  });
