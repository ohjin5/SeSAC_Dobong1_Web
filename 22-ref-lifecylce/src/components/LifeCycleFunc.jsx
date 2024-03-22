import { useEffect, useState } from "react";

function MyComponent({ number }) {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("함수형 컴포넌트 mount!");
  }, []);

  useEffect(() => {
    console.log("함수형 컴포넌트 unmount!");
  });

  useEffect(() => {
    console.log("함수형 컴포넌트 | update 될 때 마다!! ");
  });

  useEffect(() => {
    console.log("함수형 컴포넌트 | number 변경될 때마다 실행!");
  }, [number]);
  //   useEffect(effect, deps)
  return (
    <>
      <p>MyComponent {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => setNumber(number + 1);
  const changeVisibleState = () => setVisible(!visible);

  return (
    <>
      <button onClick={changeNumberState}>number +1</button>
      <button onClick={changeVisibleState}>on/off</button>
      {this.state.visible && <MyComponent number={this.state.number} />}
    </>
  );
}
