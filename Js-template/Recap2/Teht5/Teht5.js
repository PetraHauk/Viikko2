function sortArray(array, order) {
  if (order === 'asc')
    array.sort((a, b) => a - b);
  else if (order === 'desc')
    array.sort((a, b) => b - a);
  return array;
}

const list = [1,25,12,5,16,2,17,11];
console.log(list);

const sortedASC = sortArray([...list], 'asc');
const sortedDESC = sortArray([...list], 'desc');
console.log(sortedASC);
console.log(sortedDESC);
