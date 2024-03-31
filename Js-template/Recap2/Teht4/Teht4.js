function sortArray(array) {
  array.sort((a, b) => a - b);
  return array;
}

const list = [1,25,12,5,16,2,17,11];
console.log(list);

const sorted = sortArray([...list]);
console.log(sorted);
