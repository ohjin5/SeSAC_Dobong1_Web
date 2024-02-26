const crypto = require("crypto"); // nodejs 내장 모듈, 설치x
/* 
 1. crypto를 이용한 단방향 암호화 구현 - 복호화 불가능
 - createHash(알고리즘)
 - pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// 1-1 ) createHash(알고리즘).update(암호화할 값).digest(인코딩방식)
// 인코딩으로는 base64, hex, ascii, binary 등을 쓸 수 있음

// 비밀번호를 받아서 암호화 시켜주는 함수
const createHashPW = (pw) => {
  return crypto.createHash("sha512").update(pw).digest("base64");
};

console.log("1st hashing", createHashPW("1234"));
console.log("2nd hashing", createHashPW("1234"));
console.log("3rd hashing", createHashPW("1234")); // 전부 다 똑같은 값
console.log("another val", createHashPW("1234.")); // 전부 다 똑같은 값

// 1-2 ) pbkdf2Sync(암호화할값, 솔트, 반복횟수, 키길이, 알고리즘).toString(인코딩방식)
/* 
- 솔트를 이용해서 해싱하는 함수
- salt 생성: crypto.randomBytes(바이트수)
- randomBytes와 pbkdf2Sync 함수는 버퍼 형식의 데이터를 리턴
*/

/* const str = "hello!";
const buffer = Buffer.from(str); //100 001 형태의 버퍼가 16진수로 표현
console.log(buffer); */
function saltAndHashPW(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100; // 반복횟수
  const keylen = 64; // 생성할 키의 길이
  const algorithm = "sha512";
  // 1-2 ) pbkdf2Sync(암호화할값, 솔트, 반복횟수, 키길이, 알고리즘).toString(인코딩방식)

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) //buffer
    .toString("base64"); //buffer to string

  return { hash, salt }; //{hash: hash, salt:salt}
}

console.log("1st hashing", saltAndHashPW("1234"));
console.log("2nd hashing", saltAndHashPW("1234"));
console.log("3rd hashing", saltAndHashPW("1234"));
// salt 값이 다르기 때문에 모두 다른 값 출력
