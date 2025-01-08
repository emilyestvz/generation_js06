create database db_ecommerce;

use db_ecommerce;

create table tb_produtos(
	id bigint auto_increment,
    nome varchar(255) not null,
    autor varchar(255) not null,
    genero varchar(255),
    descricao TEXT,
    preco decimal NOT NULL,
    qtd_estoque int,
    tipo ENUM('Físico', 'Digital'),
    primary key(id)
);

alter table tb_produtos modify preco decimal(6,2);

-- Inserindo dados na tabela livros
INSERT INTO tb_produtos (nome, autor, genero, descricao, preco, qtd_estoque, tipo)
VALUES ('O Senhor dos Anéis', 'J.R.R. Tolkien', 'Fantasia', 'Uma das maiores obras de fantasia épica.', 59.90, 50, 'Físico'),
('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 'Fantasia', 'Primeiro livro da série Harry Potter.', 39.90, 100, 'Digital'),
('A Revolução dos Bichos', 'George Orwell', 'Ficção', 'Uma alegoria satírica sobre política.', 24.90, 75, 'Físico'),
('A Arte da Guerra', 'Sun Tzu', 'Estratégia', 'Manual clássico de estratégia militar.', 19.90, 30, 'Digital');

select * from tb_produtos;

select * from tb_produtos where preco > 500.00;

select * from tb_produtos where preco < 500.00;

UPDATE tb_produtos SET preco = 501.80 WHERE id = 1;


