
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



SELECT * FROM cliente;
SELECT * FROM funcionarios;
SELECT * FROM veiculos;
SELECT * FROM rotas;
SELECT * FROM entregas;
SELECT * FROM pedido;

show tables;