const doencas = [
    {
        nome: "Dengue",
        tipo: "infecciosas",
        tag: "virose",
        descricao: "Transmitida pelo mosquito Aedes aegypti. Sintomas incluem febre e dor no corpo."
    },
    {
        nome: "Tuberculose",
        tipo: "infecciosas",
        tag: "bacteriose",
        descricao: "Afeta os pulmões e é transmitida pelo ar."
    },
    {
        nome: "Diabetes",
        tipo: "nao",
        tag: "metabolica",
        descricao: "Doença relacionada à produção de insulina."
    },
    {
        nome: "Hipertensão",
        tipo: "nao",
        tag: "cardiovascular",
        descricao: "Pressão arterial elevada."
    }
    {
        nome: "Cancêr de próstata",
        tipo: "nao",
        tag: "cardiovascular",
        descricao: "É o tipo de câncer mais comum em homens com mais de 50 anos. Os sintomas podem incluir dificuldade para urinar, sensação de liberação incompleta da bexiga ao urinar e uma necessidade muito frequente de urinar."
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

    const pesquisa = document.getElementById("pesquisa").value.toLowerCase();
    const filtro = document.getElementById("filtro").value;

    doencas.forEach((d, index) => {

        if (categoriaAtual && d.tipo !== categoriaAtual) return;
        if (pesquisa && !d.nome.toLowerCase().includes(pesquisa)) return;
        if (filtro && d.tag !== filtro) return;

        const btn = document.createElement("button");
        btn.innerText = d.nome + " (" + d.tag + ")";
        btn.onclick = () => abrirModal(d);

        lista.appendChild(btn);
    });
}

function filtrar() {
    renderizar();
}

function abrirModal(doenca) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("titulo").innerText = doenca.nome;
    document.getElementById("descricao").innerText = doenca.descricao;
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}
