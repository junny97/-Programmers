function solution(arr) {
    const answer = [];
    const stack = [];

    for (const num of arr) {
        if (stack.length === 0 || stack[stack.length - 1] !== num) {
            stack.push(num);
        }
    }

    return stack;
}

const arr1 = [1, 1, 3, 3, 0, 1, 1];
const arr2 = [4, 4, 4, 3, 3];

console.log(solution(arr1)); // [1, 3, 0, 1]
console.log(solution(arr2)); // [4, 3]
