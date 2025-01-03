
export abstract class Cliente {
    private _id: number;
    private _nome: string;
    private _endereco: string;
    private _telefone: string;
    private _tipo: number;
    private _data: Date;


	constructor(id: number, nome: string, endereco: string, telefone: string, tipo: number, data: Date) {
		this._id = id;
		this._nome = nome;
		this._endereco = endereco;
		this._telefone = telefone;
		this._tipo = tipo;
		this._data = data;
	}


	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get endereco(): string {
		return this._endereco;
	}

	public get telefone(): string {
		return this._telefone;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get data(): Date {
		return this._data;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set endereco(value: string) {
		this._endereco = value;
	}

	public set telefone(value: string) {
		this._telefone = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set data(value: Date) {
		this._data = value;
	}

    // Método adicional para calculara idade do cliente com base na data de nascimento
    public calcularIdade(): number {
        const hoje = new Date();

        const anoAtual = hoje.getFullYear();
        const mesAtual = hoje.getMonth() + 1;
        const diaAtual = hoje.getDate();

        const dataNascimento = new Date(this._data);

        const anoNascimento = dataNascimento.getFullYear();
        const mesNascimento = dataNascimento.getMonth() + 1;
        const diaNascimento = dataNascimento.getDate();

        let idade = anoAtual - anoNascimento;

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }
        return idade;
    }

    // Método visualizar
    public visualizar(): void {
        let tipo: string;
        switch (this._tipo) {
            case 1:
                tipo = 'Pessoa Fisica'
                break;
            case 2:
                tipo = 'Pessoa Juridica'
                break;
            default:
                tipo = 'Tipo desconhecido'
                break;
        }

        console.log(`ID: ${this._id}`);
        console.log(`Nome: ${this._nome}`);
        console.log(`Endereço: ${this._endereco}`);
        console.log(`Telefone: ${this._telefone}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Data de Nascimento: ${this._data.toLocaleDateString()}`);
        console.log(`Idade: ${this.calcularIdade()} anos`);
    }






}