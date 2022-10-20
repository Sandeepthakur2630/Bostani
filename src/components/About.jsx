import React from "react";

function About() {
  return (
    <div>
      <div className="about-para">
        <div className=" flex bg-[#fff]">
          <h2 className="font-bold text-3xl">About Me</h2>
          <div className="red-hr"></div>
        </div>
        <p className="leading-[2rem] mt-5 text-[gray]">
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs. My aim is to
          bring across your message and identity in the most creative way. I
          created web design for many famous brand companies. <br />
          My aim is to bring across your message and identity in the most
          creative way. I created web design for many famous brand companies.
        </p>
      </div>
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-8 mt-[2rem] rounded-[10px] bg-[#f8fbfb]">
        <h3 className="font-bold text-3xl">Clients</h3>
        <div className="flex  mt-[5rem] gap-6 ">
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
      <p className="text-center  mt-4 py-6 text-[gray]">
        © 2022 All Rights Reserved by ib-themes.
      </p>
    </div>
  );
}

export default About;
