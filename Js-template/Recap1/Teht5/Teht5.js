const number = +prompt('Anna positiivinen numero:');
let sum = 0;

for (let i = 0; i <= number; i++) {
  sum += i;
}

document.querySelector('#target').innerHTML = 'Summa: ' + sum;
