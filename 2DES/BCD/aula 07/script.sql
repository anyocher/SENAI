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
