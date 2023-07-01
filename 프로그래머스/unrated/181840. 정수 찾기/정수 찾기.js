function solution(num_list, n) {
  const result = num_list.filter(num => num === n);
  return result.length > 0 ? 1 : 0;
}