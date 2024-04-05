// let olimpic_newgame = [
//   {
//     name: "쇼트트랙",
//     type: "혼성계주",
//   },
//   true,
// ];

// let olimpic_newgame1: readonly [string, string] = ["쇼트트랙", "혼성계주"];

// console.log(olimpic_newgame[0]);

let olimpic_newgame: readonly [object, boolean];

olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

const student1: Student = {
  name: "jh",
  grade: 2,
  isPassed: false,
};

// 실습문제 2
interface Game {
  title: string;
  price: number;
  desc?: any;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};
let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

// console.log(heroGame_A);
// console.log(heroGame_B);

//실습문제 3
function sum1(a: number, b: number): number {
  return a + b;
}

// console.log(sum1(5, 11));

//실습 문제 4

function sum2(...numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

// console.log(sum2(1, 2, 3, 4, 10));

//실습 문제 5

// function arrElement<T>(arr: T[]): any {
//   return arr[number];
// }

function arrElement<T>(arr: T[], index: number): T | boolean {
  if (index >= arr.length) {
    return false;
  }
  return arr[index];
}

console.log(arrElement<string>(["a", "b"], 0));
console.log(arrElement<string>(["a", "b"], 1));
console.log(arrElement<string>(["a", "b"], 2));
