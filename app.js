var sound = new Audio("./assets/audio/rickroll.mp3");

async function rickroll() {
  // remove burger image after clicking
  function remove_img() {
    document.getElementById("burger-img").remove();
  }
  // remove like-btn after clicking
  function remove_btn() {
    document.getElementById("like-btn").remove();
  }
  remove_img();
  remove_btn();

  // add rickroll sound to the page
  sound.currentTime = 0;
  sound.play();

  // add text to the page
  document.getElementById("text-clicked").innerHTML = "Never Gonna Give You Up";

  // add image to the page
  var img = document.createElement("img");
  img.src = "./assets/img/nevergonnagiveyouup.gif";
  // image styles
  img.height = "300";
  img.width = "300";
  img.style.display = "block";
  img.style.marginLeft = "auto";
  img.style.marginRight = "auto";
  img.style.marginTop = "55px";
  img.style.boxShadow = "0px 0px 10px black";
  img.style.borderRadius = "10px";

  // add more text to the page
  document.getElementById("text-clicked-100").innerHTML =
    "You have been successfully rickrolled!";

  document.body.appendChild(img);
}
