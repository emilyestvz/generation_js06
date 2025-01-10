// Vetores
// length: 

const leia = require('readline-sync');


let vetorString = [
    "Boxer",
    "Pastor Alemão",
    "Pinscher",
    "Husky Siberiano",
    "Corgi"
  ];

let vetorInt = new Array(5);

let vetorNum = [7, 5, 9, 1, 3, 2, 6, 4, 8, 10];

console.log(`\nVetor String: ${vetorString}`);
//for(let contador = 0; contador < vetorInt.length; contador++) {
//    vetorInt[contador] = leia.questionInt('Digite um numero: ');
//}

//console.log(`\nTamanho do vetor: ${vetorString.length}`);
console.table(vetorInt);

console.table(vetorString.sort()); 

console.table(vetorNum.sort((a, b) => a - b)); //para ordenar os dados