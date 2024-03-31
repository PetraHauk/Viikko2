const numList = [];
let input;

do {
  input = prompt('Enter a number (or "done" to finish):');
  if (input !== 'done') {
    const num = parseInt(input);
    console.log(num);
    numList.push(num);
  }
} while (input !== 'done')

const numprint = document.createElement('p');
document.body.appendChild(numprint);
console.log(numList)
console.log(numprint)

for (const number of numList) {
  if (number % 2 === 0) {
    numprint.textContent += number + ' | ';
  }
}
