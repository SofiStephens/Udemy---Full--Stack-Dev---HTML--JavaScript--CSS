// Assign kee to sound
function makeSound(key){
    switch (key) {
        case "w":
            new Audio('sounds/crash.mp3').play();
            break;
        case "a":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case "s":
            new Audio('sounds/snare.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "j":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "k":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "l":
            new Audio('sounds/tom-4.mp3').play();
            break;
        default: console.log(buttonInnerHTML)
            break;
    }
}

// Detect button press
function handleClick(){
    var buttonInnerHTML= this.innerHTML; //"this" retrieves the identity of the button that triggered the event listener
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
}

var buttons= document.querySelectorAll(".drum")

for (let i=0; i<buttons.length; i++ ){
    buttons[i].addEventListener("click", handleClick)
}

// Detect kee press
//We can add an event listener to the whole website
//The following is an "anonymous" function
//I can add a parameter to this function that is actually the event that triggered it
document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

// Create Animation by adding a CSS class to the buttons when pressed
function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){  // To wait a bit before going back to original format
        activeButton.classList.remove("pressed"); //To go back to the original button format
    }, 100) //0.1 second
    
}