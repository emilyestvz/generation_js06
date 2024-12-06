/*Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
- Todos os elementos da Diagonal Principal
- Todos os elementos da Diagonal Secundária
- A Soma de todos os elementos da Diagonal Principal
- A Soma de todos os elementos da Diagonal Secundária*/

const leia = require('readline-sync');

let matriz = new Array(3);

console.log(`\n================= MATRIZ =====================`);

// Coluna da matriz
for(let i = 0; i < matriz.length; i++) {
    matriz[i] = Array(3);
}

for(let iLinha = 0; iLinha < matriz.length; iLinha++) {
    for(let iColuna = 0; iColuna < matriz.length; iColuna++) {
        matriz[iLinha][iColuna] = leia.questionInt(`\nDigite o valor da posicao: `);
    }
}

for(let i = 0; i < iLinha; i++){
    soma += numero;

    somaP += matriz[i][i];
    elementosP += matriz [i][i];

    somaP += matriz[i][2 - i];
    elementosP[i] = matriz [i][2 - i];
}

console.log(`\n============================================`);

//visualizando a matriz e preenchendo dados
console.table(matriz);
console.log(`\nElementos da Diagonal Principal: ${elementosP}
    \nElementos da Diagonal Secundária: ${elementosP}
    \nSoma dos Elementos da Diagonal Principal: ${somaP}
    \nSoma dos Elementos da Diagonal Secundária: ${somaP}
    `)