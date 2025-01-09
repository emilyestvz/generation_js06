create database db_construindo_vidas;
use db_construindo_vidas;

create table tb_categorias(
	id_categoria bigint auto_increment primary key,
    categoria varchar(50) not null,
    desc_categoria varchar(255) not null
);

create table tb_produtos(
	id_produto bigint auto_increment primary key,
    nome varchar(255) not null, 
    preco decimal(10,2) not null,
    qtd_estoque bigint not null,
    desc_produto varchar(255),
    id_categoria bigint not null,
    foreign key (id_categoria) references tb_categorias(id_categoria)
);

select * from tb_categorias;
select * from tb_produtos;

insert into tb_categorias (categoria, desc_categoria) values
('Cimentos', 'Produtos utilizados para estruturação de construções'),
('Tintas e Acabamentos', 'Produtos para pintura e acabamento final'),
('Ferramentas', 'Instrumentos para construção e manutenção'),
('Madeiras', 'Produtos derivados de madeira para construção'),
('Elétricos e Hidráulicos', 'Itens para instalações elétricas e hidráulicas');

insert into tb_produtos (nome, preco, qtd_estoque, desc_produto, id_categoria) values
('Cimento Portland', 29.90, 100, 'Saco de cimento de 50kg para construção', 1),
('Massa Corrida', 25.90, 50, 'Massa para nivelamento de paredes', 2),
('Tinta Acrílica Branca', 49.90, 70, 'Tinta acrílica para interiores e exteriores', 2),
('Martelo', 19.90, 200, 'Ferramenta para pregar e demolir', 3),
('Parafusadeira Elétrica', 199.90, 30, 'Parafusadeira portátil recarregável', 3),
('Madeira Compensada', 89.90, 20, 'Madeira compensada de alta resistência', 4),
('Cabo Elétrico 10mm', 4.90, 500, 'Cabo elétrico de cobre 10mm', 5),
('Torneira de Cozinha', 59.90, 40, 'Torneira de metal para cozinha', 5);

select * from tb_produtos where preco > 70.00;

select * from tb_produtos where preco between 70.00 and 150.00;

select * from tb_produtos where nome_produto like '%c%';

-- união das tabelas
select
    id_produto,
    nome,
    preco,
    qtd_estoque,
    desc_produto,
    categoria,
    desc_categoria
from tb_produtos inner join tb_categorias on tb_produtos.id_categoria = tb_categorias.id_categoria;

-- seleção especifica de uma categoria: elétricos e hidráulicos
select * from tb_produtos inner join tb_categorias on tb_produtos.id_categoria = tb_categorias.id_categoria where tb_produtos.id_categoria = 5;





