/*Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. 
Em seguida, faça o que se pede:
- Mostre na tela todas as cores adicionadas. 
- Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.*/



import readlinesync = require('readline-sync');


const cores: Array<string> = new Array<string>();
let cor: string;


console.log(`*-*`.repeat(20));
console.log(`\t\t CORES COM ARRAY`);
console.log(`*-*`.repeat(20));

const numeroCores = Number(readlinesync.question('Quantas cores deseja inserir? '));

for(let cor = 0; cor < numeroCores; cor++) {
    const numeroCores = readlinesync.question('\nDigite uma cor: ');
    cores.push(numeroCores); 
}


console.log(`*-*`.repeat(20));

// exibindo as cores
cores.forEach((cor, n) => {
    console.log(`Cores adicionadas ${n+1}: ${cor}`);
});

// ordenando as cores em ordem crescente
console.log('\nCores ordenadas em ordem crescente: ' + cores.sort());


