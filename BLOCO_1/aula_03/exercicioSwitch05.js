// Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro).
//A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const leia = require("readline-sync");

let produto;
let qtd;

console.log
    (`=================== MENU =======================
    \nCÓDIGO DO PRODUTO |     PRODUTO     |   PREÇO
    \n        1         | Cachorro-quente |   R$10.00
    \n        2         |    X-salada     |   R$15.00
    \n        3         |    X-bacon      |   R$18.00
    \n        4         |     Bauru       |   R$12.00
    \n        5         |   Refrigerante  |   R$ 8.00
    \n        6         | Suco de laranja |   R$ 13.00
    \n==================================================   
    `);

produto = leia.questionInt("\n==> Digite o codigo: ");
qtd = leia.questionInt("==> Digite o quantidade: ");


switch (produto) {
    case 1:
        console.log(`\nSeu produto: ${produto} 🍔 |    Quantidade: ${qtd}   |    Total: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(qtd * 10.0)}`);
        break;
    case 2:
        console.log(`\nSeu produto: ${produto} 🍔 |    Quantidade: ${qtd}   |    Total: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(qtd * 15.0)}`);
        break;
    case 3:
        console.log(`\nSeu produto: ${produto} 🍔 |    Quantidade: ${qtd}   |    Total: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(qtd * 18.0)}`);
        break;
    case 4:
        console.log(`\nSeu produto: ${produto} 🥪 |    Quantidade: ${qtd}   |    Total: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(qtd * 12.0)}`);
        break;
    case 5:
        console.log(`\nSeu produto: ${produto} 🥤 |    Quantidade: ${qtd}   |    Total: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(qtd * 18.0)}`);
        break;
    case 6:
        console.log(`\nSeu produto: ${produto} 🧃 |    Quantidade: ${qtd}   |    Total: ${new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(qtd * 13.0)}`);
        break;
    default:
        console.log("\n⚠ Código inválido!");

}