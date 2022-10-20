import React from "react";
import { FiMoon } from "react-icons/fi";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <Navwrap className="custom_container">
        <div className="logo-img">
          <img src="Bostani.png" alt="" />
        </div>
        <div className="hamburger">++++ </div>
        <div className="icon-div">
          <FiMoon className="icon" />
        </div>
      </Navwrap>
      
    </>
  );
}

export default Navbar;

const Navwrap = styled.div`
  @media (max-width: 786px) {
    display: flex;
    align-items: center;
    justify-content: end;
  }
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
  .logo-img {
    @media (max-width: 786px) {
      margin-right: auto;
    }
  }
  .hr {
    width: 10.9rem;
    height: 2px;
    margin-top: 1rem;
    margin-left: 1rem;
    background-color: #d5eef2;
  }
  .hamburger {
    display: none;
    @media (max-width: 786px) {
      display: block;
    }
  }
`;
