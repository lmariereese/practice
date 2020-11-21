// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let currentMin = array[i];
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < currentMin) {
        currentMin = array[j];
        minIdx = j;
      }
    }
    array[minIdx] = array[i];
    array[i] = currentMin;
  }
  return array;
}

/*
function selectionSort(array) {
  function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    let temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  return array;
}
}
*/
