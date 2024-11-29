const prisma = require('../models/prismaClient');  


const create = async (req, res) => {
  try {
    const { nome, email } = req.body;

   
    if (!nome || !email) {
      return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
    }

   
    const usuario = await prisma.usuario.create({
      data: { nome, email },  
    });

    res.status(201).json(usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);  
    res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });  
  }
};


const read = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();  
    res.json(usuarios);  
  } catch (error) {
    console.error('Erro ao listar usuários:', error);  
    res.status(500).json({ error: 'Erro ao listar usuários', details: error.message });  
  }
};

module.exports = { create, read };  
