var lengthOfInstrumentArray=document.querySelectorAll(".drum").length;

for(var i=0; i<lengthOfInstrumentArray;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(event){
        sound(this.classList[0]);
    });
}

document.addEventListener("keydown",function(event){
    sound(event.key);
})

//We can use innerHTML also

// function handleClick(){
//     alert("Ahh!! They clicked me!");
// }

// function playSound(){
//     var kAudio=new Audio("./sounds/crash.mp3");
//     kAudio.play();
// }

function sound(option){
   switch(option){
    case "w":
        var audio=new Audio("./sounds/tom-1.mp3");
        audio.play();
    break;
    case "a":
        var audio=new Audio("./sounds/tom-2.mp3");
        audio.play();
    break;
    case "s":
        var audio=new Audio("./sounds/tom-3.mp3");
        audio.play();
    break;
    case "d":
        var audio=new Audio("./sounds/tom-4.mp3");
        audio.play();
    break;
    case "j":
        var audio=new Audio("./sounds/snare.mp3");
        audio.play();
    break;
    case "k":
        var audio=new Audio("./sounds/crash.mp3");
        audio.play();
    break;
    case "l":
        var audio=new Audio("./sounds/kick-bass.mp3");
        audio.play();
    break;
    default: console.log("Errr....Errrorrr");
   }
}