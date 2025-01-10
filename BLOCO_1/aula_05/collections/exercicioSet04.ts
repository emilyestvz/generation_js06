/* Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. 
O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado na Colection Set, exiba na tela a mensagem: 
O Número NN foi encontrado! Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);


console.log(`*=*`.repeat(20));
console.log(`\t\t COLLECTION SET NUMBER`);
console.log(`*=*`.repeat(20));


let numProcurar = readlinesync.questionInt('\nDigite o numero que deseja encontrar: ');

if(numeros.has(numProcurar)){
        
    numeros.add(numProcurar);
    console.log(`O número ${numProcurar} foi encontrado!`);
} else if (numProcurar === 0){
    console.log('Tente novamente.');
} else {
    console.log(`O número ${numProcurar} não foi encontrado!`);
}



