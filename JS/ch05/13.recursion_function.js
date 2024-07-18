// 재귀 함수(Recursion Function)

function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}
console.log(factorial(10));

// ! (팩토리얼, factorial)
// n! = n * (n - 1)!, 단 n=0 일 경우에는 n=1
function facto(num) {
    if (num == 0) {
        return 1;
    }
    return num * facto(num - 1);
}
console.log(facto(10));

// 피보나치수열(Fibonacci)
// f(n) = f(n-1) + f(n-2), n >= 2
// f(0) = 1, f(1) = 1
function fibonacci(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(10));

let fiboArray = [];
for (let i = 0; i < 20; i++) {
    fiboArray.push(fibonacci(i));
}
console.log(fiboArray);
