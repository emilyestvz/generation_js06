CREATE database db_rh;

use db_rh;

create table colaboradores(
	matricula bigint auto_increment,
    nome varchar(255) not null,
    turno varchar(255) not null,
    cargo varchar(255) not null,
    salario decimal, 
    admissao date,
    tipo_de_contrato varchar(255),
    primary key(matricula)
);

alter table colaboradores modify salario decimal(8,2);

insert into colaboradores (nome, turno, cargo, salario, admissao, tipo_de_contrato)
values ("Emily Dias", "Noite", "Software Enginner Sr", 15800.80, "2022-10-22", "CLT"),
		("Fernanda Ribeiro", "Manhã", "Supervisora de TI", 20000.80, "2024-08-21", "CLT"),
        ("Josiane Fermao", "Tarde", "Software Enginner Sr", 250000.80, "2023-10-15", "CLT"),
        ("Diego Rodrigues", "Integral", "Analista de dados", 15800.80, "2022-10-22", "Estagio");

SELECT nome, CONCAT('R$ ', FORMAT(salario, 2, 'pt_BR')) AS salario FROM colaboradores;

select * from colaboradores;

drop database colaboradores; 

select * from colaboradores where salario > 2000.00;

select * from colaboradores where salario < 2000.00;

UPDATE colaboradores SET salario = 1500.10 WHERE matricula = 4;






