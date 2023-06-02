function rotateTheImage() {
  const firstImage = document.querySelector("img");
  firstImage.style.transform = "rotate(45deg)";
  console.log("Hopefully, the image's rotation was set to 45%");
  console.log("By the way the time is now " + new Date());
}

//Find the button by its ID, keep a reference to it
const button = document.querySelector("#coolButton");

//Register a function to call when the button is clicked
button.addEventListener("click", rotateTheImage);
