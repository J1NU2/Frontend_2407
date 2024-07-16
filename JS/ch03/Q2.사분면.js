// 백준 14681 (사분면 고르기)

let x = Math.ceil(Math.random() * 20);
let y = Math.ceil(Math.random() * 20);
let quadrant = 0;

// 3항 연산자
// 랜덤으로 양수/음수 지정
x *= Math.random() > 0.5 ? 1 : -1;
y *= Math.random() > 0.5 ? 1 : -1;

if (x > 0 && y > 0) {
    quadrant = 1;
} else if (x < 0 && y > 0) {
    quadrant = 2;
} else if (x < 0 && y < 0) {
    quadrant = 3;
} else if (x > 0 && y < 0) {
    quadrant = 4;
} else {
    quadrant = 0;
}
console.log(`${x} ${y}, Quadrant : ${quadrant}`);

// if문
/*
if (Math.random() > 0.5) {
    x *= 1
} else {
    x *= -1
}
if (Math.random() > 0.5) {
    y *= 1
} else {
    y *= -1
}
console.log(x, y);
*/

// 실수 절대값 구하기
// x = 2.3일 때
// Math.abs(x - 2.3) < 1e-8
