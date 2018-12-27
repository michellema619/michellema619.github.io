var imagesList = document.querySelectorAll(".shuffle-image");
console.log(imagesList);
for (var i=0; i<imagesList.length; i++){
	var imageName = imagesList[i].dataset.image;
	imagesList[i].style.backgroundImage = "url('images/portfolio/" + imageName + "')";
}


function groupFilter(groupName){
	shuffleInstance.filter(groupName)
}



//--------------------SHUFFLE--------------------
var Shuffle = window.Shuffle;
var element = document.querySelector("#all-shuffle");
var sizer = element.querySelector(".shuffle-image");

var shuffleInstance = new Shuffle(element, {
  itemSelector: ".shuffle-image",
  sizer: sizer // could also be a selector: '.my-sizer-element'
});
