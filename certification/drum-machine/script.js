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

 const playBeatViaKeyPress = (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    audio.currentTime = 0; // reset before play
    audio.play();

    const display = document.getElementById("display");
    display.textContent = `Playing: ${audio.id}`;
  } else {
    console.log("Not a drum pad key");
  }
};
};

document.addEventListener("keydown", playBeatViaKeyPress);
