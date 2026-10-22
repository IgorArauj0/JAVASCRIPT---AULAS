//getAttribute - obter valor do atributo (valor da linha)
//setAttribute - definir ou modificar o valor da linha

function changeImage() {
    const img = document.getElementById("myImage");
    const coletarSrc = img.getAttribute("src");

    if (coletarSrc === "imagem1.png") {
        img.setAttribute("src", "imagem2.png");
        img.setAttribute("alt", "Segunda img GitHub");
    } else { //caso contrário, realize o processo inverso
        img.setAttribute("src", "imagem1.png")
        img.setAttribute("alt", "Primeira img GitHub");
    }
}