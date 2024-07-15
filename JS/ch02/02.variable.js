// 상수(Constant)와 변수(Variable)

// 상수(const) : 변하지 않는 항상 같은 수
const pi = 3.141592;
let radius = 10;
console.log(`반지름이 ${radius}인 원의 둘레는 ${2 * pi * radius}, 면적은 ${pi * radius ** 2}입니다.`);

// pi = 3.1415926535;       // 상수에 새로 값을 할당하면 에러 발생

// 변수(let) : 변할 수 있는 수, 전역변수(var) 로컬변수(let)
radius = 5;                 // 변수는 값이 변경될 수 있다.

function area() {
    let radius = 5;
    return pi * radius ** 2;
}

// 복합 대입 연산자(+= -= *= /= %=)
let a = 0, str = '';
a += 1; a += 2; a += 3;
console.log(a);
str += 'ABCDE';
str += 'FGHIJ';
console.log(str);

// 증감 연산자 (변수++, ++변수, 변수--, --변수)
let x = 0, y = 0;
console.log(x++, ++y);  // post-increment(조회 후 증가) pre-increment(조회 전 증가)
console.log(x, y);
console.log(x--, --y);  // post-decrement(조회 후 감소) pre-decrement(조회 전 감소)
console.log(x, y);

// 4. undefined 자료형
let c;
console.log(typeof(abc), typeof(c));    // 선언하지 않거나, 값을 초기화하지 않은 변수

// 자료형 변환
console.log(Number('123'), parseInt('123'), typeof Number('123'));
console.log(String(123), typeof String(123));
console.log(Boolean(1), typeof Boolean(1));
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined)); // false

// 자동 자료 변환
console.log("ABC" + 100 + true);    // 작은 것이 큰 것으로 자동 변환
console.log(100 + true);
console.log(typeof !!x);

// 인치를 센치로 변환
let inch = '32';
console.log(2.54 * Number(inch));
