function solution(array, n) {
  let count = 0;
  for (let x of array) {
    if (x === n) {
      count += 1;
    }
  }
  return count;
}