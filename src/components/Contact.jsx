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
import { MdOutlinePeopleAlt } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { BiCube } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa";
import { AiOutlineContacts } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
// import { FiCamera } from "react-icons/fi";
// import { AiFillSetting } from "react-icons/ai";
// import { FaAppStoreIos } from "react-icons/fa";
// import { GiLadder } from "react-icons/gi";

function Contact() {
  return (
    <>
      <Root className="custom_container flex justify-between items-start gap-20 ">
        <div className="left-content flex-[.25] mt-[300px] relative">
          <div className="avatar_img">
            <img src="Avatar.jpg" alt="" />
          </div>
          <div className="text-center mt-[64px]">
            <h3 className="mt-6 mb-1 text-3xl font-semibold  dark:text-white">
              Monalisa Ashley
            </h3>
            <p className="mb-4 text-[#7B7B7B]">Ui/Ux Designer</p>
          </div>
          <div className="flex justify-center space-x-3">
            <div className=" p-3  social-icons  hover:text-white bg-[#e4e2e2] rounded-md">
              <SlSocialFacebook />
            </div>
            <div className="p-3 social-icons   bg-[#e4e2e2] rounded-md ">
              <FiTwitter />
            </div>
            <div className="p-3 social-icons   bg-[#e4e2e2] rounded-md">
              <AiOutlineInstagram />
            </div>
            <div className="p-3 social-icons  bg-[#e4e2e2] rounded-md ">
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
                  <span className="text-xs text-[#44566C] pt-[0.4rem]">
                    Phone
                  </span>
                  <span className="onhover">+3132423274</span>
                </div>
              </div>
              <div className="hr mt-[10px]"></div>
              <div className="flex gap-2">
                <div className="contact-icon">
                  <HiOutlineMailOpen />
                </div>
                <div className=" flex flex-col justify-center">
                  <span className="text-xs text-[#44566C] pt-[0.4rem]">
                    Email
                  </span>
                  <span className="onhover">email@gmail.com</span>
                </div>
              </div>
              <div className="hr mt-[10px]"></div>
              <div className="flex gap-2">
                <div className="contact-icon">
                  <GrLocation />
                </div>
                <div className=" flex flex-col justify-center">
                  <span className="text-xs text-[#44566C] pt-[0.4rem]">
                    Location
                  </span>
                  <span>Hong kong china</span>
                </div>
              </div>
              <div className="hr mt-[10px]"></div>
              <div className="flex gap-2">
                <div className="contact-icon">
                  <AiTwotoneCalendar />
                </div>
                <div className=" flex flex-col justify-center">
                  <span className="text-xs text-[#44566C] pt-[0.4rem]">
                    Birthday
                  </span>
                  <span>May 27, 1990</span>
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center bg-[#dd2476] px-[2rem] py-[0.75rem] ml-[4.2rem] mt-10 rounded-[35px] text-[#fff] gap-2">
            <BiDownload className="inline" />
            Download CV
          </button>
        </div>
        <div className="right-content  flex-[.75]">
          <div className="flex flex-col items-end gap-[3rem]  mt-[300px]  ">
            <div className="p-[1.5rem] flex gap-3 bg-[#fff] rounded-[15px]">
              <div className="nav-icons">
                <div>
                  <MdOutlinePeopleAlt className="ml-[15px]" />
                </div>
                <p>About</p>
              </div>
              <div className="nav-icons">
                <div>
                  <SlDocs className="ml-[23px]" />
                </div>
                <p>Resume</p>
              </div>
              <div className="nav-icons">
                <div>
                  <BiCube className="ml-[11px]" />
                </div>
                <p>Work</p>
              </div>
              <div className="nav-icons">
                <div>
                  <FaBlogger className="ml-[8px]" />
                </div>
                <p>Blog</p>
              </div>
              <div className="nav-icons">
                <div>
                  <AiOutlineContacts className="ml-[23px]" />
                </div>
                <p>Contact</p>
              </div>
              <div> </div>
            </div>
            <div className="bg-[#fff] p-[2rem] rounded-xl">
              <div className=" flex bg-[#fff]">
                <h2 className="font-bold text-3xl">About Me</h2>
                <div className="red-hr"></div>
              </div>
              <p className="leading-[2rem] mt-5 text-[gray]">
                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies. <br />
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
              </p>
              <h3 className="font-bold text-3xl pt-4">What I do !</h3>
              <div className="parent-grid  grid grid-cols-2 gap-[2rem] pt-[30px] ">
                <div className="grid-elements">
                  <div className="flex gap-4">
                    <div>
                      <img src="ladder.svg" alt="" />{" "}
                    </div>
                    <div>
                      <p>Ui/Ux Design</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam euismod volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-elements bg-[#fefaf0]">
                  <div className="flex gap-4">
                    <div>
                      <img src="cubes.svg" alt="" />{" "}
                    </div>
                    <div>
                      <p>Ui/Ux Design</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam euismod volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-elements bg-[#fcf4ff]">
                  <div className="flex gap-4">
                    <div>
                      <img src="Photo.svg" alt="" />{" "}
                    </div>
                    <div>
                      <p>Ui/Ux Design</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam euismod volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-elements bg-[#fcf4ff]">
                  <div className="flex gap-4">
                    <div>
                      <img src="webdev.svg" alt="" />{" "}
                    </div>
                    <div>
                      <p>Ui/Ux Design</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam euismod volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-elements bg-[#fefaf0]">
                  <div className="flex gap-4">
                    <div>
                      <img src="setting.svg" alt="" />{" "}
                    </div>
                    <div>
                      <p>Ui/Ux Design</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam euismod volutpat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-elements bg-[#fcf4ff]">
                  <div className="flex gap-4">
                    <div>
                      <img src="Photo.svg" alt="" />{" "}
                    </div>
                    <div>
                      <p>Ui/Ux Design</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam euismod volutpat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center p-8 mt-[5rem] rounded-[10px] bg-[#f8fbfb]">
                <h3 className="font-bold text-3xl">Clients</h3>
                <div className="flex  ml-[5rem] mt-[5rem] gap-6 ">
                  <div>
                    <img src="brand1.png" alt="" />
                  </div>
                  <div>
                    <img src="brand2.png" alt="" />
                  </div>
                  <div>
                    <img src="brand3.png" alt="" />
                  </div>
                  <div>
                    <img src="brand4.png" alt="" />
                  </div>
                  <div>
                    <img src="brand5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Root>
    </>
  );
}

export default Contact;

const Root = styled.div`
  .left-content {
    background-color: #fff;
    width: 100%;
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
    border-radius: 10px;
  }
  .hr {
    width: 100%;
    height: 1px;
    background-color: rgb(227 227 227);
  }

  .avatar_img {
    position: absolute;
    height: 240px;
    width: 240px;
    top: -168px;
    left: 84px;
  }
  .social-icons {
    :hover {
      background-color: #dd2476;
      transition: 0.3s;
    }
  }
  .nav-icons {
    padding: 1rem;
    background: #fff;
    text-align: center;
    background-color: #f1ecec;
    border-radius: 10px;
    :hover {
      background-color: #dd2476;
      transition: 0.4s;
    }
  }
  .red-hr {
    width: 175px;
    height: 2px;
    margin-top: 15px;
    margin-left: 1rem;
    background-color: #dd2476;
  }
  .grid-elements {
    /* background: rgb(252, 244, 255); */
    padding: 2rem;
    border-radius: 15px;
  }
  .custom-container {
  }
  .onhover {
    :hover {
      color: #dd2476;
    }
  }
`;
