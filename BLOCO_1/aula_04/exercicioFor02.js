// Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares

const leia = require('readline-sync');

let pares = 0, impares = 0;

for (let numero = 0; numero < 10; numero++) {
    
    numeroDigitado = leia.questionInt('Digite o ' + (numero + 1) + ' numero: ');
    
    if (numeroDigitado % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }
}

console.log(`\nTotal de número pares: ${pares}
    \nTotal de impares: ${impares}`);
