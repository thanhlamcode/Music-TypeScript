// APlayer
const aplayer = document.querySelector("#aplayer");
if (aplayer) {
  const song = JSON.parse(aplayer.getAttribute("data-song"));
  const topic = JSON.parse(aplayer.getAttribute("data-topic"));
  const singer = JSON.parse(aplayer.getAttribute("data-singer"));

  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    audio: [
      {
        name: song.title,
        artist: singer.fullName,
        url: song.audio,
        cover: song.avatar,
      },
    ],
    autoplay: true,
  });

  const avatar = document.querySelector(".singer-detail .inner-avatar img");
  console.log(avatar);

  ap.on("play", function () {
    avatar.style.animationPlayState = "running";
  });
  ap.on("pause", function () {
    avatar.style.animationPlayState = "paused";
  });
}

// End APlayer
