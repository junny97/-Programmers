function solution(s1, s2) {
    s1 = new Set(s1)
    s2 = new Set(s2)
    let cro = [...s1].filter(e => s2.has(e))
    return cro.length;
}