/*escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("digite nota 01 do aluno: ")
   leia(nota01)
   escreval("digite nota 02 do aluno: ")
   leia(nota02)
   media <- (nota01 + nota02) / 2

   se media >= 5  entao
     escreval("Aprovado!",nome)
   senao
     escreval("Reprovado!",nome)
     fimse*/

     var nome, nota01, nota02;
     nome = prompt("Digite o nome do aluno:")
     nota01 = prompt("digite nota 01 do aluno:")
     nota02 = prompt("digite nota 02 do aluno:")

     media = (parseInt(nota01) + parseInt(nota02)) / 2

     if(media >= 50){
        alert("Aprovado!" + nome)
     }
    else
    alert   ("Reprovado!" + nome)

