//Create array with colours
var buttonColours = ["red", "blue", "green", "yellow"];

//Create array to store the pattern
var gamePattern = [];

//Create array to store the user clicked pattern
var userClickedPattern = [];

//Create a variable to store whether the game was started or not
var started= false

//Create variable to store the level
var level=0

//Start game when user presses a key
$(document).keypress(function(){
    if(started===false){
        $("h1").text("Level " + level);
        nextSequence();
        //Change the value to true so that next kepresses don't count
        started=true
    }
});

//Create function that play audio
function playSound(ChosenColour){

    //Select the corresponding audio file
    var audio = new Audio("sounds/" + ChosenColour + ".mp3");

    //Play the audio file: as it takes longer to play the sound, do it before the flash effect
    audio.play();
}

//Create function that builds sequence
function nextSequence(){
    //Increase the level
    level++;

    //Change the title to the right level
    $("h1").text("Level "+ level);

    //Create variable that returns a random number between 0 and 3 (inclusive)
    var randomNumber= Math.floor(Math.random()*4);    

    //Create var that stores the randomly selected colour from the buttonColours array
    var randomChosenColour = buttonColours[randomNumber];

    //Add the selected colour to the pattern array
    gamePattern.push(randomChosenColour);

    //Select the button with the ID=randomChosenColour with jQuery. Use # to select by ID
    //Add flash effect by fade it out and in fast (100ms)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    //Play sound
    playSound(randomChosenColour)   

    return console.log(gamePattern)
}

//Create function to animate when a button is pressed
function animatePress(currentColour){
    //Add the class pressed to the button
    $("#"+currentColour).toggleClass("pressed")

    //Wait 100 ms and remove the pressed class
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}



//Wait that the whole content of the DOM is loaded before jQuery runs
//Check if a button is clicked and add it to the array
$(document).ready(function(){   
    $(".btn").click(function(){
        var userChosenColour = this.id ;
        userClickedPattern.push(userChosenColour);

        //Play sound
        playSound(userChosenColour);

        //Animate when pressed
        animatePress(userChosenColour);
        return console.log(userClickedPattern)
    });
});
