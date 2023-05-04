// alert("hi");
for (var i = 0; i < document.querySelectorAll(".btn").length; i++) // to set fn for all btns in loop
{
  document.querySelectorAll(".btn")[i].addEventListener("click", fn); //  on btn press
  function fn() {
    this.style.color = "white";
    var curbtn = this.innerHTML;
    keyb(curbtn); //sound fn call
    timeout(curbtn); // time delay fn
  }


}

document.addEventListener("keypress", function(event) { // on key press (event here is the keypressed)
  keyb(event.key); // sound fn call
  timeout(event.key);
});


function keyb(key) // sound fn
{
  switch (key) {
    case "a":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "b":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "c":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "e":
      var audio = new Audio("sounds/tom-5.wav");
      audio.play();
      break;
     case "f":
        var audio = new Audio("sounds/tom-6.wav");
        audio.play();
        break;
    case "g":
          var audio = new Audio("sounds/tom-7.wav");
          audio.play();
          break;
      case "h":
            var audio = new Audio("sounds/tom-8.wav");
            audio.play();
            break;

            case "i":
              var audio = new Audio("sounds/tom-9.wav");
              audio.play();
              break;
            case "j":
              var audio = new Audio("sounds/tom-10.wav");
              audio.play();
              break;
            case "k":
              var audio = new Audio("sounds/tom-11.wav");
              audio.play();
              break;
            case "l":
              var audio = new Audio("sounds/tom-12.wav");
              audio.play();
              break;
              case "m":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            
    default:
      alert("Wrong button pressed");
  }
}

function timeout(value){
  var time=document.querySelector("."+ value);
  time.classList.add("onclick");
  setTimeout(function()
  {
    time.classList.remove("onclick")
    
  },500);
}
