// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSecreto;

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Normalizar el nombre (convertir a minúsculas)
    const nombreNormalizado = nombre.toLowerCase();

    // Verificar si el nombre ya existe en la lista (ignorando mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado)) {
        alert('Este nombre ya está en la lista. Por favor, ingresa un nombre diferente.');
        return;
    }

    amigos.push(nombre); // Guardar el nombre con la capitalización original
    input.value = '';
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    // Limpiar la lista después del sorteo
    amigos = [];
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}