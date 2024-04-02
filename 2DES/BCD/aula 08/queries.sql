-- use aluguel;

-- show tables;



-- select * from cliente order by nome;

-- select f.*, t.numero as telefone from cliente f left join telefone t on f.reserva = t.reserva;

-- select * from veiculo where marca = 'Fiat' order by ano desc; DELETE

-- select v.*, count(m.id) as reserva from veiculo v left join reserva m on v.placa = m.placa group by v.placa;

-- -- vw_totas_as_alugueis
-- create view vw_totas_as_reservas as
-- select m.*, f.nome as cliente, v.modelo as veiculo from teserva m left join cliente f on m.reserva = f.reserva left join veiculo v on m.placa = v.placa;

-- select * from vw_totas_as_reservas where veiculo = 'Uno';

SELECT * FROM Cliente ORDER BY Nome;

SELECT c.Nome, t.Telefone FROM Cliente c LEFT JOIN Telefone t ON c.CPF = t.CPF_cliente;

SELECT * FROM Veiculo ORDER BY Marca, Modelo;

SELECT * FROM Veiculo WHERE Marca = 'Fiat' ORDER BY Diaria DESC;

SELECT v.*, COUNT(r.Placa) AS Quantidade_Alugueis FROM Veiculo v LEFT JOIN Reserva r ON v.Placa = r.Placa GROUP BY v.Placa;

CREATE VIEW vw_todos_os_alugueis AS SELECT r.Placa, c.Nome AS Nome_Cliente, v.Modelo, v.Marca, r.Dias, r.Subtotal FROM Reserva r JOIN Veiculo v ON r.Placa = v.Placa JOIN Cliente c ON r.CPF_cliente = c.CPF;
SELECT * FROM `vw_todos_os_alugueis`
