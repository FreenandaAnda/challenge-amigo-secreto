// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let amigosMaximos = 6;

// Agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombreAmigo = input.value.trim();

    // Validar nombre
    if (nombreAmigo === "") {
        alert("Por favor digita un nombre válido");
        return;
    }

    // Validar límite de amigos
    if (listaAmigos.length >= amigosMaximos) {
        alert("Ya agregaste el máximo de 6 amigos");
        return;
    }

    // Agregar a la lista y limpiar caja
    listaAmigos.push(nombreAmigo);
    input.value = "";

    // Actualizar lista en pantalla
    mostrarNombres();
}

// Mostrar lista en pantalla
function mostrarNombres() {
    let mostrarLista = document.getElementById("listaAmigos");
    mostrarLista.innerHTML = "";

    listaAmigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        mostrarLista.appendChild(li);
    });
}

// Sortear un amigo aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nombreAleatorio = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreAleatorio}</strong></li>`;
}

// Reiniciar el juego
function reiniciarJuego() {
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("nombreAmigo").value = "";
}
