var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
@@ -8,9 +9,13 @@ btnno.addEventListener('mouseenter', () => {
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('te amo juli felis 1 día de novios :3');

   
