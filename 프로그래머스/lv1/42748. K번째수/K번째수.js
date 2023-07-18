function solution(array, commands) {
  return commands.map(([start, end, k]) => {
    const answer = array.slice(start - 1, end); 
    answer.sort((a, b) => a - b);
    return answer[k - 1];
  });
}