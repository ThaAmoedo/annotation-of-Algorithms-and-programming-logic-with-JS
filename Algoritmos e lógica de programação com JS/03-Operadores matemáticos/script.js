/*
Capturar 2 números e fazer as operações de
soma, subtração, multiplicação, divisão e 
resto da divisão

 E para cada operação, mostrar um alerta
  com o resultado.

  [] Operadores matemáticos

  "Não existe a solução perfeita...existe a que resolve"
*/


// O jeito que eu fiz:
alert("Bora lá!");

let numberUm = Number(prompt ("Escolha um número"));
let numberDois = Number(prompt ("Escolha mais um número"));


let soma = numberUm + numberDois;
let subtração = numberUm - numberDois; 
let multiplicação = numberUm * numberDois ; 
let divisão = numberUm / numberDois ; 
let restoDivisão = numberUm % numberDois ; 


alert ("A SOMA dos números que vocês escolheu é: " + soma);
alert ("A SUBTRAÇÃO dos números que vocês escolheu é: " + subtração);
alert ("A MULTIPLICAÇÃO dos números que vocês escolheu é: " + multiplicação);
alert ("A DIVISÃO dos números que vocês escolheu é: " + divisão);
alert ("O RESTO DA DIVISÃO dos números que vocês escolheu é: " + restoDivisão);







// Jeito que o professor fez:
/*
let firstNumber = prompt('Digite o primeiro número') //se em algum momento eu for precisar reatribuir, uso let
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber  // coloquei contante pois não vou alterar o valor dela depois
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
*/