import styled from "styled-components";
import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Root>
      <Navbar />
      <Contact />
    </Root>
  );
}

export default App;

const Root = styled.div`
  background-image: url("bg.jpg");
`;
