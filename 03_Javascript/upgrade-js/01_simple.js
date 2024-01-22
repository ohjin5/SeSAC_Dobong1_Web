// 구조 분해 할당 
// 1. 배열의 구조분해 할당
const arr = ["tomato", "kiwi", "banana"];
console.log(arr[2]);

const [to, ki, ba] = arr;
console.log(ki);

const arr2 = ["빨", "주", "노", "초"];
const [red, orange, green] = arr2;
console.log(red,green);

// 값 변경하기
let x = "first";
let y = "second";
[x, y] = [y, x];

console.log(x,y);

let x2 = "first";
let y2 = "second"
let temp;
temp = x2;
x2 = y2;
y2 = temp;

// 2. 객체의 구조분해 할당
const obj = {
    title: "제목",
    content: "내용",
    number: 0,

};

console.log(obj.title);

const{title:t2, content, number} = obj
// console.log(title);
console.log(t2);

// 전개 구문 ...


const arr3 = [1,2,3,4,5];
const arr4 = ["a","b","c"];

console.log(arr3);
console.log(arr4);

for(let el of arr3){
    console.log(el);
}

console.log(...arr3);


// [1,2,3,4,5, 'a', 'b', 'c'];

const arr5 = arr3.concat(arr4);
const arr6 = [...arr3, ...arr4];
console.log("==================");
console.log(arr5);
console.log(arr6);



// 실습 진행
const word1 = "abc";
const word2 = "xyz";
let strword1 = word1.split("");
let strword2 = word2.split("");
let strword3 = strword1.concat(strword2);
console.log(strword3);

//실습진행 두번째 방법
const word3 = "abc";
const word4 = "xyz";
let strword4 = word3.split("");
let strword5 = word4.split("");
console.log(strword4.concat(strword5));