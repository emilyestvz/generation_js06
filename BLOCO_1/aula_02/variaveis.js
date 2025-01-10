
let nome = "Emily"
let profissao = "Desenvolvedora Fullstack"
let salarioBruto = 3500.44
const bonus = 0.05


console.log("\nNome:", nome, "| Profissao:", profissao, "| Salario:", salarioBruto, "| Bonus:", bonus);
console.log(
  "\nSalário liquido: ",
  new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format
  (salarioBruto + bonus * salarioBruto)
);

// Interpolação de Strings
let salario = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto + (bonus * salarioBruto));

console.log(`\nO salário do colaborador ${nome} é: ${salario}`);

// console.log("\nTipo de variável:", typeof nome)

