function toggleTexto(index) {
    const textos = document.querySelectorAll('.texto');

    if (textos[index].style.display === "block") {
        textos[index].style.display = "none";
    } else {
        textos[index].style.display = "block";
    }
}
