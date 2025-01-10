import * as readlinesync from 'readline-sync';
import { colors } from '../util/cores';
import { PessoaFisica } from './model/PessoaFisica';
import { PessoaJuridica } from './model/PessoaJuridica';
import { ClienteController } from './controller/ClienteController';


export function main() {
    let id, opcao, tipo: number;
    let nome, cnpj, cpf, telefone, endereco, sexo, inscricaoEstadual, razaoSocial: string;
    const tipoDeCliente = ['Pessoa Fisica', 'Pessoa Juridica'];
    
    const clientes = new ClienteController();


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
                tipo = readlinesync.keyInSelect(tipoDeCliente, 'Digite o tipo do cliente (1 - Pessoa Fisica, 2 - Pessoa Juridica): ', {cancel:false}) + 1;

                switch(tipo){
                    case 1:
                        nome = readlinesync.question('Digite o nome: ');
                        cpf = readlinesync.question('Digite o CPF: ');
                        sexo = readlinesync.question('Digite o sexo (M - Masculino, F - Feminino): ');
                        endereco = readlinesync.question('Digite o endereço: ');
                        telefone = readlinesync.question('Digite o telefone: ');

                        const dataNasc = readlinesync.question('Informe sua data de nascimento (aa/aa/aaaa): ');
                        const [dia, mes, ano] = dataNasc.split('/').map(Number);
                        const data = new Date(ano, mes - 1, dia);

                        if(isNaN(dataNasc.getTime())){
                            
                        }
                }

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