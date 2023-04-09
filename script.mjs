let vetor = [];

function selecionarOpcao() {

    let option = document.getElementById("selecao").value;

    switch (option) {
        case 'cadastro':
            mostrarCadastro();
            break;
        case 'nomeCrescente':
            ordenarPorNomeAluno();
            break;
        case 'raDecrescente':
            ordenarRA();
            break;
        case 'aprovadosNomeCrescente':
            ordenarAprovadoNomeCrescente();
            break;
        default:
            mostrarMenuSelecao();
            break;
    }

}

function mostrarCadastro() {
    document.getElementById('menu-selecao').style.display = 'none';
    document.getElementById('cadastrar').style.display = 'block';
    document.getElementById('resultado-lista').style.display = 'none';
}

function mostrarMenuSelecao() {
    document.getElementById('menu-selecao').style.display = 'block';
    document.getElementById('cadastrar').style.display = 'none';
    document.getElementById('resultado-lista').style.display = 'block';
}


function novoCadastro() {

    let objCadastro = {
        nomeAluno: document.getElementById("nome").value,
        ra: document.getElementById("ra").value,
        idade: document.getElementById("idade").value,
        sexo: document.querySelector('input[name="sexo"]:checked').value,
        media: document.getElementById("media").value,
        resultado: document.querySelector('input[name="resultado"]:checked').value
    }

    vetor.push(objCadastro)
    console.log(vetor);

    limpaTela()

}

function limpaTela() {
    document.getElementById("nome").value = "";
    document.getElementById("ra").value = "";
    document.getElementById("idade").value = "";
    limpaRadio("sexo");
    document.getElementById("media").value = "";
    limpaRadio("resultado")
}

function limpaRadio(elementName) {
    let radio = document.getElementsByName(elementName);
    for (let i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }
}

function ordenarPorNomeAluno() {

    let listaTemporaria = [...vetor];

    for (let posSel = 0; posSel < listaTemporaria.length - 1; posSel++) {

        let posMenor = posSel + 1

        for (let i = posMenor + 1; i < listaTemporaria.length; i++) {

            if (listaTemporaria[posMenor].nomeAluno.toUpperCase() > listaTemporaria[i].nomeAluno.toUpperCase()) {
                posMenor = i
            }

        }

        if (listaTemporaria[posSel].nomeAluno.toUpperCase() > listaTemporaria[posMenor].nomeAluno.toUpperCase()) {
            [listaTemporaria[posSel], listaTemporaria[posMenor]] = [listaTemporaria[posMenor], listaTemporaria[posSel]]
        }

    }

    console.log(vetor);
    console.log(listaTemporaria);
    exibirResultado(listaTemporaria);
}

function ordenarRA() {

    let ordenadoRa = [...vetor];

    for (let posSel = 0; posSel < ordenadoRa.length - 1; posSel++) {

        let posMaior = posSel + 1

        for (let i = posMaior + 1; i < ordenadoRa.length; i++) {

            if (ordenadoRa[posMaior].ra < ordenadoRa[i].ra) {
                posMaior = i
            }

        }

        if (ordenadoRa[posSel].ra < ordenadoRa[posMaior].ra) {
            [ordenadoRa[posSel], ordenadoRa[posMaior]] = [ordenadoRa[posMaior], ordenadoRa[posSel]]
        }

    }

    console.log(vetor);
    console.log(ordenadoRa);
    exibirResultado(ordenadoRa);

}

function ordenarAprovadoNomeCrescente() {

    // Filtra apenas os alunos aprovados
    const aprovados = vetor.filter(aluno => aluno.resultado === 'Aprovado');

    // Ordena o vetor filtrado pelo nome do aluno em ordem crescente
    aprovados.sort((a, b) => a.nomeAluno.localeCompare(b.nomeAluno));

    // Exibe os alunos aprovados ordenados
    console.log(aprovados);
    exibirResultado(aprovados);
}

function exibirResultado(listaResultado) {

    let relatorioDescricao = '';

    for (let i = 0; i < listaResultado.length; i++) {
        relatorioDescricao += `
        <tr>
            <td>${listaResultado[i].nomeAluno}</td>
            <td>${listaResultado[i].ra}</td>
            <td>${listaResultado[i].idade}</td>
            <td>${listaResultado[i].sexo}</td>
            <td>${listaResultado[i].media}</td>
            <td>${listaResultado[i].resultado}</td>
        </tr>
        `;
    }

    let relatorio = `
    <table>
        <tr>
            <th>Nome do Aluno</th>
            <th>RA</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>Média</th>
            <th>Resultado</th>
        </tr>
        ${relatorioDescricao}
    </table>
    `;

    document.getElementById("resultado-lista").innerHTML = relatorio;
}

function sair(){
    document.getElementById('tela-principal').style.display = 'none';
    document.getElementById('resultado-lista').style.display = 'none';
    document.getElementById('ecerrar-programa').style.display = 'block';
}