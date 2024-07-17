// 12의 약수(divisor) 구하기
// 12의 약수들을 배열에 추가하기

let num = 12;
let divisors = [];

for (let i = 1; i <= 12; i++) {
    if (num % i == 0) {
        divisors.push(i);
    }
}
console.log(divisors);

// 소수(prime number) 판별하기
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log(`${num} : 해당 숫자는 소수가 아니다.`);
        break;
    }
}

let numbers = [5, 11, 17, 23, 27];
for (num of numbers) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(`${num} : 해당 숫자는 소수가 아니다.`);
            break;
        }
    }
}
