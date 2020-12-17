console.log("Hey Sebastiaan ;p");

let nrOfPics = 62;

function showPic() {
  let rand = Math.floor(Math.random() * nrOfPics);
  document.getElementById("picture").src = `res/${rand}.jpg`;
}

showPic();
