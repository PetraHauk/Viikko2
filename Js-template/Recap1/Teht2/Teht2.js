
const x1 = +prompt('Anna ensimmäisen pisteen x koordinaatti:');
const y1 = +prompt('Anna ensimmäisen pisteen y koordinaatti:');
const x2 = +prompt('Anna toisen pisteen x koordinaatti:');
const y2 = +prompt('Anna toisen pisteen y koordinaatti:');

const distance= Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

document.querySelector('#distance').innerHTML = `Pisteet ovat ${distance} matkan päässä toisistaan`;
