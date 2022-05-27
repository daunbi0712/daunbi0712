// 1. local storage에 name이 있는지 확인하고
// 1-1. 있으면 인사말 출력
// 1-2. 없으면 name 입력 받자.
// 2. 입력 폼에 name이 입력되고 submit되는지 계속 확인하고
// 2-1. submit 되었으면 local storage에 setItem하자.
// 2-2. 그 다음에 바로 인사말 출력하자.
const form = document.querySelector('.app-name');
const input = form.querySelector('input');
const greeting = document.querySelector('.app-greeting');
const userName = 'currentUser'; //키

function printGreeting(value){
    form.classList.add('.display_off');
    greeting.classList.remove('.dispaly_off');
    greeting.classList.add('.display_on');

    greeting.innerHTML = `HI ${value}`;
}

function saveItem(value){
    localStorage.setItem(userName, value);
}

function handleEvent(e){
    const currentValue = input.value;
    saveItem(currentValue);
    printGreeting(currentValue);
}

function queryItem(){
    form.classList.add('.display_on');
    form.addEventListener('submmit',handleEvent);
}
function init(){
    const currentUser = localStorage.getItem(userName);

    if (currentUser === null) queryItem();
    else printGreeting(currentUser);
}

init;