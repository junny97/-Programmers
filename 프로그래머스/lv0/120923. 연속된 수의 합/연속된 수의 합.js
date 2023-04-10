function solution(num, total){
  const answer = []
  const first = Math.ceil(total / num) - Math.floor(num/2)
  const secound = Math.floor(total / num) + Math.floor(num/2)
  for(let i=first; i<=secound; i++){
    answer.push(i)
  }
  return answer
}