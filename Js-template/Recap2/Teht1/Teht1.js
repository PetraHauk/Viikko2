const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Kiwi'];
console.log('Fruits: ' + fruits)

const num = fruits.length;
console.log('Number of fruits: ' + num)

console.log('This is fruit with index number 2: ' + fruits[2])

const lastIndex = fruits.length - 1;
console.log('This is the last fruit in the array: ' + fruits[lastIndex])

const vegetables = [];
for (let i = 0; i < 3; i++) {
  const vege = prompt('Give a vegetable:');
  vegetables.push(vege);
}
console.log('Vegetables: ' + vegetables)

console.log('The lenght of the vegetables array: ' + vegetables.length)
