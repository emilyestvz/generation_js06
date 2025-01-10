/*Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
- Todos os elementos da Diagonal Principal
- Todos os elementos da Diagonal Secundária
- A Soma de todos os elementos da Diagonal Principal
- A Soma de todos os elementos da Diagonal Secundária*/

const leia = require("readline-sync");

let matriz = new Array(3);

console.log(`====================== MATRIZ ============================`)


for (let indice = 0; indice < 3; indice++) {
    matriz[indice] = new Array(3);
}

let diagonalP = "";
let diagonalS = "";
let somaDiagonalP = 0;
let somaDiagonalS = 0;

// iterar pela matriz
for (let indiceLinha = 0; indiceLinha < 3; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < 3; indiceColuna++) {
        matriz[indiceLinha][indiceColuna] = leia.questionInt('Digite um numero: ');

        // elementos da diagonal principal (sendo linha == coluna)
        if (indiceLinha === indiceColuna) {
            diagonalP += matriz[indiceLinha][indiceColuna] + " ";
            somaDiagonalP += matriz[indiceLinha][indiceColuna];
        }

        // elementos da diagonal secundária sendo linha + coluna == tamanho da matriz - 1
        if (indiceLinha + indiceColuna === matriz.length - 1) {
            
            // garantia
            if (matriz[indiceLinha] && matriz[indiceLinha][indiceColuna]) {
                diagonalS += matriz[indiceLinha][indiceColuna] + " ";
                somaDiagonalS += matriz[indiceLinha][indiceColuna];
            }
        }
    }
}

// Exibir os resultados
console.log(`============================================================`)
console.log("Elementos da Diagonal Principal: " + diagonalP);
console.log("Elementos da Diagonal Secundária: " + diagonalS);
console.log("Soma da Diagonal Principal: " + somaDiagonalP);
console.log("Soma da Diagonal Secundária: " + somaDiagonalS);