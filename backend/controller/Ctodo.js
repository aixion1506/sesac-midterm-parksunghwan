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
          if (!Todo) return res.json({'message': 'Todo not found'});
          res.json(Todo);
    }catch(err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}


// 특정 ID의 Todo 수정
exports.patchTodoId = async (req, res) => {
    try {
        console.log(req.params.id);
        const { id } = req.params;
        const { done } = req.body;

        const updatedTodo = await todo.update(
            // 무엇을 바꾸는지?
            { done },
            // 누구를 바꾸는지?
            { where: {id}}
        );

        const Todo = await todo.findOne({
            where: { id },
          }); 
          if (!Todo) return res.json({'message': 'Todo not found'});
          res.json(Todo);
        // if (!updatedTodo) return res.status(500).send('message: Todo not found');
        // res.json(updatedTodo);

      
    } catch (err) {
        console.log("message: Todo not found")
        res.status(500).send('Internal Server Error');
    }
    
}

// 특정 ID의 Todo 삭제
exports.deleteTodoId =  async (req, res) => {
    try {
        const { id } =req.params;
        const isDeleted = await Player.destroy({
            where: {id}
        });
        console.log(isDeleted); // 1

        if(isDeleted) return res.send(true);
        else return res.send(false);
    } catch (err) {
        console.log("message: Todo not found")
        // res.status(500).send('message: Todo not found');
        // res.status(500).send('Internal Server Error');
    }
}