// 반복문(while문)

// 조건을 변화하는 실행문이 반드시 필요하다.
// 만약 없다면, 무한 루프(loop)

let summerFruits = ['수박', '참외', '포도', '자두'];
let index = 0;
while (index < summerFruits.length) {
    console.log(summerFruits[index]);
    index++;
}

// 주사위를 던진 합이 21을 초과할 때 루프(loop) 탈출
// 그간 던진 주사위 눈을 출력
let sumDice = 0;
let diceArray = [];
while (sumDice <= 21) {
    let dice = Math.ceil(Math.random() * 6);
    diceArray.push(dice);
    sumDice += dice;
}
console.log(diceArray);
console.log(sumDice);
