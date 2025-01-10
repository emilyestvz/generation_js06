// for

const leia = require('readline-sync');

console.log(`================ TABUADA =================`)

let numero = leia.questionInt("Digite um numero: ")

for(let contador = 1; contador <= 10; contador++) {
    console.log(`\n${numero} x ${contador} = ${numero * contador}`);
}