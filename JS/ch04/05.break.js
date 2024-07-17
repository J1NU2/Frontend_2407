// break 반복문 탈출

let sumDice = 0;
let diceArray = [];
while (true) {      // for (;;) 사용 가능
    let dice = Math.ceil(Math.random() * 6);
    diceArray.push(dice);
    sumDice += dice;
    if (sumDice > 21) {
        break;
    }
}
console.log(diceArray);
console.log(sumDice);

// brack는 loop의 한단계만 벗어날 수 있다.
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        if (k == i) {
            break;
        }
    }
    console.log('point A', i);
}
console.log('point B');
