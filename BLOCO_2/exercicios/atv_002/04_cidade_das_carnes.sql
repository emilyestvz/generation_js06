create database db_cidade_das_carnes;
use db_cidade_das_carnes;

create table tb_categorias(
	id_categoria bigint auto_increment primary key,
    categoria varchar(50) not null,
    desc_categoria varchar(255) not null
);

create table tb_produtos(
	id_produto bigint auto_increment primary key, 
    nome_produto varchar(50) not null,
    preco decimal(10,2) not null,
    peso_kg decimal(10,2) not null,
    desc_produto varchar(255) not null,
    id_categoria bigint not null,
    foreign key (id_categoria) references tb_categorias(id_categoria)
);

select * from tb_categorias;
select * from tb_produtos;

insert into tb_categorias (categoria, desc_categoria) values
('Carnes Bovinas', 'Cortes de carne de boi'),
('Carnes Suínas', 'Cortes de carne de porco'),
('Aves', 'Cortes de frango e aves em geral'),
('Carne Moída', 'Variedades de carne moída'),
('Especiais', 'Cortes especiais e premium');

insert into tb_produtos (nome_produto, preco, peso_kg, desc_produto, id_categoria) values
('Picanha', 79.90, 1.00, 'Corte nobre de carne bovina', 1),
('Contra-filé', 49.90, 1.00, 'Carne bovina macia e suculenta', 1),
('Costelinha Suína', 29.90, 1.50, 'Costela de porco com tempero especial', 2),
('Lombo Suíno', 24.90, 1.00, 'Corte magro de carne suína', 2),
('Coxa de Frango', 12.90, 1.20, 'Corte popular de carne de frango', 3),
('Asa de Frango', 14.90, 1.00, 'Asas de frango para churrasco', 3),
('Carne Moída de Primeira', 34.90, 1.00, 'Carne moída de alta qualidade', 4),
('Wagyu', 299.90, 0.50, 'Corte premium de carne bovina japonesa', 5);

select * from tb_produtos where preco > 50.00;

select * from tb_produtos where preco between 50.00 and 150.00;

select * from tb_produtos where nome_produto like '%c%';

-- união das tabelas
select
    id_produto,
    nome_produto,
    preco,
    peso_kg,
    desc_produto,
    categoria
from tb_produtos inner join tb_categorias on tb_produtos.id_categoria = tb_categorias.id_categoria;

