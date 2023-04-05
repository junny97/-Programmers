function solution(my_string, letter) {
 return my_string.split('').map(str => str.replace(letter, '')).join('')
}