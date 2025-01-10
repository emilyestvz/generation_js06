create database db_farmacia_bem_estar;
use db_farmacia_bem_estar;

create table tb_categorias(
	id_categoria bigint auto_increment primary key,
    categoria varchar(255) not null,
    descricao_categoria varchar(255) not null
);

create table tb_produtos(
	id_prod bigint auto_increment primary key,
	nome varchar(255) not null,
    preco decimal(10,2) not null,
    qtd_estoque int not null,
    descricao_prod varchar(255),
    id_categoria bigint not null,
    foreign key (id_categoria) references tb_categorias(id_categoria)
);

-- visualizar tabelas
select * from tb_categorias;
select id_prod, nome, qtd_estoque, descricao_prod, CONCAT('R$ ', FORMAT(preco, 2, 'pt_BR')) 
as preço from tb_produtos;

insert into tb_categorias (categoria, descricao_categoria) values
('Medicamentos', 'Produtos para tratamento de saúde'),
('Higiene', 'Itens de higiene pessoal e cuidados diários'),
('Beleza', 'Produtos de beleza e cosméticos'),
('Suplementos', 'Vitaminas e suplementos alimentares'),
('Infantil', 'Produtos específicos para crianças');

insert into tb_produtos (nome, preco, qtd_estoque, descricao_prod, id_categoria) values
('Paracetamol', 5.99, 50, 'Medicamento para dor e febre', 1),
('Escova de Dentes', 12.50, 100, 'Escova de dentes macia', 2),
('Shampoo Anticaspa', 25.99, 30, 'Shampoo para tratamento de caspa', 2),
('Batom Vermelho', 19.90, 40, 'Batom de longa duração', 3),
('Vitamina C', 35.00, 25, 'Suplemento de vitamina C efervescente', 4),
('Fralda Descartável', 45.00, 80, 'Fralda para bebês de até 10kg', 5),
('Creme Hidratante', 22.90, 60, 'Hidratante para pele seca', 3),
('Ômega 3', 50.00, 20, 'Suplemento alimentar de óleo de peixe', 4);

-- visualizando preços maiores que $50,00
select * from tb_produtos where preco >= 50.00;

-- visualizando preços entre $5 a $60,00
select * from tb_produtos where preco between 5.00 and 60.00;

-- buscando todas os produtos q possuam a letra C
select * from tb_produtos where nome like '%c%';

-- união das tabelas
select
    id_prod,
    nome,
    preco,
    qtd_estoque,
    descricao_prod,
    categoria,
    descricao_categoria
from tb_produtos inner join tb_categorias on tb_produtos.id_categoria = tb_categorias.id_categoria;

-- seleção especifica de uma categoria
select * from tb_produtos inner join tb_categorias on tb_produtos.id_categoria = tb_categorias.id_categoria where tb_produtos.id_categoria = 3;
