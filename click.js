var cuadrito = document.getElementById("paint");
cuadrito.addEventListener("mousemove", dibujar);
cuadrito.addEventListener("mousedown", dibujar);
var papel = cuadrito.getContext("2d");
var color = "black";
var width = 1;
var fin;
var x;
var y;

dibujarLinea("black", 0, 0, 300, 0, papel);
dibujarLinea("black", 300, 0, 300, 300, papel);
dibujarLinea("black", 300, 300, 0, 300, papel);
dibujarLinea("black", 0, 300, 0, 0, papel);

function dibujar(event) {
    if (fin == 1) {
        dibujarLinea(color, x, y, event.layerX, event.layerY, papel);
    }
    x = event.layerX;
    y = event.layerY;
    fin = event.buttons;
}

function dibujarLinea(color, xi, yi, xf, yf, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = width;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function lineWidth() {
    if (click = true) {
        width = width + 1;
    }
}

function subLineWidth() {
    if (click = true) {
        width = width - 1;
    }
}

function cambiarColor() {
    if (click = true) {
        color = "#AFA";
    }
}

function cambio() {
    if (click = true) {
        color = "black";
    }
}