// 여러개의 값 중에 하나를 선택

let score = Math.ceil(Math.random() * 60) + 40;
let grade = '';

switch(parseInt(score / 10)) {      // score 값은 5,6,7,8,9,10으로 변환
    case 10:
    case 9:
        grade = 'A';
        break;
    case 8:
        grade = 'B';
        break;
    case 7:
        grade = 'C';
        break;
    case 6:
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log(`${score}점, ${grade}학점 입니다.`)

// +(7이상) 0(3~6) -(2이하)

let num = score % 10
let sign = '';

/*
if (grade == 'F')
    grade = 'F';
else if (num >= 7)
    sign = '+';
else if (7 > num >= 3)
    sign = '0';
else
    sign = '-';
*/

switch (grade != 'F') {
    case num >= 7:
        sign = '+';
        break;
    case num >= 3:
        sign = '0';
        break;
    default:
        sign = '-';
        break;
}

if (grade == 'F')
    console.log(`${score}점, ${grade}학점 입니다.`)
else
    console.log(`${score}점, ${grade}${sign}학점 입니다.`)
