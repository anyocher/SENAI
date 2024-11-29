const express = require('express');
const router = express.Router();

const Usuario = require('./controllers/usuario');
const Tarefa = require('./controllers/tarefa');


router.get('/', (req, res) => {
  res.send('API ToDo List Respondendo');
});


router.post('/usuarios', Usuario.create);
router.get('/usuarios', Usuario.read);

router.post('/tarefas', Tarefa.create);
router.get('/tarefas', Tarefa.read);
router.get('/tarefas/:dia', Tarefa.readDia);
router.put('/tarefas', Tarefa.update);
router.delete('/tarefas/:id', Tarefa.del);

module.exports = router;
