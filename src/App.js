import styled from "styled-components";
import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Root className="parent-div">
      <Navbar />
      <Contact />
    </Root>
  );
}

export default App;

const Root = styled.div`
  background-image: url("bg.jpg");
  background-attachment: fixed;
  @media screen and (max-width: 1024px) {
    padding: 2rem;
  }
`;
