var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var n;
var randomChosenColor;
var userChosenColor;
var level=0;
var startedToToggle = false;

$(document).on('keypress',function(e) {
    if((e.which == 65 || e.which == 97) && (startedToToggle == false)) {
        startedToToggle = true;
        setTimeout(function(){nextSequence()}, 500);
    }
});

function nextSequence(){
    userClickedPattern = [];
    $("#level-title").html("Level <span class = 'diff-color'>" +level+ "</span>");
    n =  Math.floor(Math.random()*4);
    
    randomChosenColor = buttonColours[n];

    $("#" +randomChosenColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    playSound(randomChosenColor);

    gamePattern.push(randomChosenColor);
    level++;
}

$(".btn").click(function(){
    userChosenColor = $(this).attr("id");

    animatePress(userChosenColor);
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
   
});

function checkAnswer(currentLevel){
    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");

        //if gamepattern has reached 5, the user need to pass all 5 checks, after that nextSequence.
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){nextSequence()}, 1000);
        }
        
    }
    else{
        console.log("Wrong");
        $("#level-title").html("Game Over, Press <span class = 'diff-color'>A</span> Key to Restart");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over")}, 200);
        startOver();       
        
    }
}

function playSound(name){
    var audio = new Audio("sounds/" +name +".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("." +currentColor).addClass("pressed");
    setTimeout(function(){$("."+currentColor).removeClass('pressed')}, 100);

}

function startOver(){
    level = 0;
    startedToToggle = false;
    gamePattern = [];
}







