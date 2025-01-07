CREATE DATABASE db_quitanda;

-- para abrir/selecionar a tabela
USE db_quitanda;

-- criando as tabelas
CREATE TABLE tb_produtos(
    id bigint auto_increment,
    nome varchar(255) not null,
    quantidade int,
    data_validade date,
    preco decimal,
    PRIMARY KEY(id)
);

-- alteração de dados
ALTER TABLE tb_produtos MODIFY preco decimal(6,2);

ALTER TABLE tb_produtos ADD descricao varchar(255);

-- 
DESC tb_produtos;

ALTER TABLE tb_produtos CHANGE descricao descricao_produto varchar(500);

ALTER TABLE tb_produtos DROP descricao_produto;

INSERT INTO tb_produtos (nome, quantidade, data_validade, preco)
VALUES ("Tomate", 100, "2024-01-10", 8.00);

INSERT INTO tb_produtos (nome, quantidade, data_validade, preco)
VALUES ("Pepino", 57, "2025-02-13", 9.50),
       ("Cenoura", 20, "2025-01-20", 7.00),
       ("Cebola", 60, "2025-03-07", 5.00),
       ("Repolho", 30, "2025-02-02", 3.00);

INSERT INTO tb_produtos (nome, quantidade, data_validade, preco)
VALUES ("Tomate Italiano", 100, "2025-01-10", 8.00);

-- para selecionar a tabela e mostrar
SELECT * FROM tb_produtos;

SELECT nome, preco FROM tb_produtos;

SELECT * FROM tb_produtos WHERE id = 1;

SELECT * FROM tb_produtos WHERE preco > 4.00;

SELECT * FROM tb_produtos WHERE preco > 2.00 AND nome = "Repolho";

SELECT * FROM tb_produtos WHERE preco > 5.00 OR nome = "Tomate";

SELECT * FROM tb_produtos WHERE nome != "Tomate";

-- formatação do decimal para real
SELECT nome, CONCAT('R$ ', FORMAT(preco, 2, 'pt_BR')) AS preco FROM tb_produtos;

SELECT nome, DATE_FORMAT(data_validade, '%d/%m/%Y') AS Data_validade FROM tb_produtos;

UPDATE tb_produtos SET preco = 9.50 WHERE id = 2;

DELETE FROM tb_produtos WHERE id = 5;

/*
COMENTÁRIOS FINAIS:
O comando DROP é usado para excluir completamente um objeto no banco de dados, como uma tabela, uma view, um banco de dados, etc.
- Remove a estrutura (ex.: a tabela) e todos os dados contidos nela.
- É irreversível: uma vez executado, não é possível recuperar os dados ou a estrutura sem um backup.

O comando DELETE é usado para remover registros (dados) específicos de uma tabela.
- Afeta somente os dados (linhas) da tabela; a estrutura da tabela permanece intacta.
- Pode ser usado com a cláusula WHERE para especificar quais registros excluir.
- Se usado sem WHERE, remove todos os registros, mas a tabela continua existindo.

*/