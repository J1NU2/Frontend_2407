// Array 객체 : 비파괴적() 파괴적(*)

// 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 배열 메소드
// concat() : 서로 연결
let newFruits = fruits.concat('mango', 'orange');
console.log(newFruits, fruits);

// join() : 문자열로 연결
console.log(`차 종류는 ${cars.join(', ')} 입니다.`);

// pop() * : 맨 뒤에 있는 요소를 꺼냄
console.log(cars.pop());    // 배열의 마지막 요소인 BMW를 꺼낸 뒤
console.log(cars);          // 배열에서 BMW 제거

// push() * : 맨 뒤에 요소를 추가
cars.push('Volvo');
cars.push('Hyundai');
console.log(cars);

// reverse() * : 순서 뒤집기
cars.reverse();
console.log(cars);

// sort() * : 정렬
cars.sort();            // 문자열을 기준으로, 오름차순 정렬이 기본
console.log(cars);

let numbers = [34, 25, 89, 7, 45, 55, 19];

// 오름차순(Ascending order) : (a, b) => a - b
// numbers.sort(function(a, b) {return a - b;});
numbers.sort((a, b) => a - b);
console.log(numbers);
// 내림차순(Descending order) : (a, b) => b - a
// numbers.sort(function(a, b) {return b - a;});
numbers.sort((a, b) => b - a);
console.log(numbers);

// slice()
console.log(fruits);
console.log(fruits.slice(1));
