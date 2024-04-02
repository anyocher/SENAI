
Mer  (Dicionário de dados) - Aluguel de carros

veiculo (placa: chave primária,modelo,marca,tipo,diaria);
cliente (cpf_cliente: chave primaria, nome_cliente, telefone)
reserva (reserva: chave primaria, retirada, devolucao, dias, status, subtotal placa: chave estrangeira[referencia veiculo(placa)]cpf_cliente: chave estrangeira[referencia reserva(reserva)],retirada, devolucao, dias, status);

