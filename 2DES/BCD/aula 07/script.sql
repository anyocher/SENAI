DROP DATABASE IF EXISTS manu;
CREATE DATABASE manu CHARSET=UTF8 COLLATE utf8_general_ci;
USE manu; 

CREATE TABLE Manutencao (
    id_manutencao INT PRIMARY KEY,
    inicio_manutencao DATE,
    fim_manutencao DATE,
    descricao VARCHAR(255),
    placa VARCHAR(20) REFERENCES Veiculo(placa)
);


CREATE TABLE Funcionario (
    matricula INT PRIMARY KEY,
    nome_funcionario VARCHAR(100)
);


CREATE TABLE Telefone (
    matricula INT REFERENCES Funcionario(matricula),
    telefone VARCHAR(20)
);


CREATE TABLE Veiculo (
    placa VARCHAR(20) PRIMARY KEY,
    modelo VARCHAR(50),
    marca VARCHAR(50),
    ano INT,
    matricula INT REFERENCES Funcionario(matricula),
    funciona BOOLEAN
);
