var square = document.getElementById("space");
square.addEventListener("mousemove", dibujoMouse);
square.addEventListener("mousedown", dibujoMouse);
var paper = square.getContext("2d");
var line = document.getElementById("size");

var ini = 0
var w=1;
var x;
var y;
var colorLinea;

function cambio() {
  colorLinea= "black";
}
function cambiarColor() {
  colorLinea="aquamarine"
}
function wideLine(event) {
  if (click=true) {
    w=parseInt(line.value);
    console.log(w)
  }
}
function more (){
  w = w + 1;
}
function substract (){
  if (w > 1){
    w = w - 1;
  }
}
function dibujarLinea (color, xi, yi, xf, yf, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = w;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoMouse (evento){
  if (evento.buttons == 1){
    switch (ini){   
      case 0:
      dibujarLinea(colorLinea, evento.layerX, evento.layerY, evento.layerX - w / 2, evento.layerY, paper);
      ini = ini + 1;
      x = evento.layerX; 
      y = evento.layerY;
      break;
      case 1:
      dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, paper);
      x = evento.layerX; 
      y = evento.layerY;
      break; 
    }
  }
  else{
    ini = 0;
  }
}