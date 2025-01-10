// O do while roda o programa e depois ele checa se a condição é valida, por isso ele roda uma vez independente da condição, mesmo q seja falsa

const leia = require('readline-sync');

console.log(`================ TABUADA =================`);

let numero = leia.questionInt("Digite um numero: ");
let contador = 1;

do {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++; // pos incremento para sair do contador 1

} while (contador <= 10)