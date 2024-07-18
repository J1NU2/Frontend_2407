// 분산(variance)

// 각 수의 제곱을 더하기
function sumOfSquare(...arr) {
    let sum = 0;
    for (let num of arr) {
        num *= num;
        sum += num;
    }
    return sum;
}
console.log(sumOfSquare(1, 2, 3, 4, 5));

// 각 수를 더하고 제곱하기
function squareOfSum(...arr) {
    let square = 0;
    for (let num of arr) {
        square += num;
    }
    return square *= square;
}
console.log(squareOfSum(1, 2, 3, 4, 5));

let arr = [1, 2, 3, 4, 5];
// let variance = sumOfSquare(arr) / arr.length - squareOfSum(arr) / arr.length ** 2;
// console.log(variance);
