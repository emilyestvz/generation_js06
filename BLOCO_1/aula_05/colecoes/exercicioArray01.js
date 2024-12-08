"use strict";
/*Escreva um programa para criar uma Collection Array de Objetos do tipo string.
O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array.
Em seguida, faça o que se pede:
- Mostre na tela todas as cores adicionadas.
- Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.*/
Object.defineProperty(exports, "__esModule", { value: true });
const readlinesync = require("readline-sync");
const cores = new Array();
console.log(`*-*`.repeat(20));
console.log(`\t\t CORES COM ARRAY`);
console.log(`*-*`.repeat(20));
for (let cor = 0; cor < cores.length; cor++) {
    cores[cor] = readlinesync.question(`Digite uma cor: `);
}
