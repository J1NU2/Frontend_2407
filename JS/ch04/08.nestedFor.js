// 중첩 반복문(nested for문)

// 1. 별 다섯개를 여러줄 그리기
for (let i = 0; i < 6; i++) {
    let line = '';
    for(let k = 0; k < 5; k++) {
        line += '* ';
    }
    console.log(line);
}

// 2. 디지털 시계를 매시 10분마다 표시하기
for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
        if (minute % 10 == 0) {
            console.log(`${hour}:${minute}`);
        }
    }
}

// 3. 별을 삼각형 모양으로 만들기 1
for (let i = 0; i < 5; i++) {
    let line = '';
    for (let k = 0; k < i + 1; k++) {
        line += '* ';
    }
    console.log(line);
}

// 4. 별을 삼각형 모양으로 만들기 2
for (let i = 5; i >= 1; i--) {
    let line = '';
    for (let k = 0; k < i; k++) {
        line += '* ';
    }
    console.log(line);
}

// 5. 별을 피라미드 모양으로 만들기
for (let i = 1; i < 6; i++) {
    let line = '';
    for (let j = 5; j > i; j--) {
        line += ' ';
    }
    for (let k = 0; k < i; k++) {
        line += '* ';
    }
    console.log(line);
}

// 6. 주사위 눈으로 6x6 배열 만들기
/*
let diceArray = [
    [1,3,4,6,2,4], [2,3,6,1,1,4], [5,4,4,2,3,6],
    [1,3,5,5,4,1], [2,2,2,4,5,3], [1,1,6,6,4,2]
];
console.log(diceArray);
*/
let diceArray = [];
for (let i = 0; i < 6; i++) {
    let line = [];
    for (let k = 0; k < 6; k++) {
        line.push(Math.ceil(Math.random() * 6));
    }
    diceArray.push(line);
}
console.log(diceArray);

// 7. 다이아몬드 만들기
let N = 4;      // 다이아몬드의 중앙(별이 가장 많은 위치)
for (let i = 0; i <= N; i++) {
    let line = '';
    for (let k = 0; k < N - i; k++) {
        line += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
    let line = '';
    for (let k = 0; k < N - i; k++) {
        line += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        line += '*';
    }
    console.log(line);
}
