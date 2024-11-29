const prisma = require('../models/prismaClient.js');

const create = async (req, res) => {
  try {
    const { usuarioId, descricao, setor, prioridade, dataCadastro, status } = req.body;

    if (!usuarioId || !descricao || !setor || !prioridade || !dataCadastro) {
      return res.status(400).json({ error: 'Campos obrigatórios não foram preenchidos' });
    }

    const tarefa = await prisma.tarefa.create({
      data: {
        usuarioId,
        descricao,
        setor,
        prioridade,
        dataCadastro: new Date(dataCadastro),
        status: status || 'a fazer',
      },
    });

    res.status(201).json(tarefa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

const read = async (req, res) => {
  try {
    const tarefas = await prisma.tarefa.findMany();
    res.json(tarefas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

const readDia = async (req, res) => {
  try {
    const dia = req.params.dia;
    const inicio = new Date(dia);
    inicio.setHours(0, 0, 0, 0);

    const fim = new Date(dia);
    fim.setHours(23, 59, 59, 999);

    const tarefas = await prisma.tarefa.findMany({
      where: {
        dataCadastro: {
          gte: inicio,
          lte: fim,
        },
      },
    });

    res.json(tarefas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar tarefas por data' });
  }
};

const update = async (req, res) => {
  try {
    const { id, descricao, setor, prioridade, status } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'ID da tarefa é obrigatório para atualização' });
    }

    const tarefa = await prisma.tarefa.update({
      where: { id },
      data: { descricao, setor, prioridade, status },
    });

    res.json(tarefa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

const del = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await prisma.tarefa.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: 'Tarefa deletada com sucesso', tarefa });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};

module.exports = { create, read, readDia, update, del };
