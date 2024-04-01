import { Route, Routes } from "react-router-dom";
import { Test } from "./pages/Test";
function App() {
  return (
    <div className="App">
      <h1>react-router</h1>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
