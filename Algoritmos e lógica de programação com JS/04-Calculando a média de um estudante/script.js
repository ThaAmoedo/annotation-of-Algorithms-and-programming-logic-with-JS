/*
Solicitar o nome do aluno e as 3 notas
do bimestre, calcular a média daquele aluno

 -Se o aluno passou no bimestre, dar os parabéns.

 -Se o aluno não passou no bimestre, motivar o aluno a
  dar o seu melhor na prova de recuperação.

      -- Em ambos os casos mostre uma mensagem com nome do aluno e a nota --
*/

// como eu fiz
let nome = prompt ("Olá, qual seu nome?" );
let n1 = Number(prompt ("Olá " + nome + ', informe a sua primeira nota: ')) ;
let n2 = Number(prompt ( 'Informe sua segunda nota: ')) ;
let n3 = Number(prompt ( 'Agora informe a sua terceira nota: ')) ;

let soma = (n1 + n2 + n3) / 3 ;  


let result = soma > 6; // > maior que


 soma= soma.toFixed(2) // quero ver duas casas decimais

if (result) {
    alert("Parabéns, " + nome + "! Sua média foi: " + soma)
    } 
    else if (soma < 3) {
        alert("Reprovado, infelizmente :( ")
      } else {
        alert(nome + " não desista, ainda tem a prova de recuperação! Sua média foi: " +  soma)
      } //entra no meio de 6 e 3
      
      
      

//Como o prof fez
/*
let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average)
}
*/




//Exemplo
/*
let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6


if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average.toFixed(2))
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average.toFixed(2))
}
*/
// se eu colocar assim fica ruim na manutenção, então não repita dados (tente não repitir)