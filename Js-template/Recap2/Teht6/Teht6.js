'use strict';


function lajiteluRating(a, b) {
  return b.arvio - a.arvio;
}

const lkm = prompt('Monta leffaa syötät?');

const leffat = [];

for (let i = 0; i < lkm; i++) {
  const nimi = prompt('Leffan nimi: ');
  const arvio = +prompt('Monta tähteä annat?');
  const leffa = {
    nimi: nimi,
    arvio: arvio,
  };
  leffat.push(leffa);
}

leffat.sort(lajiteluRating);

console.log(leffat);

for (const [index, leffa] of leffat.entries()) {
  const listItem = `${leffa.nimi}, ${leffa.arvio}`;
  const html = index === 0 ? `<li><b>${listItem}</b></li>` : `<li>${listItem}</li>`;
  document.querySelector('#target').innerHTML += html;
}
