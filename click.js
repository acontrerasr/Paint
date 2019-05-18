var square = document.getElementById("space");
var paper = square.getContext("2d");
square.addEventListener("mousemove", dibujoMouse);
square.addEventListener("mousedown", dibujoMouse);

dibujarLinea("black", 0, 0, square.width, 0, paper);
dibujarLinea("black", square.width, 0, square.width, square.height, paper);
dibujarLinea("black", square.width, square.height, 0, square.height, paper);
dibujarLinea("black", 0, square.height, 0, 0, paper);

var ini = 0
var w=1;
var x;
var y;

function more ()
{
  w = w + 1;
  console.log(w);
}

function substract ()
{
  if (w > 1)
  {
    w = w - 1;
    console.log(w);
  }

}

function dibujarLinea (color, xi, yi, xf, yf, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = w;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujoMouse (evento)
{
  var colorLinea = "blue"; 
  if (evento.buttons == 1)
  {
    switch (ini)
    {   
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
  else
  {
    ini = 0;
  }
}
