var randomnumber1=Math.floor(Math.random()*6+1);

var imgsrc="images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsrc)
