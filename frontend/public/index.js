const TodoForm = document.getElementById('Todo-Form');
const TodoInput = TodoForm.querySelector('input');
const TodoList = document.getElementById('Todo-List');


const Todos_Key = 'todos';


let Todos = [];


const SavingTodos = () => {
  localStorage.setItem(Todos_Key, JSON.stringify(Todos));
};

const getTodos = (newTodo) => {
    fetch('https://jsonplaceholder.typicode.com/todos/2', {
        metho: 'GET',
        headers:{'Content-Type' : 'application/json'},
    })
        .then(response => response.json())
        .then(data => console.log(data))

        addTodo(getTodos());
}



const DeleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  Todos = Todos.filter((todo) => todo.id !== parseInt(li.id));
  SavingTodos();
};


const addTodo = (newTodo) => {
  const div = document.createElement('div');
  div.id = newTodo.id;
  const checkbox = document.createElement('button');
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const Button = document.createElement('button');
  Button.innerText = 'X';
  Button.addEventListener('click', DeleteTodo);
  div.appendChild(checkbox);
  div.appendChild(span);
  div.appendChild(Button);
  TodoList.appendChild(div);
};


const HandleTodoSubmit = (event) => {
  event.preventDefault();
  const NewTodo = TodoInput.value;
  TodoInput.value = '';
  const NewTodoObj = {
    text: NewTodo,
    id: Date.now(),
  };
  Todos.push(NewTodoObj);
  addTodo(NewTodoObj);
  SavingTodos();
};

TodoForm.addEventListener('submit', HandleTodoSubmit);


const TodoDatas = localStorage.getItem(Todos_Key);
if (TodoDatas !== null) {
  const ParsedTodos = JSON.parse(TodoDatas);
  Todos = ParsedTodos;
  ParsedTodos.forEach(addTodo);
}


getTodos

window.addEventListener("DOMContentLoaded", (event) => {
    getTodos()
  });
  