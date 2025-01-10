import { Cliente } from './Cliente';

export class PessoaJuridica extends Cliente {
    private _cnpj: string;
    private _razaoSocial: string;
    private _inscricaoEstadual: string;


	constructor(id: number, nome: string, endereco: string, telefone: string, tipo: number, data: Date, cnpj: string, razaoSocial: string, inscricaoEstadual: string) {
        super(id, nome, endereco, telefone, tipo, data);

		this._cnpj = cnpj;
		this._razaoSocial = razaoSocial;
		this._inscricaoEstadual = inscricaoEstadual;
	}

	public get cnpj(): string {
		return this._cnpj;
	}

	public get razaoSocial(): string {
		return this._razaoSocial;
	}

	public get inscricaoEstadual(): string {
		return this._inscricaoEstadual;
	}

	public set cnpj(value: string) {
		this._cnpj = value;
	}

	public set razaoSocial(value: string) {
		this._razaoSocial = value;
	}

	public set inscricaoEstadual(value: string) {
		this._inscricaoEstadual = value;
	}

   public visualizar(): void {
       super.visualizar();
       console.log(`CNPJ: ${this._cnpj} | Razão Social: ${this._razaoSocial} | Inscrição Estadual: ${this._inscricaoEstadual}`);
   }

}