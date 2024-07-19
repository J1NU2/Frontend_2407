// 표준 내장 객체 : 숫자(Number)
let num = 273;
let numberFromConstructor = new Number(273);
console.log(num, numberFromConstructor);


const pi = Math.PI;
console.log(pi);
console.log(pi.toFixed(5));             // 소수점 n자리까지 표기하기
console.log((1000*pi).toExponential()); // 3.141592653589793e+3
console.log(pi.toPrecision());          // 3.14, 유효숫자 3

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);    // -Infinity Infinity

// NaN (Not a Number)
let a = parseInt('string');
console.log(Number.isNaN(a));

console.log(Number.isFinite(9007199254740991), Number.isFinite(Infinity));
