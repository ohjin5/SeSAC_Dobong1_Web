let str1 = "strawbery Moon"
let str2 = "      strawbery Moon    ";

//문자열 인덱싱
console.log(str1[5]);
console.log(str1[5]+str1[0]+str1[8]);

console.log('str1 문자열 길이', str1.length);
console.log('str2 문자열 길이', str2.length);

let msg = "Happy Birthday~";
let userID = "      user123   ";

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(str2.trim().length);
console.log(userID.trim());

let mango = 'applemango';
console.log(mango.indexOf('apple')) //0
console.log(mango.indexOf('mango')) //5
console.log(mango.indexOf('e')) //4
//문자열에 포함되지 않은 문자열이 매개변수로 들어가면 -1 반환
console.log(mango.indexOf('x')) //-1