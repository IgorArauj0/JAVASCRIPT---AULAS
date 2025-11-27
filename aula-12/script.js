// 1. Modo claro/escuro

// Captura o botão que tem o ID "btnTema" no HTML
let botaoTema = document.getElementById("btnTema");

// Pega o ícone que está dentro desse botão (<i></i>)
let icone = botaoTema.querySelector("i");

// Adiciona um "ouvinte" de evento ao botão.
// Esse evento será ativado quando o botão for clicado.
botaoTema.addEventListener("click", () => {

    // Alterna a classe "dark" no elemento <body>.
    // Se "dark" não existir, ele adiciona. Se existir, ele remove.
    document.body.classList.toggle("dark");

    // Verifica se o body possui a classe "dark" neste momento
    if (document.body.classList.contains("dark")) {

        // Se estiver no modo escuro, trocar o ícone para o sol (fa-sun)
        icone.classList.remove("fa-moon");  // remove a lua
        icone.classList.add("fa-sun");      // adiciona o sol

    } else {

        // Se estiver no modo claro, trocar o ícone para a lua (fa-moon)
        icone.classList.remove("fa-sun");   // remove o sol
        icone.classList.add("fa-moon");     // adiciona a lua
    }
});



// // 2. Menu mobile
// let botaoMenu = document.getElementById("btnMenu");
// let menuMobile = document.getElementById("menuMobile");

// botaoMenu.addEventListener("click", () => {
//     menuMobile.style.display =
//         menuMobile.style.display === "block" ? "none" : "block";
// });


// // 3. Card interativo
// let card = document.getElementById("card");

// card.addEventListener("mouseenter", () => {
//     card.style.transform = "scale(1.1)";
//     card.style.background = "#4CAF50";
//     card.textContent = "Você passou o mouse!";
// });

// card.addEventListener("mouseleave", () => {
//     card.style.transform = "scale(1)";
//     card.style.background = "white";
//     card.textContent = "Passe o mouse aqui!";
// });
