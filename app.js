// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    // 1. Capturar o valor do campo de entrada
    let nome = document.getElementById('amigo').value;
    
    // 2. Validar a entrada
    if (nome == '') {
        // Exibe um alerta se o campo estiver vazio
        alert('Por favor, insira um nome.');
        return; // Sai da função para não adicionar um nome vazio
    }

    // 3. Adicionar o nome ao array de amigos
    amigos.push(nome);
    
    // 4. Limpar o campo de entrada
    document.getElementById('amigo').value = '';

    // 5. Pega o elemento da lista (ul) onde os amigos serão exibidos
    let lista = document.getElementById('listaAmigos');
    
    // 6. Limpa a lista antes de adicionar os nomes novamente
    lista.innerHTML = '';
    
    // 7. Percorre o array e adiciona cada amigo à lista na tela
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = amigos[i];           // Define o texto do item como o nome do amigo
        lista.appendChild(li);                // Adiciona o item à lista
    }
}

function sortearAmigo() {
    // 1. Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para poder sortear!');
        return; // Sai da função se a lista estiver vazia
    }

    // 2. Gerar um índice aleatório
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    
    // 3. Obter o nome sorteado
    let amigoSorteado = amigos[numeroSorteado];

    // 4. Mostrar o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3>O amigo sorteado é: ${amigoSorteado}</h3>`;
}