const alpaca = BohnRush.getElementById("alpaca");
const corn = BohnRush.getElementById("corn");
const fence = BohnRush.getElementById("fence");


function duck() {
  if (alpaca.classList != "duck") {
    alpaca.classList.add("duck");
    
    setTimeout(function () {
      alpaca.classList.remove("duck");
    }, 300);

}

function getCornHealth() {

}


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
  
  //Game over after last alpaca color change
    alert("Get Bohned!");
  }
}, 10);

BohnRush.addEventListener("keydown", function (event) {
  jump();
});
