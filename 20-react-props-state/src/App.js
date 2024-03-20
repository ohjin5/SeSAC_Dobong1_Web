import {
  ClassProps,
  ClassProps2,
  ClassProps3,
  ClassProps4,
} from "./components/ClassProps";
import { FunctionProps } from "./components/FunctionProps";
import ClassState from "./components/ClassState";
import {
  FunctionState1,
  FunctionState2,
  FunctionState3,
  FunctionState4,
} from "./components/FunctionState";
import PropsMap from "./components/PropsMap";
import Alphabet from "./components/Alphabet";
import PracticeMap2 from "./components/practice/PracticeMap2";

function App() {
  const dataArr = [
    { name: "peach", number: 5, price: 5000 },
    { name: "banana", number: 1, price: 3000 },
    { name: "apple", number: 10, price: 7000 },
    { name: "grape", number: 2, price: 8500 },
  ];
  return (
    <div className="App">
      {/* <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2
        name="포비"
        color="beige"
        nickname="곰" //bgColor="black"
      />
      <ClassProps3 />
      <FunctionProps name="사과" number={5} price={1000} />

      <ClassProps4
        title="나의 하루는 4시 40분에 시작된다."
        author="김유진"
        price="13,500원"
        type="책"
      /> */}
      {/* <h1>hello, state</h1> */}
      {/* <h1>올리기 내리기</h1> */}
      {/* <ClassState /> */}
      {/* <FunctionState1 /> */}
      {/* <FunctionState2 /> */}
      {/* <FunctionState3 />
      <FunctionState4 /> */}
      <h1>map과 filter 사용</h1>
      {/* <PropsMap arr={dataArr} /> */}
      {/* <Alphabet /> */}
      <PracticeMap2 />
    </div>
  );
}

export default App;
