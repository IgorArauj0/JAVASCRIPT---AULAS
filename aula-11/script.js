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
}