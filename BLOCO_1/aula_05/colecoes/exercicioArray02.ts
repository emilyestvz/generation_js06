/*Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. 
O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, 
exiba na tela a posição deste número na Collection. 
Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado! */

import readlinesync = require('readline-sync');

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);


console.log(`*=*`.repeat(20));
console.log(`\t\t COLLECTION NUMBER`);
console.log(`*=*`.repeat(20));


let numProcurar: number = readlinesync.questionInt('\nDigite o numero que deseja encontrar: ');

if(numeros.includes(numProcurar)){
    console.log(`\nO número ${numProcurar} está localizado na posição: ${numeros.indexOf(numProcurar)}`)
} 
else if(numProcurar <=0 || numProcurar > 10 ){
    console.log(`\nO número ${numProcurar} não foi encontrado!`)
}