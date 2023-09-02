//rock = 1, paper =2, scissors = 3
// if 1 and 2 // 2 wins
//if 2 and 3 // 3 wins
// if 3 and 1 // 1 wins

var p1 = Math.floor((Math.random() * 3)) + 1;
var p2 = Math.floor((Math.random() * 3)) + 1;

document.querySelector(".p1-img").setAttribute("src", "images/img"+p1 +".jpg");
document.querySelector(".p2-img").setAttribute("src",  "images/img"+p2 +".jpg");

if(p1 === p2){
    document.querySelector(".container h1").innerHTML = "Draw!!";
}
else if(p1 === 1){
    //p1 rock
    if(p2 === 2){
        document.querySelector(".container h1").innerHTML = "Player <span class ='blue'>2</span> wins!!";
        document.querySelector(".trophy2").classList.remove("trp2");
    }
    else{
        // p1 wins
        document.querySelector(".container h1").innerHTML = "Player <span class ='blue'>1</span> wins!!";
        document.querySelector(".trophy1").classList.remove("trp1");
    }
}

else if(p1 === 2){
    //p1 paper
    if(p2 === 3){
        // p2 wins
        document.querySelector(".container h1").innerHTML = "Player <span class ='blue'>2</span> wins!!";
        document.querySelector(".trophy2").classList.remove("trp2");

    }
    else{
        // p1 wins
        document.querySelector(".container h1").innerHTML = "Player <span class ='blue'>1</span> wins!!";
        document.querySelector(".trophy1").classList.remove("trp1");
    }
}

else{
    //p1 scissors
    if(p2 === 1){
        // p2 wins
        document.querySelector(".container h1").innerHTML = "Player <span class ='blue'>2</span> wins!!";
        document.querySelector(".trophy2").classList.remove("trp2");

    }
    else{
        // p1 wins
        document.querySelector(".container h1").innerHTML = "Player <span class ='blue'>1</span> wins!!";
        document.querySelector(".trophy1").classList.remove("trp1");
    }
}
