let vetor = []

function selecionarOpcao() {

    let option = document.getElementById("selecao").value;

    if (option === 'cadastro') {
        mostrarCadastro();
    } else {
        mostrarMenuSelecao();
    }
    if (option === 'nomeCrescente'){
        ordenarPorNomeAluno();
     }
     if (option === 'raDecrescente'){
         ordenarRA();
 
     }
     if (option === 'aprovadosNomeCrescente')
     OrdenarAprovadoNomeCrescente()
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
    for (let i = 0; i < radio.length; i++){
        radio[i].checked = false;
    }
}

function ordenarPorNomeAluno() {
    vetor.sort(function(a, b) {
      if(a.nomeAluno < b.nomeAluno) { return -1; }
      if(a.nomeAluno > b.nomeAluno) { return 1; }
      return 0;
    });
    console.log(vetor);
  }

  function ordenarRA() {
    vetor.sort(function(a, b) {
      if(a.ra < b.ra) { return -1; }
      if(a.ra > b.ra) { return 1; }
      return 0;
    });
    console.log(vetor);
  }

function OrdenarAprovadoNomeCrescente(){

        // Filtra apenas os alunos aprovados
        const aprovados = vetor.filter(aluno => aluno.resultado === 'Aprovado');
      
        // Ordena o vetor filtrado pelo nome do aluno em ordem crescente
        aprovados.sort((a, b) => a.nomeAluno.localeCompare(b.nomeAluno));
      
        // Exibe os alunos aprovados ordenados
        console.log(aprovados);
      }