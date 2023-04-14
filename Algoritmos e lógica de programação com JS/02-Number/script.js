/*
Solicite 2 números, faça a soma deles 
e apresente o resultado final ao usuário


[] Tipo de dado: Number
[] typeof (para indentificar o tipo de dado que estou usando)
[] Operador matemático
[] Manipulação de dados
  [] type conversion (type casting)
  [] Number()  (função contrutora para converter um dado para número)
  [] String()  (função contrutora para converter um dado para uma string)
[] Ordem de precedência (usei os parenteses para dar precedência, 
fazendo com que no exomplo abaixo ele calcule a soma primeiro)
[] Group operator

*/



//como eu fiz:

alert("Vamos somar dois número, bora lá!");
let numberUm = Number(prompt ("Escolha um número"));
let numberDois = Number(prompt ("Escolha mais um número"));
let resultado = numberUm + numberDois;
alert ("A soma dos números que vocês escolheu é: " + resultado);

//eu poderia usar também "Number.parseInt"








//Exemplo 1
/*
alert("Vamos somar dois número, bora lá!");
let numberUm = prompt ("Escolha um número");
let numberDois = prompt ("Escolha mais um número");
alert (  "A soma dos números que vocês escolheu é: " + (Number(numberUm) + Number(numberDois))  ); 
*/
 // usei o Group operator pra fechar os Number para que não ocorra a concatenação




 
//Exemplo 2
/*
alert("Vamos somar dois número, bora lá!");
let numberUm = prompt ("Escolha um número");
let numberDois = prompt ("Escolha mais um número");
alert (  "A soma dos números que vocês escolheu é: " + (Number(numberUm) + Number(numberDois))  ); 
*/
 // usei o Group operator pra fechar os Number para que não ocorra a concatenação





//Exemplo 3, usando Ordem de precedência e Group operator
/*
alert("Vamos somar dois número, bora lá!");
let numberUm = prompt ("Escolha um número");
let numberDois = prompt ("Escolha mais um número");
alert ( (Number(numberUm) + Number(numberDois)) / 2);
*/



//Exemplo Final
/*
alert("Vamos somar dois número, bora lá!");
let numberUm = prompt ("Escolha um número");
let numberDois = prompt ("Escolha mais um número");
let result = Number(numberUm) + Number(numberDois);
alert ("A soma dos números que vocês escolheu é: " + result ); 
*/

