// 백준 2480 (주사위 세개)

let firstDice = Math.ceil(Math.random() * 6);
let secondDice = Math.ceil(Math.random() * 6);
let thirdDice = Math.ceil(Math.random() * 6);
let max = 0;
let prize = 0;

if (firstDice == secondDice == thirdDice) {
    max = firstDice;
    prize = 10000 + firstDice * 1000;
} else if (firstDice == secondDice) {
    max = firstDice;
    prize = 1000 + firstDice * 100;
} else if (secondDice == thirdDice) {
    max = secondDice;
    prize = 1000 + secondDice * 100;
} else if (firstDice == thirdDice) {
    max = thirdDice;
    prize = 1000 + thirdDice * 100;
} else {
    if (firstDice > secondDice) {
        if (firstDice > thirdDice) {
            max = firstDice;
            prize = firstDice * 100;
        } else {
            max = thirdDice;
            prize = thirdDice * 100;
        }
    } else if (secondDice > thirdDice) {
        max = secondDice;
        prize = secondDice * 100;
    } else {
        max = thirdDice;
        prize = thirdDice * 100;
    }
}
console.log(`주사위 : ${firstDice} ${secondDice} ${thirdDice}`);
console.log(`가장 높은 숫자 : ${max}, 상금 : ${prize}원`);
