const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

router.post('/', controller.postTodo);;

module.exports = router;