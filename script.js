const btnPiedra = document.getElementById("btnPiedra");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");
const seleccionUsuarioElement = document.getElementById("seleccionUsuario");
const seleccionComputadorElement = document.getElementById("seleccionComputador");
const ganadorElement = document.getElementById("ganador");

//opciones disponibles
const opciones = ["Piedra", "Papel", "Tijera"];
const imagenes = {
    Piedra: "assets/icons/piedra.png",
    Papel: "assets/icons/papel.png",
    Tijera: "assets/icons/tijera.png",
};

//generar la elección del computador
function eleccionComputador() {
    const randomIndex = Math.floor(Math.random() * opciones.length);
    return opciones[randomIndex];
}

//determinar el ganador
function determinarGanador(seleccionUsuario, seleccionComputador) {
    if (seleccionUsuario === seleccionComputador) {
        return "Empate";
    } else if (
        (seleccionUsuario === "Piedra" && seleccionComputador === "Tijera") ||
        (seleccionUsuario === "Papel" && seleccionComputador === "Piedra") ||
        (seleccionUsuario === "Tijera" && seleccionComputador === "Papel")
    ) {
        return "¡Ganaste!";
    } else {
        return "Perdiste";
    }
}

//manejar la elección del usuario
function jugar(seleccionUsuario) {
    const seleccionComputador = eleccionComputador();
    const resultado = determinarGanador(seleccionUsuario, seleccionComputador);

    usuarioImage.src = imagenes[seleccionUsuario];
    computadorImage.src = imagenes[seleccionComputador];

    ganadorElement.textContent = `Resultado: ${resultado}`;
}
btnPiedra.addEventListener("click", () => jugar("Piedra"));
btnPapel.addEventListener("click", () => jugar("Papel"));
btnTijera.addEventListener("click", () => jugar("Tijera"));
