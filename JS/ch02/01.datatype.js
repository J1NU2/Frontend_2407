//  자바스크립트 자료형 종류

// 1. 문자열(String)
console.log("'text'");
console.log('"text"');
console.log("I'll be back.");

// 특수 문자 : 백슬래시(\) + 문자
// 탭 : Carriage Return(CR, \r)
// 줄바꿈 : New Line (NL, \n)
console.log("\tabc\tdef\"ghi\njkl\\");

// 문자열 연산자(+)
console.log('가나다' + ' ' + '라마바');

// 문자열 선택
let hello = '안녕하세요?';
console.log(hello, hello[0], hello[1]);

// 문자열 길이
// 문자열 : 속성(Attribute), method
console.log(hello.length, hello.charAt(0), hello.charAt(1));

// let a = 'this is 'string''; → 에러 발생
let a = 'this is "string"';

// template literal
console.log(hello + ' 문자열의 길이는 ' + hello.length + ' 입니다.');
console.log(`${hello} 문자열의 길이는 ${hello.length} 입니다.`);

// 2. 숫자(Number)
// 정수형(integer), 실수형(floating point)
let num_a = 3, num_b = 5;
console.log(num_a + num_b, num_a - num_b, num_a * num_b, num_a / num_b, num_b % num_a);
let pi = 0.314159e1;    // 0.314159 x 10 ** 1
let f = 1.3e-8;         // 1.3 x 10 ** -8
console.log(pi, f);
console.log(2 ** 10, 2 ** 20, 2 ** 30);     // 2의10승, 2의20승, 2의30승

// 3. 논리형(Boolean) : True, False
// 비교 연산자(===, !==, >, <, >=, <=, ==, !=)
console.log(num_a > num_b, 10 === 10.0);
console.log(10 == '10', 10 === '10');
// 논리 연산자 (&&, ||)
let x = 10;
console.log(x > 8 || x < 0);
console.log(x > 0 && x < 8);

// 자료형 검사
console.log(typeof hello, typeof(num_a), typeof(true));
