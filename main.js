var teclas = {
    LEFT: 37,
    UP: 38,
    RIGTH: 39, 
    DOWN: 40
}

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d")
var x = 150;
var y = 150;

const dibujarTeclado = (evento) => {

    switch(evento.keyCode) {
        case teclas.DOWN:
            console.log("Abajo!!")
            break;
        case teclas.LEFT:
            console.log("Izquierda!!")
            break;
        case teclas.RIGTH:
            console.log("Derecha!!")
            break;
        case teclas.UP:
            console.log("Arriba!!")
            break;
        default:
            console.log("Otra Tecla")

    }
}

const dibujarTeclado2 = (evento) => {
    var colorcito = "red";
    var movimiento = 10; 
    switch(evento.keyCode) {
        case teclas.UP:
            dibujasLineas(colorcito, x, y, x, y - movimiento, papel)
            y -= movimiento;
            break;
        case teclas.DOWN:
            dibujasLineas(colorcito, x, y, x, y + movimiento, papel)
            y += movimiento;
            break;
        case teclas.LEFT:
            dibujasLineas(colorcito, x, y, x - movimiento, y,papel)
            x -= movimiento;
            break;
        case teclas.RIGTH:
            dibujasLineas(colorcito, x, y, x + movimiento, y, papel)
            x += movimiento;
            break
    }
}

const dibujasLineas = (color, x1, y1, x2, y2, lienzo) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1,y1);
    lienzo.lineTo(x2,y2);
    lienzo.stroke();
    lienzo.closePath();

}

document.addEventListener("keyup", dibujarTeclado2);

const add2 = (x) => {
    return x +2
}

