var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonHtml=this.innerHTML;
    makeSound(buttonHtml);
    buttonAnimation(buttonHtml);
  });
}


function makeSound(key1){

  switch (key1) {
    case "w":
    audio=new Audio("sounds/crash.mp3");
    audio.play();
      break;

    case "a":
    audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
        break;

        case "s":
        audio=new Audio("sounds/snare.mp3");
        audio.play();
          break;

          case "d":
          audio=new Audio("sounds/tom-1.mp3");
          audio.play();
            break;

            case "j":
            audio=new Audio("sounds/tom-2.mp3");
            audio.play();
              break;

              case "k":
              audio=new Audio("sounds/tom-3.mp3");
              audio.play();
                break;

                case "l":
                audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                  break;

}
}

//detecting keyboard press
document.addEventListener("keydown",function(event12){
  // .key is standard used for detecting keypress/keydownw
makeSound(event12.key);
buttonAnimation(event12.key);


});

function buttonAnimation(keyType){
  var newKey=document.querySelector("."+keyType);
  newKey.classList.add("pressed");
  setTimeout(function () {
newKey.classList.remove("pressed");
  }, 10);
}

// var audio=new Audio("sounds/crash.mp3");
// audio.play();
