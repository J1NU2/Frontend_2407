// 7. 구구단

for (let i = 2; i < 10; i++) {
    for (let k = 1; k < 10; k++) {
        let sum = i * k;
        console.log(`${i} x ${k} = ${sum}`);
    }
    console.log('\n');
}

for (let i = 2; i <= 9; i++) {
    for (let k = 1; k <= 9; k++) {
        console.log(`${i} x ${k} = ${i*k}`);
    }
    console.log();
}
