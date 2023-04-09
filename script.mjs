//let vetor = [];

let vetor = [
    {
        "nomeAluno": "Jjjjj",
        "ra": "123354",
        "idade": "30",
        "sexo": "Feminino",
        "media": "8",
        "resultado": "Aprovado"
    },
    {
        "nomeAluno": "cccccc",
        "ra": "0323",
        "idade": "30",
        "sexo": "Feminino",
        "media": "9",
        "resultado": "Aprovado"
    },
    {
        "nomeAluno": "lllll",
        "ra": "8465",
        "idade": "50",
        "sexo": "Masculino",
        "media": "6",
        "resultado": "Aprovado"
    },
    {
        "nomeAluno": "BBBBB",
        "ra": "23",
        "idade": "20",
        "sexo": "Masculino",
        "media": "0",
        "resultado": "Reprovado"
    },
    {
        "nomeAluno": "b",
        "ra": "23",
        "idade": "20",
        "sexo": "Masculino",
        "media": "0",
        "resultado": "Reprovado"
    },
    {
        "nomeAluno": "aaaaa",
        "ra": "23",
        "idade": "20",
        "sexo": "Masculino",
        "media": "0",
        "resultado": "Reprovado"
    }
]

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
            OrdenarAprovadoNomeCrescente();
            break;
        default:
            mostrarMenuSelecao();
            break;
    }

}

function selectionSort(vetor_teste, fnComp) {

    pass = 0, comps = 0, trocas = 0

    // Loop posSel vai até a PENÚLTIMA posição do vetor
    for (let posSel = 0; posSel < vetor_teste.length - 1; posSel++) {
        pass++

        let posMenor = posSel + 1

        // Loop para procurar o menor valor no restante do vetor
        for (let i = posMenor + 1; i < vetor_teste.length; i++) {
            // if(vetor[posMenor] > vetor[i]) posMenor = i
            if (fnComp(vetor_teste[posMenor], vetor_teste[i])) posMenor = i
            comps++
        }

        // Se o valor em posMenor for menor que o valor em posSel,
        // efetua a troca
        comps++
        // if(vetor[posSel] > vetor[posMenor]) {
        if (fnComp(vetor_teste[posSel], vetor_teste[posMenor])) {
            [vetor_teste[posSel], vetor_teste[posMenor]] = [vetor_teste[posMenor], vetor_teste[posSel]]
            trocas++
        }

    }

}

function mostrarCadastro() {
    document.getElementById('menu-selecao').style.display = 'none';
    document.getElementById('cadastrar').style.display = 'block';
}

function mostrarMenuSelecao() {
    document.getElementById('menu-selecao').style.display = 'block';
    document.getElementById('cadastrar').style.display = 'none';
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

            if (listaTemporaria[posSel].nomeAluno.toUpperCase() > listaTemporaria[posMenor].nomeAluno.toUpperCase()) {
                [listaTemporaria[posSel], listaTemporaria[posMenor]] = [listaTemporaria[posMenor], listaTemporaria[posSel]]
            }

        }

    }

    console.log(vetor);
    console.log(listaTemporaria);
    exibirResultado(listaTemporaria);
}

function ordenarRA() {
    vetor.sort(function (a, b) {
        if (a.ra < b.ra) { return -1; }
        if (a.ra > b.ra) { return 1; }
        return 0;
    });
    console.log(vetor);
}

function OrdenarAprovadoNomeCrescente() {

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
