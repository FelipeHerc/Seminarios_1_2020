function clique_botao() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    alert("Hello World " + nome + "!!! " + "Você tem " + idade + " anos!");
}

function incrementaIdade() {
    var idade = document.getElementById("idade").value;
    idade ++;

    document.getElementById("idade").value = idade;
}

function decrementaIdade() {
    var idade = document.getElementById("idade").value;
    if (idade > 1){
        idade--;
    }

    document.getElementById("idade").value = idade;
}