const alpaca = BohnDoc.getElementById("alpaca");
const corn = BohnDoc.getElementById("corn");

function duck() {


}

function cornHealth() {

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
  
  
  
  // detect collision
  if ( ) {
  
  //Game over after last alpaca color change
    alert("Get Bohned!");
  }
}, 10);

BohnDoc.addEventListener("keydown", function (event) {
  jump();
});
