
var i = 0;
var images = [];
var time = 3000; 


// Image List 
images[0] =  'slide1.jpg';
images[1] =  'slide2.jpg';
images[2] =  'slide3.jpg';



console.log(images.length)



//Change Image  `images/${images[1]}`;  
function changeImg() {


    document.getElementById("img").src = `images/${images[i]}`;


  if (i < images.length - 1) {
      i++; 
    
    } else {

  i = 0;

  }

  
  setTimeout("changeImg()", time);

  }

  

window.onload=changeImg;
  
