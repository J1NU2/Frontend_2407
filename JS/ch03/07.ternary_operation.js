// 3항 연산자 (Ternary Operation)

let dice = Math.ceil(Math.random() * 6);    // 1 ~ 6 사이의 랜덤한 값
let result = '';

if (dice % 2 == 0) {
    result = '짝수';
} else {
    result = '홀수';
}

console.log(`${dice} 은/는 ${result}입니다.`);

// 조건식 ? 참 : 거짓
let evenOdd = dice % 2 == 0 ? '짝수' : '홀수';
console.log(`${dice} 은/는 ${evenOdd}입니다.`);

let smallBig = dice <= 3 ? '작은 수' : '큰 수';
console.log(`${dice} 은/는 ${smallBig}입니다.`);

let score = Math.ceil(Math.random() * 50) + 50;
let sign = score % 10 >= 7 ? '+' : score % 10 >= 3 ? '0' : '-';

switch(parseInt(score / 10)) {
    case 10:
        grade = 'A+';
        break;
    case 9:
        grade = 'B' + sign;
        break;
    case 8:
        grade = 'C' + sign;
        break;
    case 8:
        grade = 'D' + sign;
        break;
    default:
        grade = 'F';
        break;
}
console.log(`점수 : ${score}, 학점 : ${grade}`);
