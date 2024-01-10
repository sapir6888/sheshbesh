
var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = Math.floor(((randomNumber1)*6)+1);
randomNumber2 = Math.floor(((randomNumber2)*6)+1);
var image1 = "./images/dice"+ randomNumber1 + ".png";
var image2 = "./images/dice"+ randomNumber2 + ".png";
document.getElementsByClassName("img1")[0].src=image1
document.getElementsByClassName("img2")[0].src=image2

