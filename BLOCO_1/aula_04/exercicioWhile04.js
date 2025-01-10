// Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados.

const leia = require("readline-sync");

console.log("=".repeat(30), "PESQUISA DE COLABORADORES", "=".repeat(30));

let totalBack = 0, totalMulheresFront = 0, totalHomensMob40 = 0, 
    totalNBinariosFull30 = 0, totalPessoas = 0, somaIdades = 0;

let continuar = 'S'


while(continuar.toUpperCase() === 'S'){

    const idade = leia.questionInt("\nDigite a idade: ");
    const genero = leia.questionInt("Digite o numero que corresponda a sua Identidade de Genero: " + 
        "\n1 - Mulher Cis\n2 - Homem Cis\n3 - Nao Binario\n" +
        "4 - Mulher Trans\n5 - Homem Trans\n6 - Outros\n")

    const profissao = leia.questionInt("Digite o numero correspondente ao tipo de desenvolvedor:\n" +
        "1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack\n")

    totalPessoas++;
    somaIdades += idade;

    if(profissao ===1) {
        totalBack++;
    } else if(profissao === 2 && (genero === 1 || genero === 4)) {
        totalMulheresFront++;
    }else if(profissao === 2 && (genero === 2 || genero === 5) && idade > 40) {
        totalHomensMob40++;
    }else if(profissao === 4 && genero === 3 && idade < 30){
        totalNBinariosFull30++;
    }

    continuar = leia.question("Deseja continuar? (S/N): ").toUpperCase();
    if (continuar !== "S")
        break;
    
}

// Calcular média
let mediaIdade = somaIdades / totalPessoas.toFixed(2);

console.log("=".repeat(30), "Resultados da Pesquisa", "=".repeat(30));
console.log(`\n- Número de pessoas desenvolvedoras Backend: ${totalBack}
    \n- Número de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMulheresFront}
    \n- Número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHomensMob40}
    \n- Número de Não Binários desenvolvedores FullStack menores de 30 anos: ${totalNBinariosFull30}`);
console.log("=".repeat(70));
console.log(`\n✔ Número total de pessoas que responderam à pesquisa: ${totalPessoas}
    \n✔ Média de idade das pessoas que responderam à pesquisa: ${mediaIdade}`);

