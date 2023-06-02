function rotateFirstImage() {
  //Find the first element with a tag of "img"; Keep a reference to it.
  const firstImage = document.querySelector("img");
  //Change its style properties, causing it to be rotated
  firstImage.style.transform = "rotate(45deg)";

  console.log("Hopefully, the image's rotation was set to 45%");
  console.log("By the way the time is now " + new Date());
}

//Find the button by its ID; Keep a reference to it.
const myButton = document.getElementById("coolButton");
//Register a function to call when the button is clicked
myButton.addEventListener("click", rotateFirstImage);
