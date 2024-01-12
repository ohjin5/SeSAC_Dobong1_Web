/* Date 객체 */

//현재 시간, 날짜에 대한 정보를 얻기 위해 사용
// 원하는 값으로 초기화 가능
let now = new Date()
console.log(now)


// new Date ('날짜 문자열')
console.log(new Date('September 30, 2000 13:00:00'))
console.log(new Date(2002,3,2))

console.log(now.getFullYear(), '년');
console.log(now.getMonth(), '월'); // 0 ~ 11
console.log(now.getDate(), '알') // 오늘 며칠?
console.log(now.getHours(), '시') //시간 (0~23)
console.log(now.getMinutes(), '분') //분 (0~59)
console.log(now.getSeconds(), '초') //초 (0~59)
console.log(now.getMilliseconds(), '밀리초') //밀리초 (0~999)
console.log(now.getDay(), '요일') // (0~6): 0일요일, 1월요일,....

/* Math 객체 */
console.log(Math.PI); //파이
console.log(Math.E); //자연로그 e
console.log(Math.SQRT2); // 루트2

//메소드 
console.log(Math.min(1,2,3,4,5,6,7,8,9, -5, -7.5))
console.log(Math.max(2,5,4,6,19,11,5));

console.log(Math.round(5.4)); //반올림
console.log(Math.ceil(5.155)); //올림
console.log(Math.floor(5.655)); //내림

console.log(Math.random()); // 0부터 1사이중 랜덤으로 호출

console.log(Math.floor(Math.random()*3)); // 0부터 1사이중 랜덤으로 호출

console.log(Math.floor(Math.random()*45) + 1); // 1 ~ 45 중 랜덤

const areaNum = {
    Seoul:'02',
    Incheon:'032',
    Busan:'051',
    Ulsan:'052',
    Gwangju:'062',
    Jeju:'064'
}

// 각각 key와 value 뽑아서 "배열"로 반환하는 객체의 메소드
const area = Object.keys(areaNum);
const number = Object.values(areaNum);

console.log(area)
console.log(number)


console.log('====================')
//실습문제 1


// 현재 날짜 정보를 담은 Date 객체 생성
var currentDate = new Date();

// 현재 요일 가져오기 (0부터 일요일, 1부터 월요일, ..., 6부터 토요일)
var currentDay = currentDate.getDay();

// 오늘이 평일인지 주말인지 확인하여 콘솔에 출력
if (currentDay >= 1 && currentDay <= 5) {
    console.log("오늘은 평일입니다.");
} else {
    console.log("오늘은 주말입니다.");
}

console.log('====================')
//실습문제 2

// 0에서 10 사이의 랜덤한 숫자 생성
var randomNumber = Math.floor(Math.random() * 11);

console.log("랜덤한 숫자: " + randomNumber);
