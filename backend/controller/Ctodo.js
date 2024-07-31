const {todo} = require ('../models/index');

// todo 생성
exports.postTodo = async (req, res) => {
    try {
        console.log(req.body);
        const { title, done } = req.body;
        const newTodo = await todo.create({
            title, done
        });

        res.json(newTodo);
    }catch(err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
// todo  전체 조회
exports.getTodos = async (req, res) => {
    try {
        const todos = await todo.findAll();
        res.json(todos);
    }catch(err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

// 특정 ID의 todo 조회
exports.getTodoId = async (req, res) => {
    try {
        console.log(req.params.id);
        const { id } = req.params;
        const Todo = await todo.findOne({
            where: { id },
          }); 
          res.json(Todo);
    }catch(err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}