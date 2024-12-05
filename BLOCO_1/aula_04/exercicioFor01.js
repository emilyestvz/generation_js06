// Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser MENOR do que o segundo número. 
// Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.

const leia = require('readline-sync');

console.log("\nOlá, seja bem vindo(a)!")

let numero1 = leia.questionInt('Digite um numero: ');
let numero2 = leia.questionInt('Digite outro numero: ');

// verificando intervalo válido
if(numero1 >= numero2) {
    console.log("\nIntervalo inválido! O primeiro número deve ser MENOR do que o segundo.");
    process.exit(0);
}

console.log(`\nNúmeros múltiplos de 3 e 5 no intervalo de ${numero1} a ${numero2}: `);

for(let n = numero1; n <= numero2; n++){

    if(n % 3 === 0 && n % 5 === 0)
        console.log(`${n} é múltiplo de ${numero1} e ${numero2}.`);

}