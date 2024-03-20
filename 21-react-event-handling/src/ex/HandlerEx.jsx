//실습1
// import React, { useState } from "react";

// function HandlerEx() {
//   const [message, setMessage] = useState("Hello World!");

//   const handleClick = () => {
//     setMessage("Goodbye World!");
//   };

//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={handleClick}>버튼</button>{" "}
//     </div>
//   );
// }

// export default HandlerEx;

// 실습2;
import React, { useState } from "react";

function ChangeColor() {
  const [message, setMessage] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  const change = (newColor, newText) => {
    setColor(newColor);
    setMessage(newText);
  };

  return (
    <div style={{ color: color }}>
      <p>{message}</p>
      <button onClick={() => change("red", "빨간색 글씨")}>빨간색</button>
      <button onClick={() => change("blue", "파란색 글씨")}>파란색</button>
    </div>
  );
}

export default ChangeColor;

// //실습3
// import React, { useState } from "react";

// function Practice() {
//   const [isVisible, setIsVisible] = useState(true);

//   const textVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div>
//       <button onClick={textVisibility}>
//         {isVisible ? "사라져라" : "보여라"}
//       </button>
//       {isVisible && <h1>안녕하세요</h1>}
//     </div>
//   );
// }

// export default Practice;
