const doencas = [

    {
        nome: "Dengue",
        tipo: "infecciosas",
        tag: "virose",

        descricao:
        "A dengue é transmitida pelo mosquito Aedes aegypti. Seus sintomas incluem febre alta, dores musculares e dor atrás dos olhos."
    },

    {
        nome: "Tuberculose",
        tipo: "infecciosas",
        tag: "bacteriose",

        descricao:
        "A tuberculose é causada pela bactéria Mycobacterium tuberculosis e afeta principalmente os pulmões."
    },

    {
        nome: "Diabetes",
        tipo: "nao",
        tag: "metabolica",

        descricao:
        "Doença caracterizada pelo aumento dos níveis de glicose no sangue."
    },

    {
        nome: "Hipertensão",
        tipo: "nao",
        tag: "cardiovascular",

        descricao:
        "Condição em que a pressão arterial permanece elevada por longos períodos."
    }

];

let categoriaAtual = "";

function mostrarCategoria(tipo) {

    categoriaAtual = tipo;

    renderizar();
}

function renderizar() {

    const lista = document.getElementById("lista-doencas");

    lista.innerHTML = "";

    const pesquisa =
        document
        .getElementById("pesquisa")
        .value
        .toLowerCase();

    const filtro =
        document
        .getElementById("filtro")
        .value;

    doencas.forEach(doenca => {

        if (
            categoriaAtual &&
            doenca.tipo !== categoriaAtual
        ) return;

        if (
            pesquisa &&
            !doenca.nome
                .toLowerCase()
                .includes(pesquisa)
        ) return;

        if (
            filtro &&
            doenca.tag !== filtro
        ) return;

        const btn =
            document.createElement("button");

        btn.innerText = doenca.nome;

        btn.onclick = () => {

            document
                .getElementById("titulo")
                .innerText = doenca.nome;

            document
                .getElementById("descricao")
                .innerText = doenca.descricao;

            document
                .getElementById("tag-doenca")
                .innerHTML =
                `<span class="tag">${doenca.tag}</span>`;

            const detalhes =
                document.getElementById("detalhes");

            detalhes.style.display = "block";

            detalhes.scrollIntoView({
                behavior: "smooth"
            });
        };

        lista.appendChild(btn);

    });
}

function filtrar() {
    renderizar();
}
