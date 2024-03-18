import "./App.css";
import UseJSX from "./UseJSX";
import Practice from "./Practice";

function App() {
  let title = "Hello World";
  return (
    <div>
      <h1 id="title">{title}</h1>
      아이디 : <input type="text"></input>
      <br />
      비밀번호 : <input type="password"></input>
    </div>
  );
}

export default App;
