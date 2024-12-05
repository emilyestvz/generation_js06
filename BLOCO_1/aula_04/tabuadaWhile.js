// O while ele checa a condição primeiro, depois ele roda o programa


const leia = require('readline-sync');

console.log(`================ TABUADA =================`);

let numero = leia.questionInt("Digite um numero: ");
let contador = 1;

while(contador <= 10) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++; // pos incremento para sair do contador 1

}