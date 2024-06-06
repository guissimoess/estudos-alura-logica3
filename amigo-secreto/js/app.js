let amigos = [];

function adicionar () {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    let amigosIncluidos = document.getElementById('lista-amigos');
    if (amigos.includes(nomeAmigo)) {
        alert('Amigo já incluído!');
    } else {
        amigos.push(nomeAmigo);
    }

    amigosIncluidos.textContent = `${amigos} `;

    // limpa campo
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (amigos.length < 5) {
        alert('Adicione mais amigos! O sorteio só é permitido com 5 ou mais amigos!');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}