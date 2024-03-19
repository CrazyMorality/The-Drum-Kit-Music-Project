var drumNumbers=document.querySelectorAll(".drum").length;
for(var i=0;i<=drumNumbers;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//  alert("mouse was pressed");
  var buttonclick=this.innerHTML;
  makeSound(buttonclick);
  buttonAnimaton(buttonclick);
});
}




function makeSound(eventType){
var audio;
  switch (eventType) {
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
                  break;  // default:console.log("key");

  }
}
function buttonAnimaton(eventType){
  var buttton=document.querySelector("."+eventType);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

document.addEventListener("keydown",function(event){
  alert("key was pressed");
  makeSound(event.key);
});
