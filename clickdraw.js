var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var shape = 0;

function toggle(){
  if(shape==0){
    shape = 1;
  }
  else{
    shape = 0;
  }
}

function drawShape(event){
  var x = event.clientX;
  var y = event.clientY;

  if(shape == 0){
    ctx.fillRect(x,y,10,10)
  }
  else{
    ctx.beginPath();
    ctx.arc(x,y,10,0, Math.PI*2);
    ctx.fill();
  }

}

function clr(){
  ctx.clearRect(0,0,600,600);
  console.log("clear");
}
