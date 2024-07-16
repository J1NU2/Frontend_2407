// 생년월일에 따른 나이 계산

const bYear = 1991, bMonth = 12, bDay = 5;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;      // JS는 월에 1을 더해줘야 함
let tDay = today.getDate();
let age = 0;

// 현재 월이 생월보다 작은 경우
// 현재 월이 생월보다 큰 경우
// 현재 월과 생월이 같은 경우 : 현재일과 생일을 비교

if (tMonth < bMonth) {
    age = tYear - bYear - 1;
} else if (tMonth > bMonth) {
    age = tYear - bYear;
} else if (tMonth == bMonth) {
    if (tDay <= bDay) {
        age = tYear - bYear - 1;
    } else {
        age = tYear - bYear;
    }
}
console.log(`생일 : ${bYear}-${bMonth}-${bDay}, 나이 : ${age}`);
