// Tuple
// 튜플: 개수와 데이터 타입의 순서가 정해져있는 배열

let drink: [string, string] = ["a", "b"];

let drink2: [string, string, number];
drink2 = ["cola", "콜라", 1];
console.log(drink2);
console.log(drink2[0]);
console.log(...drink2);

drink2.push("push되나요?");
console.log(drink2);
