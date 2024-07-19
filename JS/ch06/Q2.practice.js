// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?
console.log('1번 문제');
for (let i = 0; i <= 9; i++) {
    let sum = 0;
    for (let k = 1; k <= 1000; k++) {
        const num = k.toString();
        for (let str of num) {
            if (str === i.toString()) {
                sum++;
            }
        }
    }
    console.log(`${i} : ${sum}번`);
}
console.log('\n');

// 2. C:/Workspace/FrontEnd/JS/ch06/Q2.practice.js
//      위 문자열에서 파일명 Q2.practice.js 만 분리하세요.
console.log('2번 문제');
let link = 'C:/Workspace/FrontEnd/JS/ch06/Q2.practice.js';
let separationLink = '';
separationLink += link.substring(30)
console.log(`${separationLink}\n`);


// 3. 두개의 세자리수를 곱해서 나온 결과가 회문(Palindrome)일 때,
//      가장 큰 회문 수와 어떤 수를 곱해서 나온 결과인가?
console.log('3번 문제');
let a = 0, b = 0, palMax = 0;
function isPalindrome(n) {
    return n.toString() === n.toString().split('').reverse().join('');
}
for (i = 100; i <= 999; i++) {
    for (k = 100; k <= 999; k++) {
        let sum = i * k;
        if (isPalindrome(sum) && sum > palMax) {
            palMax = sum;
            a = i;
            b = k;
        }
    }
}
console.log(`가장 큰 회문 : ${palMax}, 곱한 수 : ${a} ${b}\n`);


// 4. 다음 문장에서 the 단어는 몇번 사용되었는가?
console.log('4번 문제');
let sample = `the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.`;
// match() 사용
let theCount = sample.match(/the/g)
console.log(`the의 개수 : ${theCount.length}개`);
