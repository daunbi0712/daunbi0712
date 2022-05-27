const clockContainer = document.querySelector('.app-clock');
const clockTitle = clockContainer.querySelector('h1');
function appendzero(i) {
    if(i < 10) i = '0' + i;
    return i;
}

function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    // let second = date.getSeconds();
    

    hour = appendzero(hour);
    minute = appendzero(minute);
    // second = appendzero(second);

    clockTitle.innerText = `${hour}:${minute}`
}

// 계속 시간을 업데이트
function init() {
    getTime();
    setInterval(getTime, 1000)
    //1000밀리초(milisecond)마다 get time 함수 호출
    //1000ms -> 1s
}

init();

// 실습: 초 추가하시오.
// 업그레이드할 내용 : 24시간 -> 12시간 형식으로 전환
// 예 13:25 -> 오후 01:25