/*Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), 
o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). 
A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.*/

const leia = require("readline-sync");


console.log
    (`========================= ADMIN =============================
    \nCÓDIGO DO CARGO   |     CARGO       |   PERCENTUAL DO REAJUSTE
    \n        1         |     Gerente     |   10%
    \n        2         |    Vendedor     |    7%
    \n        3         |    Supervisor   |    9%
    \n        4         |    Motorista    |    6%
    \n        5         |    Estoquista   |    5%
    \n        6         |   Técnico de TI |    8%
    \n===============================================================
    `);


let nomeColaborador = leia.question("\nDigite o nome do colaborador(a): ");
let codigoCargo = leia.questionInt("Digite o codigo do cargo (1 a 6): ");
let salario = parseFloat(leia.question("Digite o salario: "));


//Valores dos reajustes para a fórmula, em ordem: 0.1, 0.07, 0.09, 0.06, 0.05, 0.08

switch (codigoCargo) {
    case 1:
        console.log(`\nCOLABORADOR(A): ${nomeColaborador}   |   CARGO:   Gerente      |    Salário com reajuste: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(salario + (0.1 * salario))}`);
        break;
    case 2:
        console.log(`\nCOLABORADOR(A): ${nomeColaborador}   |   CARGO:   Vendedor     |    Salário com reajuste: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(salario + (0.07 * salario))}`);
        break;
    case 3:
        console.log(`\nCOLABORADOR(A): ${nomeColaborador}   |   CARGO:   Supervisor   |    Salário com reajuste: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(salario + (0.09 * salario))}`);
        break;
    case 4:
        console.log(`\nCOLABORADOR(A): ${nomeColaborador}   |   CARGO:   Motorista    |    Salário com reajuste: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(salario + (0.06 * salario))}`);
        break;
    case 5:
        console.log(`\nCOLABORADOR(A): ${nomeColaborador}   |   CARGO:   Estoquista   |    Salário com reajuste: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(salario + (0.05 * salario))}`);
        break;
    case 6:
        console.log(`\nCOLABORADOR(A): ${nomeColaborador}   |   CARGO:   Téc. de TI   |    Salário com reajuste: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(salario + (0.08 * salario))}`);
        break;
    default:
        console.log("Código de cargo inválido!");
        break;
}