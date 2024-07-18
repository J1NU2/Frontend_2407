// 배열에 따른 고급 함수

// 콜백함수 : (value:string, index:number, array:string[])
// 화살표 함수 : => : function 키워드를 대신하여 간단한 형태로 사용하는 함수

// forEach
// function(value, index, array)
let fruits = '수박,참외,복숭아,토마토,포도'.split(',');
console.log(fruits);

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit, index) => {
    console.log(`인덱스 : ${index}, 아이템 : ${fruit}`);
});

// map
// function(value, index, array)
let numbers = [11, 22, 33, 44, 55];
numbers.map((num) => {
    console.log(`${num}, 제곱 : ${num * num}`);
});

// filter : 리턴값이 true인 것만 추출
// 글자수가 3인 과일만 선택
let newFruits = fruits.filter((fruit) => fruit.length == 3)
console.log(newFruits);
