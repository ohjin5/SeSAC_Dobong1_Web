import { useState } from "react";
// export default function FunctionState() {
//   const [apple, setApple] = useState("사과");

//   function inEnglish() {
//     setApple("apple");
//     console.log("state", apple);
//   }
//   return (
//     <div>
//       <div style={{ background: "red", color: "white" }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }
// export default function FunctionState() {
//   function changeLanguage() {
//     const apple = document.querySelector(".state div");
//     apple.innerText === "사과"
//       ? (apple.innerText = "apple")
//       : (apple.innerText = "사과");
//   }

//   return (
//     <div className="state">
//       <div style={{ background: "red", color: "white" }}>사과</div>
//       <button onClick={changeLanguage}>언어변경</button>
//     </div>
//   );
// }
// export default function FunctionState() {
//   const [isEnglish, setIsEnglish] = useState(true);
//   function changeLanguage() {
//     setIsEnglish(!isEnglish);
//   }

//   return (
//     <div className="state">
//       <div style={{ background: "red", color: "#fff" }}>
//         {isEnglish ? "apple" : "사과"}
//       </div>
//       <button onClick={changeLanguage}>
//         {isEnglish ? "한글" : "영어"}로 변경
//       </button>
//     </div>
//   );
// }
function FunctionState1() {
  const [isNumber, increase] = useState(0);

  return (
    <div className="state">
      <h4>
        <span
          onClick={() => {
            increase(isNumber + 1);
          }}
        >
          👍
        </span>{" "}
        {isNumber}
      </h4>
    </div>
  );
}

function FunctionState2() {
  const [isNumber, increase] = useState(0);

  return (
    <div className="state">
      <h4>
        <span
          onClick={() => {
            increase(isNumber - 2);
          }}
        >
          👎
        </span>{" "}
        {isNumber}
      </h4>
    </div>
  );
}

function FunctionState3() {
  const [isNumber, upDown] = useState(0);
  function increase() {
    upDown(isNumber + 1);
  }
  function decrease() {
    upDown(isNumber - 1);
  }

  return (
    <div>
      <div>
        {isNumber}
        <span>{isNumber >= 8 ? "🤢" : "😊"}</span>
      </div>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </div>
  );
}

function FunctionState4() {
  const [objArr, change] = useState([
    ["뽀로로1", "사고뭉치1", "1살"],
    ["뽀로로2", "사고뭉치2", "2살"],
    ["뽀로로3", "사고뭉치3", "3살"],
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % objArr.length);
  };

  return (
    <div>
      <div>{objArr[currentIndex]}</div>
      <button onClick={handleClick}>change</button>
    </div>
  );
}

export { FunctionState1, FunctionState2, FunctionState3, FunctionState4 };
