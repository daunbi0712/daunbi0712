console.log(Math.round(1.2)); //반올림
console.log(Math.ceil(1.2));  //올림
console.log(Math.floor(1.2)); //내림
console.log(Math.random());
console.log(Math.floor(Math.random()*10));

const bgImages = ['beach-1236581_1920','bora-bora-685303_1920','sunset-3726030_1920','waves-3473335_1920'];
const chosenImage = bgImages[Math.floor(Math.random() * bgImages.length)];
console.log(Math.floor(Math.random() * bgImages.length));
const bgImage = document.createElement('img');

bgImage.src = `./images/${chosenImage}.jpg`;
bgImage.classList.add('bgImage');

document.body.appendChild(bgImage);


//업그레이드 목표 : 이미지 목록 json 처리, python으로 디렉토리 크롤링