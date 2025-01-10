// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
// via teclado e mostre na tela o total de pessoas cuja idade seja MENOR que 21 anos e o total de pessoas cuja idade, seja MAIOR que 50 anos.
// A leitura dos dados deve ser finalizada ao digitar uma idade negativa.

const leia = require('readline-sync');

let idade = 0;
let pessoasMenor21 = 0;
let pessoasMaior50 = 0;

console.log('\n✨Seja bem vindo(a) a Leitura de Dados!✨')

while(idade >= 0){
    if(idade < 21){
        pessoasMenor21++;
    }else if(idade > 50){
        pessoasMaior50++;
    }

    idade = leia.questionInt('\nDigite uma idade: ')
}


console.log(`\nPessoas menores de 21 anos: ${pessoasMenor21} ✨`)
console.log(`\nPessoas maiores de 50 anos: ${pessoasMaior50} ✨`)
console.log('\nFim da leitura de dados.')