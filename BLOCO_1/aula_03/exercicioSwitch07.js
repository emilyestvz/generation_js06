/*Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. 
O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). 
A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!*/

const leia = require('readline-sync');

console.log(`\n*-*-*-*-*-*-*-*-*-*-* CALCULADORA *-*-*-*-*-*-*-*-*-*--*
    \n Digite a Operação desejada:
    \n\t1 -  SOMA
    \n\t2 -  SUBTRAÇÃO    
    \n\t3 -  MULTIPLICAÇÃO
    \n\t4 -  DIVSÃO
    \n\t5 - Sair
    `)

let operacao = leia.questionInt('Digite a operacao desejada: ');

switch (operacao) {
    case 1:
        let numero1 = leia.questionFloat("Digite o primeiro numero: ");
        let numero2 = leia.questionFloat("Digite o segundo numero: ");
        console.log(`A resultado da SOMA é: ${numero1 + numero2} ✨`);
        break;
    
    case 2:
        numero1 = leia.questionFloat("Digite o primeiro numero: ");
        numero2 = leia.questionFloat("Digite o segundo numero: ");
        console.log(`A resultado da SUBTRAÇÃO é: ${numero1 - numero2} ✨`);
        break;
        
    case 3:
        numero1 = leia.questionFloat("Digite o primeiro numero: ");
        numero2 = leia.questionFloat("Digite o segundo numero: ");
        console.log(`A resultado da MULTIPLICAÇÃO é: ${numero1 * numero2} ✨`);
        break;
        
    case 4:
        numero1 = leia.questionFloat("Digite o primeiro numero: ");
        numero2 = leia.questionFloat("Digite o segundo numero: ");
        console.log(`A resultado da MULTIPLICAÇÃO é: ${numero1 * numero2} ✨`);
        break;
    default:
        console.log("🔴 Operação inválida!");
        break;
}

