let amigos = [];

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let nome = document.getElementById('amigo').value;
    
    // Validar a entrada
    if (nome == '') {
        // Exibe um alerta se o campo estiver vazio
        alert('Por favor, insira um nome.');
        return; // Sai da função para não adicionar um nome vazio
    }

    // Adicionar o nome ao array de amigos
    amigos.push(nome);
    
    // Limpar o campo de entrada
    document.getElementById('amigo').value = '';

    // Pegar o elemento da lista (ul) onde os amigos serão exibidos
    let lista = document.getElementById('listaAmigos');
    
    // Limpar a lista antes de adicionar os nomes novamente
    lista.innerHTML = '';
    
    // Percorrer o array e adiciona cada amigo à lista na tela
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i];           
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para poder sortear!');
        return;
    }

    // Gerar um índice aleatório
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    
    // Obter o nome sorteado
    let amigoSorteado = amigos[numeroSorteado];

    // Mostrar o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3>O amigo sorteado é: ${amigoSorteado}</h3>`;
}