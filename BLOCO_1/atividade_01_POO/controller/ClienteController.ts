import { Cliente } from '../model/Cliente';
import { ClienteRepository } from '../repository/ClienteRepository';

export class ClienteController implements ClienteRepository {
    
    // Array
    private listaClientes: Cliente[] = [];

    public id: number = 0;

    // Cadastra um novo cliente
    inserirCliente(cliente: Cliente): void {
        this.listaClientes.push(cliente);
        console.log('Cliente cadastrado com sucesso!');
    }

    // Lista todos os clientes
    listarClientes(): void {
        console.log('Listando clientes...');
        this.listaClientes.forEach((cliente) => cliente.visualizar());
    }

    // Alterar dados de um cliente
    alternarCliente(cliente: Cliente): void {
        const buscarCliente = this.buscarNoArray(cliente.id);

        if(buscarCliente){
            buscarCliente.nome = cliente.nome;
            buscarCliente.endereco = cliente.endereco;
            buscarCliente.telefone = cliente.telefone;
            console.log('Cliente alterado com sucesso!');
        } else {
            console.log('Cliente não encontrado!');
        }
    }

    // Consultar por ID
     consultarPorID(id: number): void {
        const buscarCliente = this.buscarNoArray(id);

        if(buscarCliente){
            console.log('Cliente encontrado: ');
            buscarCliente.visualizar();
        } else {
            console.log('Cliente não encontrado!');
        }
    }

     // Excluir cliente por ID
     removerCliente(id: number): void {
        const index = this.listaClientes.findIndex((cliente) => cliente.id === id);

        if(index > -1){
            this.listaClientes.splice(index, 1);
            console.log('Cliente excluído com sucesso!');
        } else {
            console.log('Cliente não encontrado!');
        }
    }


     //Métodos Auxiliares
     public gerarId():number{
        return ++ this.id;
     }
 
     public buscarNoArray(id: number): Cliente | null{
         for(let cliente of this.listaClientes){
             if(cliente.id === id)
                 return cliente;
         }
         return null;
     }
}

