import { Cliente } from './Cliente';

export class PessoaFisica extends Cliente {
    private _cpf: string;
    private _sexo: string;


	constructor(id: number, nome: string, endereco: string, telefone: string, tipo: number, data: Date, cpf: string, sexo: string, ) {
        super(id, nome, endereco, telefone, tipo, data);
		this._cpf = cpf;
		this._sexo = sexo;
	}

	public get cpf(): string {
		return this._cpf;
	}

	public get sexo(): string {
		return this._sexo;
	}

	public set cpf(value: string) {
		this._cpf = value;
	}

	public set sexo(value: string) {
		this._sexo = value;
	}

    // Método Visualizar
    public visualizar(): void {
        console.log(`ID: ${this.id} | Nome: ${this.nome} | Endereço: ${this.endereco} | Telefone: ${this.telefone} | CPF: ${this._cpf} | Sexo: ${this._sexo} | Idade: ${this.calcularIdade()}`);
    }

}