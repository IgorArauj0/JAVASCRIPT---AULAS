const selectCurso = document.querySelector("#curso");
const resultado = document.querySelector("#resultado");

selectCurso.addEventListener("change", () => {
    let descricao = "";
    let cargaHoraria = "";

    switch (selectCurso.value) {
        case "html":
            descricao = "Aprenda a estruturar páginas para a web.";
            cargaHoraria = "40 horas";
            break;
        case "javascript":
            descricao = "Crie interatividade e funcionalidades para páginas web.";
            cargaHoraria = "60 horas";
            break;
        case "python":
            descricao = "Aprenda lógica de programação e automação com Python.";
            cargaHoraria = "80 horas";
            break;
        case "css":
            descricao = "Estilize páginas e organize seus elementos visuais.";
            cargaHoraria = "40 horas";
            break;
        case "java":
            descricao = "Desenvolva aplicações usando a linguagem Java.";
            cargaHoraria = "80 horas";
            break;
        default:
            resultado.hidden = true;
            resultado.textContent = "";
            return;
    }

    resultado.textContent = `${descricao} Carga horária: ${cargaHoraria}.`;
    resultado.hidden = false;
});
