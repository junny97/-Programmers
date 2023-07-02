function solution(my_string, s, e) {
  let answer = '';
  let substr = my_string.substring(s, e + 1);
  let reversed = substr.split('').reverse().join('');
  

  return my_string.substring(0, s) + reversed + my_string.substring(e + 1);
  
  
}