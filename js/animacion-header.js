function crearBurbujas() {

    const fondo = document.querySelector(".fondo__animado-header");
    const crearElemento = document.createElement("span");
    var size = Math.random() * 60;

    crearElemento.style.animation = "animation 30s linear infinite";
    crearElemento.style.width = 180 + size + "px";
    crearElemento.style.height = 180 + size + "px";
    crearElemento.style.left = Math.random() * innerWidth + "px";
    fondo.appendChild(crearElemento);

    setTimeout(() => {
        crearElemento.remove();
    }, 4500);
}
setInterval(crearBurbujas, 700);