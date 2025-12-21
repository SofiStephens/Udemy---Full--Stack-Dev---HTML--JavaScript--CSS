// document.querySelector("button").addEventListener("click", handleClick)
//var audio = new Audio('sounds/tom-1.mp3')
function handleClick(){
    var buttonInnerHTML= this.innerHTML; //"this" retrieves the identity of the button that triggered the event listener
    switch (buttonInnerHTML) {
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

var buttons= document.querySelectorAll(".drum")
for (let i=0; i<buttons.length; i++ ){
    buttons[i].addEventListener("click", handleClick)
    //"this" retrieves the identity of the button that triggered the event listener
}
