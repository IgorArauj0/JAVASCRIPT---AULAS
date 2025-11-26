// "if" é uma estrutura usada para tomar decisões no código. Ele verifica uma condição (algo que pode ser verdadeiro ou falso) e executa um bloco de código caso essa codição seja verdadeira.

let idade = 17;

if (idade >= 18 ) { //Aqui, o JS pergunta: idade é maior ou igual a 18? Se sim, ele executa o que está dentro das { }. 
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}
//O "else" é usado quando queremos dizer: "Se a condição de if não for verdadeira, faça outra coisa". Se o "if" for falso, automaticamente o else é executado