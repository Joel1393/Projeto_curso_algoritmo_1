
function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    contador = 0
    while (contador < limite){
        nome = prompt("digite o nome da pessoa: ")
        idade = prompt("digite a idade de " + nome + ": ")
        if ( idade > 18 )
            document.getElementById("paragrafo").innerText = nome + " Você é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " Você é menor de idade!"
        contador++
    }
}

