const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

router.post('/', controller.postTodo);;
router.get('/', controller.getTodos)
router.get('/:id', controller.getTodoId);
router.patch('/:id', controller.patchTodoId);
router.delete('/:id', controller.deleteTodoId);

module.exports = router;