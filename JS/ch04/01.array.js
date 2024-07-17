// 배열(Array)

let summerFruits = ['수박', '참외', '포도', '자두', '복숭아'];
console.log(summerFruits);
console.log(typeof summerFruits);   // object, array는 object의 한 형태

// 인덱싱
console.log(summerFruits[0], summerFruits[2], summerFruits[4]);
console.log(summerFruits.length);
console.log(summerFruits[summerFruits.length - 1]);    // 맨 마지막 요소

// 배열에 임의의 타입을 가진 원소들을 사용할 수 있다.
let person = ['James', 27, '남자', '프로그래머', 175.3, ['수박', '포도']];
console.log(person);
// 여러가지 타입을 섞어쓰는 것은 바람직하지 않다.
let personObj = {
    name: 'James', age: 27, gender: '남자', job: '프로그래머',
    height: 175.3, favoriteFruits: ['수박', '포도']
}

// 배열 요소 추가
summerFruits.push('키위');
console.log(summerFruits);

// 배열 요소 제거
summerFruits.splice(4, 1);      // 인덱스가 3인 요소부터 1개 제거
console.log(summerFruits);
