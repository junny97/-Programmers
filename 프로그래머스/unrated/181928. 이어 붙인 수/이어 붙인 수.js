function solution(num_list) {
  var oddNumber = num_list.filter(num => num % 2 === 1).join("");
  var evenNumber = num_list.filter(num => num % 2 === 0).join("");
  
  var sum = parseInt(oddNumber) + parseInt(evenNumber);
  return sum;
}