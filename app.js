var sound = new Audio("./assets/audio/rickroll.mp3");

async function rickroll() {
  sound.currentTime = 0;
  sound.play();
  document.getElementById("demo").innerHTML = "Never Gonna Give You Up";
}
