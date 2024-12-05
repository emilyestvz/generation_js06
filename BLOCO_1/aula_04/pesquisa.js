const leia = require('readline-sync');

let idade, esporte, futebol = 0, voleibolMaior18 = 0, basqueteMenor18 = 0, outros = 0, continua = 'S';

console.log("\n*-*-*-*-*-*-*-*-*-*-*-* PESQUISA ESPORTIVA *-*-*-*-*-*-*-*-*-*-*-*");


while(continua === 'S') {
    idade = leia.questionInt('Qual a sua idade? ')

    do{
        esporte = leia.questionInt('Qual o seu esporte favorito? (1. FUT / 2. VOLEI / 3. BASQT / 4. OUTROS) ');

            if(esporte < 1 || esporte > 4)
                console.log("Opção inválida! Tente novamente.");

    } while(esporte < 1 || esporte > 4)

    if(esporte === 1) {
        futebol++;
    }
    if(esporte === 2 && idade > 18) {
            voleibolMaior18++;
    }
    if(esporte === 3 && idade < 18) {
            basqueteMenor18++;
    }
    if(esporte === 4){
        outros++;
    }

    continua = leia.question('Deseja continuar? (S/N) ').toUpperCase(); //letras maisculas

}

console.log(`Total de pessoas que gostam de futebol: ${futebol}
        \nTotal de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleibolMaior18}
        \nTotal de pessoas que gostam de basquetebol e são menores de 18 anos: ${basqueteMenor18}
        \nTotal de pessoas que gostam de outros esportes: ${outros}
        \n*-*-*-*-*-*-*-*-*-*-*-* FIM DA PESQUISA *-*-*-*-*-*-*-*-*-*-*-*`);
    

 