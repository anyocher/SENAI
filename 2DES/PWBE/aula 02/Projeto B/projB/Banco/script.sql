drop database if exists cantina;
create database cantina;
use cantina;

create table Salgados(

    nome varchar(50) not null,
    produtos varchar(100),
    valor decimal(10, 2) not null,
    quantidade int not null,
    total decimal(10, 2) not null,
    data datetime not null

);

describe Salgados;

insert into Salgados( nome, produtos, valor, quantidade, total, data)
values

( "Igor", "Produto a", 7.50, "1", 7.50, "2024-01-30"),
( "Iagora", "Produto b", 4,00, "1", 4.00, "2024-01-30"),
( "Ana", "Produto c", 3.50, "1", 3.50, "2024-01-30");


select * from Salgados;l