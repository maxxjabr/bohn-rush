const alpaca = BohnRush.getElementById("alpaca");
const corn = BohnRush.getElementById("corn");
const fence = BohnRush.getElementById("fence");

let collisionCounter = 0;

function duck() {
  if (alpaca.classList != "duck") {
    alpaca.classList.add("duck");
    
    setTimeout(function () {
      alpaca.classList.remove("duck");
    }, 300);

}

// function getCornHealth() {

// }


function jump() {
  if (alpaca.classList != "jump") {
    alpaca.classList.add("jump");
    
    setTimeout(function () {
      alpaca.classList.remove("jump");
    }, 300);
  }
}

//game over/hit damage function, maybe check the color of the alpaca (which alpaca png) to determine when alpaca is hurt/dead
let getBohned = setInterval(function () {
  // get current alpaca Y position
  let alpacaTop = parseInt(window.getComputedStyle(alpaca).getPropertyValue("top"));
  
  let fenceLeft = parseInt(window.getComputedStyle(fence).getPropertyValue("top"));
  
  // detect collision
  if (fenceLeft < 50 && fenceLeft > 0 && alpacaTop >= 140) {
    switch(collisionCounter)
      case 0:
        BohnRush.getElementById("alpaca").src = "alpaca1_purple.png";
      case 1:
        BohnRush.getElementById("alpaca").src = "alpaca1_blue.png";
      case 2:
        BohnRush.getElementById("alpaca").src = "alpaca1_green.png";
      case 3:
        BohnRush.getElementById("alpaca").src = "alpaca1_yellow.png";  
      case 4:
        BohnRush.getElementById("alpaca").src = "alpaca1_orange.png";
      case 5:
        BohnRush.getElementById("alpaca").src = "alpaca1_red.png";
      case 6:
        //Game over after last alpaca color change
        alert("Get Bohned!");
  }
}, 10);

BohnRush.addEventListener("keydown", function (event) {
  jump();
});
