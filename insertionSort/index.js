// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort


// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let pointer = i - 1;
    let curr = i;
    while ((pointer >= 0) && (array[pointer] > array[curr])) {
      let temp = array[pointer];
      array[pointer] = array[curr];
      array[curr] = temp;
      pointer--;
      curr--;
    }
  }
  return array;
}
