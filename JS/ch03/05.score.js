// 다중 if-else

// 41 ~ 100 사이의 랜덤한 정수
let score = Math.ceil(Math.random() * 60) + 40;
let grade = '';

if (score >= 90)
    grade = 'A';
else if(score >= 80)
    grade = 'B';
else if(score >= 70)
    grade = 'C';
else if(score >= 60)
    grade = 'D';
else
    grade = 'F';

console.log(`${score}점, ${grade}학점 입니다.`)

// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어지면 Buzz, 둘 다 나누어지면 FizzBuzz
// 아무것도 아니라면 숫자 출력

let num = Math.ceil(Math.random() * 100);

if (num % 5 == 0 && num % 7 == 0)
    console.log(`${num} : FizzBuzz`);
else if (num % 5 == 0)
    console.log(`${num} : Fizz`);
else if (num % 7 == 0)
    console.log(`${num} : Buzz`);
else
    console.log(`${num}`);
