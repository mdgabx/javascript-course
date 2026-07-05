const drumPad = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

const playBeat = (audio) => {
  audio.currentTime = 0;
  audio.play();
  display.textContent = `Playing: ${audio.id}`;
};

drumPad.forEach((pad) => {
  pad.addEventListener("click", (e) => {
    const audio = e.currentTarget.querySelector("audio");
    playBeat(audio);
  });
});

const playBeatViaKeyPress = (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    playBeat(audio);

    // Optional: highlight the pad briefly
    // const pad = audio.parentElement;
    // pad.classList.add("active");
    // setTimeout(() => pad.classList.remove("active"), 150);
  } else {
    console.log("Not a drum pad key");
  }
};

document.addEventListener("keydown", playBeatViaKeyPress);
