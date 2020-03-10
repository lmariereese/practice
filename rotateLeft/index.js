/*
  https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays
*/

function rotLeft(arr, d) {
  let counter = 0;
  while (counter < d) {
    arr.push(arr.shift())
    counter++;
  }
  return arr;
}
