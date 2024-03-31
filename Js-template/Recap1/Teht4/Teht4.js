const score = +prompt('Anna kurssin tehtäväpisteet:')

if (score < 40) document.querySelector('#target').innerHTML = 'Arvosanasi: 0'
else if (score < 52) document.querySelector('#target').innerHTML = 'Arvosanasi: 1'
else if (score < 64) document.querySelector('#target').innerHTML = 'Arvosanasi: 2'
else if (score < 76) document.querySelector('#target').innerHTML = 'Arvosanasi: 3'
else if (score < 88) document.querySelector('#target').innerHTML = 'Arvosanasi: 4'
else document.querySelector('#target').innerHTML = 'Arvosanasi: 5'
