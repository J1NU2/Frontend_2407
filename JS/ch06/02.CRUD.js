// C:Create, R:Read/Retrieve, U:Update, D:Delete

// 빈 객체 생성
let obj = {};

// 속성 추가
obj['name'] = '우피';
obj.weight = 10;
console.log(obj);

// 속성 수정
obj.weight = 12;
console.log(obj);

// 속성 삭제
delete obj.weight;
console.log(obj);

// 출력
console.log(obj.toString());    // 객체를 문자열로 변환

// 반복문
obj.weight = 9;
obj.height = 50;
for (let key in obj) {
    console.log(key, obj[key]);
}
