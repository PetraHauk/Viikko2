// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: false,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: false,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

function showList() {
  list.innerHTML = '';

  for (let todo of todoList) {
    const item = document.createElement('li');

    const checker = document.createElement('input');
    checker.type = 'checkbox';
    checker.id = `todo-${todo.id}`;
    if (todo.completed) {
      checker.checked = true;
    }

    checker.addEventListener('change', function (evt) {
      todo.completed = checker.checked
      console.log(todoList)
    });

    const label = document.createElement('label');
    label.htmlFor = `todo-${todo.id}`;
    label.textContent = todo.task;

    const deletebutton = document.createElement('button')
    deletebutton.textContent = 'Delete';
    deletebutton.addEventListener('click', function (evt) {
      list.removeChild(item);
      const id = todoList.indexOf(todo);
      todoList.splice(id, 1)
      console.log(todoList)
    });

    item.appendChild(checker);
    item.appendChild(label);
    item.appendChild(deletebutton)

    list.appendChild(item);
  }
}


function openModal() {
  dialog.showModal();
}

function closeModal(){
  dialog.close();
}

function modal(evt) {
  evt.preventDefault()
  const input = form.querySelector('input[type="text"]');
  const newTask = input.value.trim()
  if (newTask){
    const newItem = {
      id: todoList.length + 1,
      task: newTask,
      completed: false
    }
    todoList.push(newItem);
    console.log(todoList);
    showList();
    closeModal();
    input.value = '';
  }
}

//------- Main start here ------

const list = document.querySelector('ul');
const addbutton = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');

addbutton.addEventListener('click', openModal);

form.addEventListener('submit',modal);

showList();

