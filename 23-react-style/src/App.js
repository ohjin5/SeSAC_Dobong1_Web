import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";
const ParentDiv = styled.div`
  text-align: center;
`;
const Header = styled.header`
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: white;
`;
const AppLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(180deg);
    }
`;
const Logo = styled.img`
  height: 350px;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`;
const MyA = styled.a`
  color: #61dafb;
`;
function App() {
  return (
    <ParentDiv>
      <Header>
        <Logo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </Header>
    </ParentDiv>
  );
}
export default App;
