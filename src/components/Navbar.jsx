import React from "react";
import { FiMoon } from "react-icons/fi";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <Root className="custom_container">
        <div>
          <img src="Bostani.png" alt="" />
        </div>
        <div className="icon-div">
          <FiMoon className="icon" />
        </div>
      </Root>
    </>
  );
}

export default Navbar;

const Root = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  height: 10rem;

  .icon-div {
    padding: 1rem;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
    
    .icon {
      font-size: 1.5rem;
    }
    &:hover {
        background-color: red;
        color: #fff;
        transition: 0.3s;
      }
  }
`;
