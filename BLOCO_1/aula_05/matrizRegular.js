const leia = require('readline-sync');

//linhas da matriz
let matrizInt = new Array(3);

// Colunas da matriz
for (let indice = 0; indice < matrizInt.length; indice++){
    matrizInt[indice] = Array(3);
}

// Percorrendo a matriz e preenchendo dados
for(let indiceLinha = 0; indiceLinha < matrizInt.length; indiceLinha++) {
    for(let indiceColuna = 0; indiceColuna < matrizInt.length; indiceColuna++) {
        matrizInt[indiceLinha][indiceColuna] = leia.questionInt('Digite um numero: ');
    }
}

// visualizando a matriz e preenchendo dados
console.table(matrizInt);