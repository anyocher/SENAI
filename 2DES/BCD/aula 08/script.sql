DROP DATABASE IF EXISTS aluguel;
CREATE DATABASE aluguel CHARSET=UTF8 COLLATE utf8_general_ci;
USE aluguel;

CREATE TABLE Cliente (
    cpf_cliente VARCHAR(14) PRIMARY KEY,
    nome_cliente VARCHAR(100),
    telefone VARCHAR(20)
);

-- Criação da tabela Veiculo
CREATE TABLE Veiculo (
    placa VARCHAR(10) PRIMARY KEY,
    modelo VARCHAR(50),
    marca VARCHAR(50),
    tipo VARCHAR(50),
     diaria int not null
);

CREATE TABLE telefone(
    matricula int not null,
    numero varchar(15) not null,
    foreign key (placa) REFERENCES Veiculo(placa)
);

-- Criação da tabela Reserva
CREATE TABLE Reserva (
    reserva_id SERIAL PRIMARY KEY,
    placa VARCHAR(10),
    cpf_cliente VARCHAR(14),
    data_reserva DATE,
    data_retirada DATE,
    data_devolucao DATE,
    dias INTEGER,
    status VARCHAR(50),
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (placa) REFERENCES Veiculo(placa),
    FOREIGN KEY (cpf_cliente) REFERENCES Cliente(cpf_cliente)
);