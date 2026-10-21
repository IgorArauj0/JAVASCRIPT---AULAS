// Aula 08 - DOM em JavaScript
// Objetivo: aprender a manipular o DOM com uma lista de tarefas.
// Conceitos básicos que vamos usar:
// 1. Seleção de elementos com document.getElementById
// 2. Captura de eventos com addEventListener
// 3. Validação de campos vazios
// 4. Criação de elementos com createElement
// 5. Inserção de itens na página com appendChild
// 6. Remoção de elementos com remove
// 7. Alteração de texto com textContent

// Selecionamos os elementos da página que vamos manipular.
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const message = document.getElementById('message');

// Função para mostrar mensagens de sucesso ou erro.
function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

// Função para verificar se a lista está vazia.
function updateEmptyState() {
    const tasks = taskList.querySelectorAll('li:not(.empty-state)');
    const emptyItem = taskList.querySelector('.empty-state');

    if (tasks.length === 0) {
        // Se não houver tarefas, mostra a mensagem de lista vazia.
        if (!emptyItem) {
            const item = document.createElement('li');
            item.classList.add('empty-state');
            item.textContent = 'Nenhuma tarefa adicionada.';
            taskList.appendChild(item);
        }
    } else if (emptyItem) {
        // Se houver tarefa, remove a mensagem de lista vazia.
        emptyItem.remove();
    }
}

// Função para criar uma tarefa na tela.
function createTaskItem(taskText) {
    // Cria o item da lista (li)
    const item = document.createElement('li');

    // Cria o texto da tarefa (span)
    const text = document.createElement('span');
    text.classList.add('task-text');
    text.textContent = taskText;

    // Cria o botão de remover
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remover';
    removeButton.classList.add('remove-btn');

    // Quando clicar no botão, remove a tarefa da lista.
    removeButton.addEventListener('click', () => {
        item.remove();
        updateEmptyState();
        showMessage('Tarefa removida com sucesso!', 'success');
    });

    // Organiza os elementos dentro do li
    item.appendChild(text);
    item.appendChild(removeButton);

    return item;
}

// Escuta o envio do formulário.
taskForm.addEventListener('submit', function (event) {
    // Evita que a página recarregue ao enviar o formulário.
    event.preventDefault();

    // Pega o texto digitado e remove espaços extras.
    const taskText = taskInput.value.trim();

    // Verifica se o campo está vazio.
    if (taskText === '') {
        showMessage('⚠️ Digite uma tarefa antes de adicionar!', 'error');
        taskInput.focus();
        return;
    }

    const emptyItem = taskList.querySelector('.empty-state');
    if (emptyItem) {
        emptyItem.remove();
    }

    const newTask = createTaskItem(taskText);
    taskList.appendChild(newTask);

    // Limpa o campo para a próxima tarefa.
    taskInput.value = '';
    taskInput.focus();

    showMessage('✅ Tarefa adicionada com sucesso!', 'success');
});

// Estado inicial da página.
updateEmptyState();
