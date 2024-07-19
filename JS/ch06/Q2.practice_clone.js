// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?
let numStr = '';
for (let i = 1; i <= 1000; i++)
    numStr += i;

let count1 = 0, count2 = 0, count3 = 0;
for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] == '1')
        count1++;
    if (numStr[i] == '2')
        count2++;
    if (numStr[i] == '3')
        count3++;
}
console.log(`${count1}, ${count2}, ${count3} ~`);

let countArr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  // = new Array(10).fill(0)
for (let i = 0; i < numStr.length; i++) {
    let num = parseInt(numStr[i]);
    countArr1[num]++;
}
console.log(countArr1);

let countArr2 = new Array(10).fill(0);
for (let digit of numStr) {
    let num = parseInt(digit);
    countArr2[num]++;
}
console.log(countArr2);


// 2. C:/Workspace/FrontEnd/JS/ch06/Q2.practice.js
//      위 문자열에서 파일명 Q2.practice.js 만 분리하세요.
let path = 'C:/Workspace/FrontEnd/JS/ch06/Q2.practice.js';
let index = path.lastIndexOf('/') + 1;
console.log(path.substring(index));


// 3. 두개의 세자리수를 곱해서 나온 결과가 회문(Palindrome)일 때,
//      가장 큰 회문 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

let maxPal = 0, max1 = 0, max2 = 0;
for (let i = 100; i <= 999; i++) {
    for (let k = 100; k <= 999; k++) {
        let mul = i * k;
        if (isPalindrome(String(mul))) {
            if (mul > maxPal) {
                maxPal = mul, max1 = i, max2 = k;
            }
        }
    }
}
console.log(`${max1} x ${max2} = ${maxPal}`);


// 4. 다음 문장에서 the 단어는 몇번 사용되었는가?
let sample = `the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.`;
let cleanStr = sample.replace(/[-',.]/g, '').toLowerCase();     // 구두점(기호) 제거
console.log(cleanStr);
let strArr = cleanStr.split(' ');   // 배열로 만듦
let count = 0;
for (let word of strArr) {          // 배열의 원소가 'the'면 카운트 값 증가
    if (word == 'the') {
        count++;
    }
}
console.log(count);
