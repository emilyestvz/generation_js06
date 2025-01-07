create database db_escola;

use db_escola;

create table registro_alunos(
	matricula bigint auto_increment,
    nome varchar(255) not null,
    idade int not null,
    genero varchar(255) not null,
    endereco varchar(255),
    serie varchar(255) not null,
    nota_mensal decimal,
    contato varchar(255) not null,
	responsavel varchar(255),
    primary key(matricula)
);

select * from registro_alunos;

alter table registro_alunos modify nota_mensal decimal(6,1);

insert into registro_alunos (nome, idade, genero, endereco, serie, nota_mensal, contato, responsavel) 
values ('Maria Clara Silva', 10, 'Feminino', 'Rua das Flores, 123, São Paulo', '5º Ano', 8.5, '(11) 91234-5678', 'Ana Silva'),
	('João Pedro Santos', 12, 'Masculino', 'Av. Brasil, 456, Rio de Janeiro', '7º Ano', 9.2, '(21) 99876-5432', 'Carlos Santos'),
	('Laura Pereira', 9, 'Feminino', 'Rua das Palmeiras, 789, Curitiba', '4º Ano', 7.8, '(41) 98765-4321', 'Fernanda Pereira'),
	('Lucas Oliveira', 11, 'Masculino', 'Rua São João, 321, Belo Horizonte', '6º Ano', 6.9, '(31) 97654-3210', 'Marcos Oliveira'),
	('Gabriela Costa', 13, 'Feminino', 'Av. dos Estudantes, 654, Recife', '8º Ano', 8.7, '(81) 96543-2109', 'Patrícia Costa'),
	('Felipe Rodrigues', 10, 'Masculino', 'Rua das Laranjeiras, 876, Porto Alegre', '5º Ano', 7.5, '(51) 95432-1098', 'Juliana Rodrigues'),
	('Sofia Almeida', 14, 'Feminino', 'Av. Independência, 98, Salvador', '9º Ano', 9.4, '(71) 94321-0987', 'Paulo Almeida'),
	('Mateus Lima', 8, 'Masculino', 'Rua Primavera, 11, Florianópolis', '3º Ano', 8.0, '(48) 93210-9876', 'Clara Lima'),
	('Isabela Fernandes', 12, 'Feminino', 'Rua Central, 45, Manaus', '7º Ano', 6.8, '(92) 92109-8765', 'Ricardo Fernandes'),
	('Henrique Souza', 11, 'Masculino', 'Rua das Hortênsias, 33, Brasília', '6º Ano', 7.9, '(61) 91098-7654', 'Luciana Souza');
    
select * from registro_alunos where nota_mensal > 7.0;

select * from registro_alunos where nota_mensal < 7.0;

UPDATE registro_alunos SET nota_mensal = 5.0 WHERE matricula = 9;





