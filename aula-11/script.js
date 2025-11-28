//Function = Utilizada para executar um bloco de código e ações determinadas, agindo literalmente como uma "função" pré-determinada.

let meuElemento = document.getElementById("meuElemento");
//Aqui estamos criando uma variável para recuperar o id da Div declarada no HTML.

function tornarCirculo(){
    meuElemento.classList.add("circle");
    meuElemento.classList.remove("square");
}

function tornarQuadrado(){
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}

function altenarFormato(){
    meuElemento.classList.toggle("circle");
    meuElemento.classList.toggle("square");
    //O toggle no JavaScript serve para alternar uma classe em um elemento.
    //Ele verifica automaticamente: Se a classe existe, ele remove. Se não existe, ele adiciona.
   // Ele funciona como um interruptor: liga/desliga ou mostra/esconde, ativa/desativa, tudo com uma única linha de código
}

function verificarClasse() {
    if(meuElemento.classList.contains("circle")) { //verificando qual classe está ativa e adicionando um text para identificação
        console.log("O elemento possui a classe Circle");
    } else { //O caso contrário será quando a classe square estará ativa.
        console.log("O elemento possui a classe square");
    }
}