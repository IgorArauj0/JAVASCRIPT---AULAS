// Aula 11 - Manipulação do DOM
// O DOM (Document Object Model) é a representação da página em JavaScript.
// Com ele, conseguimos:
// - selecionar elementos HTML
// - alterar textos
// - mudar estilos
// - criar novos elementos
// - remover elementos
// - mostrar ou esconder conteúdo

// 1) Selecionando elementos da página
// getElementById busca um elemento pelo id definido no HTML.
const mensagem = document.getElementById('mensagem');
const btnMudarTexto = document.getElementById('btn-mudar-texto');
const textoEstilo = document.getElementById('texto-estilo');
const btnMudarEstilo = document.getElementById('btn-mudar-estilo');
const listaExemplo = document.getElementById('lista-exemplo');
const inputNovaTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const conteudoEscondido = document.getElementById('conteudo-escondido');
const btnToggle = document.getElementById('btn-toggle');

// 2) Alterando texto de um elemento
// A propriedade textContent altera o texto dentro do elemento.
btnMudarTexto.addEventListener('click', function () {
    mensagem.textContent = 'Texto alterado com sucesso!';
});

// 3) Alterando estilo
// style é usado para alterar CSS inline.
btnMudarEstilo.addEventListener('click', function () {
    textoEstilo.style.color = 'green';
    textoEstilo.style.fontSize = '1.3rem';
});

// 4) Adicionando elementos dinamicamente
// createElement cria um novo nó HTML.
btnAdicionar.addEventListener('click', function () {
    const valor = inputNovaTarefa.value.trim();

    // Evita adicionar campo vazio.
    if (valor === '') {
        alert('Digite algo antes de adicionar!');
        return;
    }

    // Cria um novo item da lista
    const novoItem = document.createElement('li');
    novoItem.textContent = valor;

    // Adiciona o item à lista
    listaExemplo.appendChild(novoItem);

    // Limpa o campo de input
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
});

// 5) Mostrar ou esconder conteúdo
// classList.toggle adiciona ou remove uma classe CSS.
btnToggle.addEventListener('click', function () {
    conteudoEscondido.classList.toggle('hidden');
    conteudoEscondido.classList.toggle('visible');
});

// Observações importantes:
// - document.getElementById() seleciona por id
// - addEventListener() escuta eventos do usuário
// - textContent altera texto
// - style altera CSS diretamente
// - createElement() cria novos elementos
// - appendChild() adiciona o elemento criado ao HTML
// - classList.toggle() mostra ou oculta uma classe

// Prática sugerida para os alunos:
// Tente trocar textContent por innerHTML e observe a diferença.
// Crie um botão para remover o último item da lista.
// Altere o background de um elemento usando classList.
