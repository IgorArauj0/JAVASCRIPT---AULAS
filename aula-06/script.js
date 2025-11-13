//getAttribute - obter valor do atributo (valor da linha).
//setAttribute - definir ou modificar o valor

function changeImage() {
    const img = document.getElementById("myImage"); //Aqui conseguimos armazenar na variável "img" o elemento IMG do HTML.

    const coletarSrc = img.getAttribute("src"); //Aqui estamos coletando o valor do atributo src, ou seja, ele já está olhando para a imagem que se encontra lá no HTML

    if (coletarSrc === "imagem1.png") { //Se a origem atual da imagem for igual a "imagem1.png"
        img.setAttribute("src", "imagem2.png"); //Usando o SetAttribute vamos modificar o valor dela, através do SRC e especificando a outra img.
        img.setAttribute("alt", "Segunda imagem do Github");

    } else { //Caso contrário realizar o processo inverso.
        img.setAttribute("src", "imagem1.png");
        img.setAttribute("alt", "Primeira imagem do Github");
    }
}