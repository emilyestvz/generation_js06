import { Cliente } from '../model/Cliente';

export interface ClienteRepository {
    //Método CRUD

    inserirCliente(cliente:Cliente): void;
    listarClientes(): void;
    alternarCliente(cliente:Cliente): void;
    consultarPorID(id: number): void;
    removerCliente(id:number): void;
}