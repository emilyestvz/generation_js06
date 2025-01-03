import { colors } from '../util/cores';
import readlinesync from 'readline-sync';

export function main() {
    let id, opcao, tipo: number;
    let nome, cnpj, cpf, telefone, endereco, sexo, inscricaoEstadual, razaoSocial: string;

    const tipoDeCliente = ['Pessoa Fisica', 'Pessoa Juridica'];


    while(true) {
        console.log(`=#=`.repeat(20))
        console.log(`
        \t1 - Inserir novo cliente
        \t2 - Listar todos os clientes
        \t3 - Alterar dados de um cliente
        \t4 - Consultar Cliente por ID
        \t5 - Remover um cliente
        \t0 - Sair`)
        console.log('')
        console.log(`=#=`.repeat(20));

        opcao = Number(readlinesync.question('\n- Digite a opcao desejada: '));

        if(opcao === 0){
            console.log(colors.fg.magenta, `Saindo...`);
            about();
            process.exit(0);
        }

        
        switch(opcao) {
            case 1:
                inserirCliente();
                break;
            case 2:
                listarClientes();
                break;
            case 3:
                alterarCliente();
                break;
            case 4:
                consultarPorID();
                break;
            case 5:
                removerCliente();
                break;
            default:
                console.log(colors.fg.red, 'Opção inválida!', colors.reset);
                keyPress();
        }

    }
}

// funções
function about() {
    console.log(colors.fg.blackstrong, 
        `\n✨ Criado por Emily Cristiny Dias
         \n✨ GitHub: https://github.com/emilyestvz`, colors.reset);
    console.log(colors.fg.magentastrong, `#=`.repeat(30), colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();