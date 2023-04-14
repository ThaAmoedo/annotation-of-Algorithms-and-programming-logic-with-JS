/*
Capture 10 itens para compor a lista de 
um supermercado.

Após capturar os 10 itens, imprima-os, separando
por vírgula.

*/



let items= []; 

for(let item= 0; item < 10; item++) {

  let itemName = prompt ("Digite o item " + (item + 1))

  items[item] = itemName  //o item vale 0...dpois ele vale 1...e assim por diante 

}

alert(items)

// se eu colocasse alert(items[2]) eu estaria chmando a posição 2 para ver, se eu colocar alert(items[20]) vai dar undefined, pois não tem posição 20(não foi definido)





//Exemplo 1
/*
let items = [];

for(let item = 1; item <= 10; item++) {
  let itemName = prompt("Digite o item " + item )

  items[item - 1] = itemName
}

alert(items)
*/
// pois o meu arrey precisa começar apartir da posição 0






//Exemplo aleatório
/*
let itmsName; // coisas aqui fora são enxergadas lá dentro

for(let item= 0; item < 10; item++) {

  itmsName = prompt ("Digite o item" + (item + 1))     // coisas criadas aqui dentro não são enxergadas la fora 

}
*/