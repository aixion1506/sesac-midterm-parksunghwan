const {todo} = require ('../models/index');

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