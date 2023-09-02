var randomNumber1 = Math.floor((Math.random()) *6) +1;

var randomNumber2 = Math.floor((Math.random()) *6) +1;


document.querySelector(".img1").setAttribute("src", "images/d"+randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src",  "images/d"+randomNumber2 +".png");

if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 1 wins!!";
    document.querySelector(".trophy1").classList.remove("trp1");
}
else if(randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML = "Player 2 wins!!";
    document.querySelector(".trophy2").classList.remove("trp2");
}
else{
    document.querySelector(".container h1").innerHTML = "Draw!!";
}