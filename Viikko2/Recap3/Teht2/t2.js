// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
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

const list = document.querySelector('ul');

for (let todo of todoList) {
  const item = document.createElement('li');

  const checker = document.createElement('input');
  checker.type = 'checkbox';
  checker.id = `todo-${todo.id}`;
  if (todo.completed) {
    checker.checked = true;
  }

  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  item.appendChild(checker);
  item.appendChild(label);

  list.appendChild(item);
}
