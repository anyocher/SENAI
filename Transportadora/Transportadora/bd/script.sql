DROP DATABASE IF EXISTS transportadora;
CREATE DATABASE transportadora CHARSET=UTF8 COLLATE utf8_general_ci;
USE transportadora;

CREATE TABLE cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(255)
);

CREATE TABLE funcionarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cargo VARCHAR(50),
    salario DECIMAL(10,2)
);

CREATE TABLE veiculos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(10) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    capacidade INT NOT NULL
);

CREATE TABLE rotas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    origem VARCHAR(255) NOT NULL,
    destino VARCHAR(255) NOT NULL,
    distancia DECIMAL(10,2)
);

CREATE TABLE entregas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    funcionario_id INT NOT NULL,
    veiculo_id INT NOT NULL,
    rota_id INT NOT NULL,
    status VARCHAR(50),
    inicio DATETIME,
    fim DATETIME,
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(id),
    FOREIGN KEY (veiculo_id) REFERENCES veiculos(id),
    FOREIGN KEY (rota_id) REFERENCES rotas(id)
);

CREATE TABLE pedido(
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    entrega_id INT NOT NULL,
    data DATETIME NOT NULL,
    valor DECIMAL(10,2),
    FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    FOREIGN KEY (entrega_id) REFERENCES entregas(id)
);

INSERT INTO cliente(nome, email, telefone, endereco) VALUES
('Jorge da Silva', 'IY1oF@example.com', '(19)9.3322-4433', 'Rua das orquideas, 422'),
('Maria Blindada', '1t1Tn@example.com', '(19)9.3682-4433', 'Avenida floral, 987'),
('Pedro Alancar', '3ZD@example.com', '(19)9.3322-4243', 'Praça da Penha, 33');

INSERT INTO funcionarios(nome, cargo, salario) VALUES
('Jorge da Silva', 'Motorista', 2500.00),
('Maria Blindada', 'Entregador', 2000.00),
('Pedro Alancar', 'Gerente', 3000.00);

INSERT INTO veiculos(placa, modelo, capacidade) VALUES
('ABC1234', 'Fiat Touro', 5),
('DEF5678', 'Dodge Ram', 4),
('GHI9012', 'Sandeiro', 3);

INSERT INTO rotas(origem, destino, distancia) VALUES
('São Paulo', 'Rio de Janeiro', 50.00),
('Rio de Janeiro', 'Salvador', 40.00),
('Bahia', 'Ceara', 60.00),
('Fortaleza', 'Campinas', 30.00),
('Pato de Minas', 'Rio de Janeiro', 20.00);

INSERT INTO entregas(funcionario_id, veiculo_id, rota_id, status, inicio, fim) VALUES
(1, 1, 1, 'Entregue', '2022-01-01 10:00:00', '2022-01-01 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-02 14:00:00', '2022-01-02 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-03 08:00:00', '2022-01-03 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-04 10:00:00', '2022-01-04 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-05 14:00:00', '2022-01-05 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-06 08:00:00', '2022-01-06 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-07 10:00:00', '2022-01-07 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-08 14:00:00', '2022-01-08 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-09 08:00:00', '2022-01-09 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00');

INSERT INTO pedido(cliente_id, entrega_id, data, valor) VALUES
(1, 1, '2022-01-01', 50.00),
(2, 2, '2022-01-02', 40.00),
(3, 3, '2022-01-03', 60.00),
(1, 4, '2022-01-04', 30.00),
(2, 5, '2022-01-05', 20.00),
(3, 6, '2022-01-06', 70.00),
(1, 7, '2022-01-07', 40.00),
(2, 8, '2022-01-08', 50.00),
(3, 9, '2022-01-09', 60.00),
(1, 8, '2022-01-10', 70.00),
(2, 5, '2022-01-11', 80.00),
(3, 3, '2022-01-12', 90.00),
(1, 3, '2022-01-13', 100.00),
(2, 4, '2022-01-14', 110.00),
(3, 5, '2022-01-15', 120.00),
(1, 6, '2022-01-16', 130.00),
(2, 7, '2022-01-17', 140.00),
(3, 8, '2022-01-18', 150.00),
(1, 9, '2022-01-19', 160.00),
(2, 1, '2022-01-20', 170.00);


SELECT * FROM cliente;
SELECT * FROM funcionarios;
SELECT * FROM veiculos;
SELECT * FROM rotas;
SELECT * FROM entregas;
SELECT * FROM pedido;

show tables;