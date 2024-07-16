// 백준 2884 (알람 시계)

const alarmHour = 10, alarmMin = 10;
let hour = 0, min = 0;
let h = 0, m = 0;
// 5시55분

if (alarmMin >= 45) {
    hour = alarmHour;
    min = alarmMin - 45;
} else {
    if (alarmHour == 0) {
        hour = 24 - 1;
        min = 60 + (alarmMin - 45);
    } else {
        hour = alarmHour - 1;
        min = 60 + (alarmMin - 45);
    }
}
console.log(`${hour}시 ${min}분`);

// 개선
if (alarmMin >= 45) {
    hour = alarmHour;
    min = alarmMin - 45;
} else {
    h = (24 + alarmHour - 1) % 24;
    m = 60 + (alarmMin - 45);
}
console.log(`${h}시 ${m}분`);
