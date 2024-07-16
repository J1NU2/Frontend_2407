// 현재 날짜 및 시간
let today = new Date();
console.log(today);     // 2024-07-16T01:09:59.504Z
let hour = today.getHours();
console.log(hour);      // 현재 시간
console.log(new Date().getHours());

if (hour < 12)
    console.log(`오전 ${hour}시 ${today.getMinutes()}분`);
else
    console.log(`오후 ${hour - 12}시 ${today.getMinutes()}분`);

console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
