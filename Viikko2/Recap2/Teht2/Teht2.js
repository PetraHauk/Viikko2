const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = +prompt('Anna numero: ');
  numbers.push(num);
}

document.querySelector('#target').innerHTML = 'Lista: ' + numbers;

const targetnum = +prompt('Anna tarkistettava numero:')

if (numbers.includes(targetnum)) {
  document.querySelector('#check').innerHTML += `Number ${targetnum} is in the array`;
} else {
  document.querySelector('#check').innerHTML += `Number ${targetnum} is not in the array`;
}

numbers.pop()

document.querySelector('#utarget').innerHTML = 'Lista: ' + numbers;

numbers.sort()
document.querySelector('#starget').innerHTML = 'Lista: ' + numbers;

