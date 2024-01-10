// 문자열에서 사용 가능한 속성/메소드
/* 
 - length 
 - toUpperCase, trim, indexOf, 
   slice, replace, replaceAll, repeat, split
*/

let str1 = "Strawbery Moon";
let str2 = "    Strawbery Moon  ";

// 문자열 인덱싱
console.log(str1[5]);
console.log(str1[5]+str1[0]+str1[8]);

console.log('str1 문자열 길이', str1.length);
console.log('str2 문자열 길이', str2.length);

let msg = "Happy Birthday~";
let userId = "    user123   ";

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(str2.trim().length);
console.log(userId.trim());

let mango = 'applemango';
// indexOf
console.log(mango.indexOf('apple')) // 0
console.log(mango.indexOf('mango')) // 5
console.log(mango.indexOf('e')) //4

// 문자열에 포함되지 않은 문자열이 매개변수로 들어가면
// -1 반환
console.log(mango.indexOf('x')) // -1

// slice
console.log(mango.slice(5)) // mango
console.log(mango.slice(3,6)) //lem
console.log(mango.slice(-1)) //o
console.log(mango.slice(-4)) //ango
// console.log(mango)
// slice 해도 실제 문자열은 변하지 않음

let msg2 = 'Wow~ It is so amazing!!!'
console.log(msg2.replace("Wow", "Hey"))
console.log(msg2.replaceAll('o','O'))

let date = '2024.1.10';
// "2024-1-10"
date=date.replaceAll('.','-');
console.log(date);

console.log("abc".repeat(10));

console.log(date.split('-'))
console.log(date.split(''))