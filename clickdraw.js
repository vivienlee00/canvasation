var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var shape = 0;
var oldx;
var oldy;
var offsetnum = 0;
var x, y;

console.log("screen");

function toggle(){

    //toggles shape drawn and updates screen label
    
  if(shape==0){
      shape = 1;
      document.getElementById("shape").innerHTML = "Circle";
  }
  else{
      shape = 0;
      document.getElementById("shape").innerHTML = "Square";
  }
}

function offset(){

    //cycles through different coordinate offsets and updates screen label
    
    if(offsetnum == 3){
	offsetnum = 0;
    }
    else{
	offsetnum+=1;
    }

    if(offsetnum == 0){
	console.log("screen");
	document.getElementById("takeoff").innerHTML = "Screen";
    }
    
    if(offsetnum == 1){
	console.log("offset");
	document.getElementById("takeoff").innerHTML = "Offset";
    }
    
    if(offsetnum == 2){
	console.log("client");
	document.getElementById("takeoff").innerHTML = "Client";
    }
    
    if(offsetnum == 3){
	console.log("page");
	document.getElementById("takeoff").innerHTML = "Page";
    }
}

function drawShape(event){
    
    if(offsetnum == 0){
	x = event.screenX;
	y = event.screenY;
    }
    
    if(offsetnum == 1){
	x = event.offsetX;
	y = event.offsetY;
    }
    
    if(offsetnum == 2){
	x = event.clientX;
	y = event.clientY;
    }
    
    if(offsetnum == 3){
	x = event.pageX;
	y = event.pageY;
    }
    
    if(shape == 0){
	ctx.fillRect(x,y,10,10)
    }
    else{
	ctx.beginPath();
	ctx.arc(x,y,5,0, Math.PI*2);
	ctx.fill();
	ctx.closePath();
    }

    if(oldx != null){
	ctx.beginPath();
	ctx.moveTo(oldx,oldy);
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.closePath();
    }

    //stores coordinates of last drawn shape
    oldx = x;
    oldy = y;
}

function clr(){
    ctx.clearRect(0,0,600,600);
    console.log("clear");
    oldx = null;
    oldy = null;
}
