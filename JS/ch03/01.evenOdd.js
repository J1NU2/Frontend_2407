// Math.random()   // 0.0 ~ 0.9999 중 임의의 값 생성
// Math.ceil()     // 소수점 이하 자릿수를 올려 정수로 만들어 줌

let num = Math.ceil(Math.random() * 6);     // 1 ~ 6 사이 값 (주사위 값)

// 홀짝
if (num % 2 == 0) {
    console.log(`${num}, 해당 숫자는 짝수 입니다.`);
} 
if (num % 2 == 1) {
    console.log(`${num}, 해당 숫자는 홀수 입니다.`);
}

// if-else 사용
num = Math.ceil(Math.random() * 6);

if (num % 2 != 0) {
    console.log(`${num}, 해당 숫자는 홀수 입니다.`);
} else {
    console.log(`${num}, 해당 숫자는 짝수 입니다.`);
}

// 조건문 안에 실행문이 하나만 있는 경우 { } 생략 가능
num = Math.ceil(Math.random() * 6);
if (num % 2 != 0)
    console.log(`${num}, 해당 숫자는 홀수 입니다.`);
else
    console.log(`${num}, 해당 숫자는 짝수 입니다.`);

// 1,2,3 작은 수 or 4,5,6 큰 수
num = Math.ceil(Math.random() * 6);
if (num <= 3)
    console.log(`${num}, 해당 숫자는 작은 수 입니다.`);
else
    console.log(`${num}, 해당 숫자는 큰 수 입니다.`);
