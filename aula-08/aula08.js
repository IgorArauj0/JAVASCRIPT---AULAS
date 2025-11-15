const lista = document.getElementById("list");

function adicionarItem() {
    //cria um novo elemento de "li" (item de lista) e o armazena na variável "novaLI"
    const novaLi = document.createElement("li");

    novaLi.textContent = "Novo item";
    //Define o texto do novo item, este texto será exibido no navegador como conteúdo da nova "li"

    lista.appendChild(novaLi);
    //adiciona o novo item (novaLi) como o último filho do elemento 'lista', isso faz com que o item seja exibido corretamente dentro da UL(lista). 
    //O appendChild acrescenta ao elemento selecionado, o que for declarado na sequência entre parênteses (appendChild(novaLi) ).
}

function removerItem() {
    
    const ultimoItem = lista.lastElementChild;
    //seleciona o último elemento filho dentro de 'lista' e o armazena na variável 'ultimo item'. 
    //lastElementChild retorna o último elemento diretamente contido em "lista", que é o último item da lista

    lista.removeChild(ultimoItem);
    //remove o último item (ultimoItem) de dentro de "lista".
    //removeChild é um método que remove o elemento filho especificado.
}