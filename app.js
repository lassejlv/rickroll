// reload page
function reload() {
  window.location.reload();
}

const siteTitle = document
  .getElementById("site-title")
  .addEventListener("click", reload);

// rickroll code
async function rickroll() {
  const sound = new Audio("./assets/audio/rickroll.mp3");
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
  sound.volume = 0.3;
  sound.play();

  // add text to the page
  document.getElementById("text-clicked").innerHTML = "Never Gonna Give You Up";

  // add image to the page
  let img = document.createElement("img");
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
