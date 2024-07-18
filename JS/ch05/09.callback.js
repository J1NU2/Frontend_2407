// 콜백함수(callback)

function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback();
    }
}

const cb = function() {
    console.log('함수 호출');
}

callThreeTimes(cb);

callThreeTimes(function() {
    console.log('익명 함수 호출');
});

callThreeTimes(() => {
    console.log('화살표 함수 호출');
});
