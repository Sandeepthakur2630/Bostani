import React from "react";
import styled from "styled-components";
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

function Contact() {
  return (
    <>
      <Root className="custom_container">
        <div className="left-content ">
          <div className="avatar_img">
            <img src="Avatar.jpg" alt="" />
          </div>
          <div className="text-center">
            <h3 className="mt-6 mb-1 text-3xl font-semibold  dark:text-white">
              Monalisa Ashley
            </h3>
            <p className="mb-4 text-[#7B7B7B]">Ui/Ux Designer</p>
          </div>
          <div className="flex justify-center space-x-3">
            <div className="p-3  hover:bg-[#dd2476] hover:text-white ">
              <SlSocialFacebook />
            </div>
            <div className="p-3  hover:bg-sky-700  ">
              <FiTwitter />
            </div>
            <div className="p-3  hover:bg-sky-700 ">
              <AiOutlineInstagram />
            </div>
            <div className="p-3  hover:bg-sky-700 ">
              <AiOutlineLinkedin />
            </div>
          </div>
          <div className="contact_info  bg-[#F3F6F6] p-8 rounded-2xl  mt-5">
            <div>
              <div className=" flex  gap-2 ">
                <div className="contact-icon">
                  <BsPhone />
                </div>

                <div className=" flex flex-col justify-center">
                  <span className="text-xs text-[#44566C]">Phone</span>
                  <span>+3132423274</span>
                </div>
              </div>
              <div className="hr"></div>
              <div className="flex gap-2">
                <div className="contact-icon">
                  <HiOutlineMailOpen />
                </div>
                <div className=" flex flex-col justify-center">
                  <span className="text-xs text-[#44566C]">Email</span>
                  <span>email@gmail.com</span>
                </div>
              </div>
              <div className="hr"></div>
              <div className="flex gap-2">
                <div className="contact-icon">
                  <GrLocation />
                </div>
                <div className=" flex flex-col justify-center">
                  <span className="text-xs text-[#44566C]">Location</span>
                  <span>Hong kong china</span>
                </div>
              </div>
              <div className="hr"></div>
              <div className="flex gap-2">
                <div className="contact-icon">
                  <AiTwotoneCalendar />
                </div>
                <div className=" flex flex-col justify-center">
                  <span className="text-xs text-[#44566C]">Birthday</span>
                  <span>May 27, 1990</span>
                </div>
              </div>
            </div>
          </div>
          <button className="text-">
            <span>
              <BiDownload />
            </span>
            Download CV
          </button>
        </div>
      </Root>
    </>
  );
}

export default Contact;

const Root = styled.div`
  .left-content {
    background-color: #fff;
    width: 25rem;
    padding: 2rem;
    border-radius: 1.5rem;
  }
  .avatar_img {
    width: 75%;
    margin: auto;
    img {
      border-radius: 20px;
      width: 100%;
      height: auto;
    }
  }
  .contact-icon {
    padding: 1rem;
    background: #fff;
    margin-top: 1rem;
  }
  .hr {
    width: 100%;
    height: 1px;
    background-color: rgb(227 227 227);
  }
`;
