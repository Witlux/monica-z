const audio = document.querySelector("audio");
const lyrics = document.querySelector("#lyrics");
const playIcon = document.querySelector(".play-icon");

const lyricsData = [
  { text: "tarda un poco la letra asi que espera je ", time: 0 },
  { text: "💖", time: 5 },
  { text: "quiza no es el momento", time: 77 },
  { text: "o no soy el correcto", time: 82 },
  { text: "pero hay algo en nosotros", time: 86 },
  { text: "lo sabes bien", time: 88  },
  { text: "algo entre nosotros", time: 91  },
  { text: "yo lose", time: 93 },
  { text: "quiza no es el momento", time: 96 },
  { text: "o no soy el correcto", time: 101 },
  { text: "pero sabes hay algo", time: 105 },
  { text: "que debo hacer ", time: 108 },
  { text: "hay un secreto que confesare", time: 111 },
  { text: "te necesito mas que a nada lose", time: 115 },
  { text: "te quiero mas de lo que algun dia pense", time: 120 },
  { text: "te extrañare y mas nose puede extrañar", time: 125 },
  { text: "te amo mas de lo que se puede amar", time: 130  },


];

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  const currentLine = lyricsData.find((line, index) => {
    const nextLine = lyricsData[index + 1];
    return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
  });

  lyrics.textContent = currentLine ? currentLine.text : "";
});

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playIcon.textContent = "⏸";
  } else {
    audio.pause();
    playIcon.textContent = "▶";
  }
}
