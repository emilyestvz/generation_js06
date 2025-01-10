create database db_pizzaria_legal;
use db_pizzaria_legal;

create table tb_categorias(
	id_categoria bigint auto_increment,
    nome_categoria varchar(255) not null,
    descricao_categoria varchar(255),
    primary key (id_categoria)
);

create table tb_pizzas(
	id_pizza bigint auto_increment primary key,
    nome_pizza varchar(255) not null,
    preco decimal(6,2) not null,
    tamanho varchar(50),
    ingredientes text not null,
    id_categoria bigint not null,
    foreign key (id_categoria) references tb_categorias(id_categoria)
);

select * from tb_categorias;
select id_pizza, nome_pizza, tamanho, ingredientes, id_categoria, CONCAT('R$ ', FORMAT(preco, 2, 'pt_BR')) as preço from tb_pizzas;

insert into tb_categorias (nome_categoria, descricao_categoria) values
('Tradicional', 'Pizzas clássicas e populares'),
('Gourmet', 'Ingredientes sofisticados e combinações únicas'),
('Vegana', 'Pizzas feitas sem produtos de origem animal'),
('Especial', 'Sabores especiais e combinações exclusivas'),
('Doce', 'Pizzas com sabores doces e sobremesas');

insert into tb_pizzas (nome_pizza, preco, tamanho, ingredientes, id_categoria) values
('Margherita', 35.50, 'Média', 'Mussarela, tomate, manjericão, azeite', 1),
('Calabresa', 40.00, 'Grande', 'Mussarela, calabresa, cebola, orégano', 1),
('Quatro Queijos', 45.00, 'Grande', 'Mussarela, parmesão, provolone, gorgonzola', 2),
('Vegana Supreme', 42.00, 'Média', 'Queijo vegano, cogumelos, pimentão, azeitonas', 3),
('Frango com Catupiry', 48.00, 'Grande', 'Frango desfiado, catupiry, milho, orégano', 2),
('Chocolate com Morango', 32.00, 'Pequena', 'Chocolate derretido, morango, granulado', 5),
('Romeu e Julieta', 30.00, 'Pequena', 'Goiabada, queijo minas, açúcar', 5),
('Carne Seca com Catupiry', 50.00, 'Grande', 'Carne seca desfiada, catupiry, cebola, cheiro-verde', 4);

-- visualizando preços maiores que $45,00
select * from tb_pizzas where preco > 45.00;

-- visualizando preços entre $50 a $100,00
select * from tb_pizzas where preco between 50.00 and 100.00;

-- buscando todas as pizzas q possuam a letra M 
select * from tb_pizzas where nome_pizza like '%m%';

-- unindo as duas tabelas (atributos separados ao invés de *, para n repetir o id_categoria)
select tb_pizzas.id_pizza,
    tb_pizzas.nome_pizza,
    tb_pizzas.preco,
    tb_pizzas.tamanho,
    tb_pizzas.ingredientes,
    tb_categorias.id_categoria,
    tb_categorias.nome_categoria,
    tb_categorias.descricao_categoria 
from tb_pizzas inner join tb_categorias 
on tb_pizzas.id_categoria = tb_categorias.id_categoria;

-- seleção de pizza especifica em uma categoria
select * from tb_pizzas inner join tb_categorias 
on tb_pizzas.id_categoria = tb_categorias.id_categoria
where tb_pizzas.id_categoria = 4;