const TodoForm = document.getElementById('Todo-Form');
const TodoInput = TodoForm.querySelector('input');
const TodoList = document.getElementById('Todo-List');


const Todos_Key = 'todos';


let Todos = [];


const SavingTodos = () => {
  localStorage.setItem(Todos_Key, JSON.stringify(Todos));
};


const DeleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  Todos = Todos.filter((todo) => todo.id !== parseInt(li.id));
  SavingTodos();
};


const addTodo = (newTodo) => {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const Button = document.createElement('button');
  Button.innerText = '❌';
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  Button.addEventListener('click', DeleteTodo);
  li.appendChild(Button);
  li.appendChild(span);
  TodoList.appendChild(li);
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
