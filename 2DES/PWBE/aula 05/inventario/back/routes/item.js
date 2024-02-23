const express = require('express');
const router = express.Router();
const item = require('../controllers/item');

router.get('/', Item.teste);
router.post('/item/criar', Item.criar);
router.get('/listar', Item.listar);
router.get('/listar/:id', Item.listar);
router.put('/alterar', Item.alterar);
router.delete('/excluir', Item.excluir);

module.exports = router;                                                                                                        


