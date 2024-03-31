const num = +prompt('Anna positiivinen numero:');

const table = document.querySelector('#table');
for (let i = 1; i <= num; i++) {
  const row = document.createElement('tr');

  for (let j = 1; j <= num; j++) {
    const product = i * j;
    const cell = document.createElement('td');
    cell.textContent = product;

    row.appendChild(cell);
  }

  table.appendChild(row);
}
