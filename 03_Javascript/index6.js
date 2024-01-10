/* 1. for문 */
/* 
for(변수 선언과 초기값 할당;조건식(어디까지 증가?감소?);증감식){
    반복할 코드;
}
*/

for(let i = 0; i < 10 ; i=i+1){
    console.log('안녕',i);
}

for(let i = 0; i < 10 ; i += 2){
    console.log(`안녕하세요 ${i}`);
}

// 1부터 5까지 출력하는 방법
for(let i = 1; i <= 5; i++ ){
    console.log(i)
}
for(let i = 1; i < 6; i++ ){
    console.log(i)
}
for(let i = 0; i < 5; i++ ){
    console.log(i+1)
}

// 감소
for(let i=5; i > 0 ; i--){
    console.log(i)
}

// 1부터 n까지의 덧셈
let n = 11;

let sum1 = 0;
// sum1 = 0+'1+2+3,,,,+ n(11)'
console.log('==========')
for(let i = 1 ; i < n + 1; i++){
    console.log(i);
    // sum1=0 + 1
    // sum1=0 + 1 +2
    // sum1=0 + 1 +2 +3 ... + n
    // sum1 = sum1 + i;
    sum1 += i;
}

console.log(sum1);

/* 배열과 함께 사용하는 for문 */
let fruits =['사과', '망고', '오렌지', '망고스틴'];
console.log(fruits.length); // 배열의 길이 확인
// fruits[0]
// fruits[1]
// fruits[2]
for(let i = 1; i <= fruits.length ; i++){
    console.log('i like', fruits[i-1])
}

// 배열 요소의 합 구하기
let numsArr = [99, 99, 98, 85, 77];
let sum2 = 0; 




// 2. while문
// 초기화식
/* while(조건식){
    조건이 참일때 실행할 문장;
    증감식;
}

*/

let n2= 1; // while의 초기화 식
while(n2<5){ //조건식
    console.log(n2); //실행문
    n2++;

}

n2 = 1;
while(n2<=10){
    if(n2 % 2 == 0){
        console.log(n2)
    }
    n2++;
}

let sum3 = 0;
for(let i = 0; i<10; i++){
    if(i%2==0) continue;

    sum3 += i;
}
console.log(sum3);

// let n3 = 0;
// while(confirm('계속 진행?')){
//     n3++;
//     alert('${n3}번째 alert 창')
// }
console.log('==========')

// 실습1
let num5 = 0;
for(let i = 1; i<770; i++){
    num5 = i*13
    if(num5%2 == 1){
        console.log(num5)
    } 
}
//실습2

// 2단부터 9단까지 출력하는 구구단 코드
for (var i = 2; i <= 9; i++) {
    console.log(i + "단");
    for (var j = 1; j <= 9; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
    console.log(""); // 각 단의 출력이 끝나면 한 줄 띄우기
}


// 실습3
