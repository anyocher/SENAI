create table Cliente (
    idCliente int primary key,
    nomeCliente varchar(255),
    endereco varchar(255),
    telefone varchar(18),
    email varchar(100)
);

create table Funcionario (
    idFuncionario INT PRIMARY KEY,
    nome VARCHAR(100),
    cargo VARCHAR(100),
    salario DECIMAL(10, 2)
);

create table Veiculo (
    idVeiculo INT PRIMARY KEY,
    placa VARCHAR(8),
    modelo VARCHAR(100),
    capacidade INT
);

create table Rota (
    idRota INT PRIMARY KEY,
    origem VARCHAR(100),
    destino VARCHAR(100),
    distancia DECIMAL(10, 2)
);

create table Entrega (
    idEntrega INT PRIMARY KEY,
    inicio DATETIME,
    fim DATETIME,
    status ENUM('Em andamento', 'Concluída', 'Atrasada'),
    idRota INT,
    idVeiculo INT,
    motorista INT,
    FOREIGN KEY (idRota) REFERENCES Rota(idRota),
    FOREIGN KEY (idVeiculo) REFERENCES Veiculo(idVeiculo),
    FOREIGN KEY (motorista) REFERENCES Funcionario(idFuncionario)
);

create table Pedido (
    idPedido INT PRIMARY KEY,
    dataPedido DATE,
    valor DECIMAL(10, 2),
    idCliente INT,
    idEntrega INT,
    FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente),
    FOREIGN KEY (idEntrega) REFERENCES Entrega(idEntrega)
);