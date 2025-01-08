-- Apagar Banco de Dados db_quitanda
DROP DATABASE db_quitanda;
 
-- Recriar o Banco de dados db_quitanda
CREATE DATABASE db_quitanda;
 
-- Selecionar o Banco de Dados db_quitanda
USE db_quitanda;
 
-- Criar a tabela tb_categorias
CREATE TABLE tb_categorias(
id bigint AUTO_INCREMENT,
descricao varchar(255) NOT NULL,
PRIMARY KEY (id)
);
 
-- Insere dados na tabela tb_categorias
INSERT INTO tb_categorias (descricao)
VALUES ("Frutas");
 
INSERT INTO tb_categorias (descricao)
VALUES ("Verduras");
 
INSERT INTO tb_categorias (descricao)
VALUES ("Legumes");
 
INSERT INTO tb_categorias (descricao)
VALUES ("Temperos");
 
 
INSERT INTO tb_categorias (descricao)
VALUES ("Ovos");
 
INSERT INTO tb_categorias (descricao)
VALUES ("outros");
 
-- Lista todos os dados da tabela tb_categorias
SELECT * FROM tb_categorias;
 
-- Criar a Tabela tb_produtos
CREATE TABLE tb_produtos(
id bigint AUTO_INCREMENT,
nome varchar(255) NOT NULL,
quantidade int, 
dtvalidade date NULL,
preco decimal(6, 2),
categoria_id bigint, 
PRIMARY KEY (id),
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);
 
-- Insere dados na tabela tb_produtos
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Maçã", 1000, "2022-03-07", 1.99, 1);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Banana", 1300, "2022-03-08", 5.00, 1);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Batata doce", 2000, "2022-03-09", 10.00, 3);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Alface", 300, "2022-03-10", 7.00, 2);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Cebola", 1020, "2022-03-08", 5.00, 3);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Ovo Branco", 1000, "2022-03-07", 15.00, 5);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Agrião", 1500, "2022-03-06", 3.00, 2);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Cenoura", 1800, "2022-03-09", 3.50, 3);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Pimenta", 1100, "2022-03-15", 10.00, 4);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Alecrim", 130, "2022-03-10", 5.00, 4);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Manga", 200, "2022-03-07", 5.49, 1);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Laranja", 3000, "2022-03-13", 10.00, 1);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Couve", 100, "2022-03-12", 1.50, 2);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Tomate", 1105, "2022-03-15", 3.00, 3);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Rabanete", 1200, "2022-03-15", 13.00, 3);
 
INSERT INTO tb_produtos(nome, quantidade, preco)
VALUES("Sacola Cinza", 1118, 0.50);
 
INSERT INTO tb_produtos(nome, quantidade, preco)
VALUES("Sacola Verde", 1118, 0.50);
 
-- Visualiza todos os dados da tabela tb_produtos
SELECT * FROM tb_produtos;

-- Para ordenar por ordem alfabética(crescente)
select * from tb_produtos order by nome;

-- Para ordenar descrecente 
select * from tb_produtos order by nome desc;

-- Ordenar por + de um atributo
select * from tb_produtos order by nome, preco;

-- Para mostrar os preços entre 5 a 15
select * from tb_produtos where preco between 5 and 15;

-- Para trazer valores especificos = 5, 10, 15
select * from tb_produtos where preco in (5,10,15);

-- LIKE serve para buscar x palavras na tabela
-- Para buscar inicio da sílaba RA
select * from tb_produtos where nome LIKE 'RA%';

-- Se possui 'ovo'
select * from tb_produtos where nome LIKE '%ovo%';

-- Termina com a sílaba RA
select * from tb_produtos where nome LIKE '%RA';

/*Meu Banco de dados é Case Sensitive ou Case Insensitive?
Case Sensitive (CS) é o nome dado para o Banco de dados que diferencia letras maiúsculas de letras minúsculas.
Case Insensitive (CI) é o nome dado para o Banco de dados que não diferencia letras maiúsculas de letras minúsculas. (caracter)
Accent Sensitive (AS) é o nome dado para o Banco de dados que diferencia caracteres acentuados.
Accent Insensitive (AI) é o nome dado para o Banco de dados que não diferencia caracteres acentuados. (acentuação)
Para descobrir como o seu Banco de dados trabalha com strings, você precisa descobrir qual é a Collation dele. 
A Collation nada mais é do que a forma como os caracteres são codificados e como o Banco de dados os interpreta.*/
select @@collation_database;

-- Soma total dos preços dos meus produtos (o AS para 'apelido')
select sum(preco) as soma from tb_produtos;

-- Calcula a média dos valores de um atributo
select avg(preco) as media from tb_produtos;

-- Conta quantas linhas não nulas um atributo possui. COUNT(*) indica o número de linhas da tabela.
select count(*) as contar from tb_produtos;

-- da chave extrangeira
select count(categoria_id) as contar from tb_produtos;

-- Valores máximos e minimos: mostrando o maior preço
select max(preco) as contar from tb_produtos;

select min(preco) as contar from tb_produtos;

/*Nas consultas do tipo INNER JOIN, o resultado trará somente as linhas que sejam comuns nas 2 tabelas, associadas através das Chaves Primária e Estrangeira, 
ou seja, se a Chave Estrangeira estiver com um valor NULL (nulo), esse registro não será exibido.

LEFT JOIN o resultado trará além das linhas que são comuns nas 2 tabelas, associadas através das Chaves Primária e Estrangeira,
também trará os dados não associados da tabela do lado esquerdo da relação, ou seja, independente da Chave Estrangeira estar ou não com um valor NULL (nulo), 
todos os registros da tabela do lado esquerdo da relação serão exibidos. [tudo que tem chave estrangeira + tabela da esquerda (left) completa.]

RIGHT JOIN o resultado trará além das linhas que são comuns nas 2 tabelas, associadas através das Chaves Primária e Estrangeira, 
também trará os dados não associados da tabela do lado direito da relação, ou seja, independente da Chave Estrangeira estar ou não com um valor NULL (nulo), 
todos os registros da tabela do lado direito da relação serão exibidos. [tudo que tem chave estrangeira + tabela da direita (right) completa.]
*/
select * from tb_produtos inner join tb_categorias on tb_produtos.categoria_id = tb_categorias.id; 

select * from tb_produtos left join tb_categorias on tb_produtos.categoria_id = tb_categorias.id;

select * from tb_produtos right join tb_categorias on tb_produtos.categoria_id = tb_categorias.id;

-- Para saber o preço médio por categorias
select tb_categorias.descricao, avg(preco) as preco_medio 
from tb_produtos inner join tb_categorias
on tb_produtos.categoria_id = tb_categorias.id 
group by tb_categorias.descricao -- GROUP BY: significa agrupar por...
having preco_medio > 5 -- HAVING
order by tb_categorias.descricao; -- ordenando alfabeticamente

-- Pesquisa especifica
select * from tb_produtos inner join tb_categorias
on tb_produtos.categoria_id = tb_categorias.id 
where tb_produtos.categoria_id = 2;


/* COMENTÁRIOS FINAIS:
Tabela mãe sempre será da direita
*/