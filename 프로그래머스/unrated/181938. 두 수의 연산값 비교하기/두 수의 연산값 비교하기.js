function solution(a, b) {
    const result1 = parseInt(String(a) + String(b)); 
    const result2 = 2 * a * b;
    
    if (result1 >= result2) {
        return result1;
    } else {
        return result2;
    }
}


console.log(solution(2, 91));
console.log(solution(91, 2)); 
