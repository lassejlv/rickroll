var sound = new Audio("./assets/audio/rickroll.mp3");

async function rickroll() {
  // add rickroll sound to the page
  sound.currentTime = 0;
  sound.play();

  // add text to the page
  document.getElementById("demo").innerHTML = "Never Gonna Give You Up";

  // add image to the page
  var img = document.createElement("img");
  img.src = "./assets/img/nevergonnagiveyouup.gif";
  img.height = "300";
  img.width = "300";

  document.body.appendChild(img);
}
