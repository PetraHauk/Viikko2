const xLenght = +prompt('Anna kolmion ensimmäinen sivu: ');
const yLength = +prompt('Anna kolmion toinen sivu: ');
const zlength = +prompt('Anna kolmion kolmas sivu: ');

if (xLenght === yLength && xLenght === zlength) {
  document.querySelector('#target').innerHTML = 'Antamasi kolmio on tasakulmainen';
} else if (xLenght === yLength || yLength === zlength || xLenght === zlength) {
  document.querySelector('#target').innerHTML = 'Antamasi kolmio on tasasivuinen';
} else if (xLenght !== yLength && yLength !== zlength && xLenght !== zlength) {
  document.querySelector('#target').innerHTML = 'Antamasi kolmio on erisivuinen';
} else {
  document.querySelector('#target').innerHTML = 'Virheellinen syöte';
}

