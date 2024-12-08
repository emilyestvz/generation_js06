/*Escreva um programa para criar uma Collection Set do tipo number. 
O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. 
Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set.  */

import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>();


console.log(`#=#`.repeat(20));
console.log(`\t\t COLLECTION SET DE NÚMEROS`);
console.log(`#=#`.repeat(20));


for (let index = 1; index <= 10; index++) {
    const valores = readlinesync.questionInt(`\nDigite um numero inteiro: `);

    numeros.add(valores);
}


// convertendo em array para facilitar a ordenação
const numOrdenado = Array.from(numeros).sort((a, b) => a - b);

// listagem em ordem crescente
console.log(`#=#`.repeat(20));
console.log(`\nLista de dados em ordem crescente: ${numOrdenado.join(", ")}`);

console.log(`#=#`.repeat(20));
numOrdenado.forEach((numero) => {
    console.log(`\nLista de dados não repetidos: ${numero}`);
});

