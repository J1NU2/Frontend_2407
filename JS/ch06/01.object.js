// 객체(Object)

// 1. 자료구조의 의미 : Python의 딕셔너리(Dictionary), Java의 맵(Map)과 유사
// Object{Key: Value} 의 조합
let personArray = ['James', 27, '남자', '프로그래머', 175.5];
let personObject = {
    name: 'James',
    age: 27,
    gender: '남자',
    job: '프로그래머',
    height: 175.5
};

// 2. 객체 : 속성(Attribute)과 메소드(Method) 사물을 묘사
const pet = {
    name: '구름',
    eat: function(food = '고구마') {
        console.log(`${food} 을/를 좋아한다.`);
    }
};
console.log(pet.name);      // 객체의 속성
pet.eat();                  // 객체의 메소드

// 객체에 대한 접근
console.log(personObject.name);     // 보통 일반적인 사용 방법
console.log(personObject['job']);   // 드문 방식
let key = 'job';
console.log(personObject[key]);     // key 값을 변수로 사용하는 방법

// 배열은 객체의 특수한 형태
console.log(typeof personArray);
console.log(typeof personObject);

let fruitArray = ['사과', '배', '감', '밤'];
let fruitObject = {
    0: '사과',
    1: '배',
    2: '감',
    3: '밤'
};
