//This file performs the logic of replacing!

let dictionary = new Map();
dictionary.set('😀', '1f600');
dictionary.set('😁', '1f601');
dictionary.set('😂', '1f602');
dictionary.set('😃', '1f603');
dictionary.set('😄', '1f604');
dictionary.set('😅', '1f605');

const baseURL = "https://twemoji.maxcdn.com/v/latest/72x72/"; //need to add .png ;-)

var allImages = document.getElementsByTagName("img");

console.log(allImages);

for (var i = 0; i < allImages.length; i++) {
  var code = dictionary.get(allImages[i].alt);
  console.log(allImages[i]);
  if (code != undefined) {
    //its an emoji
   allImages[i].src = baseURL + code + ".png";
   allImages[i].style.backgroundColor = "red";
  }
}
