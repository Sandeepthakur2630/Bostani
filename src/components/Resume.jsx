import React from "react";
import { IoMdSchool } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
function Resume() {
  return (
    <div>
      <div className="about-para">
        <div className=" flex bg-[#fff]">
          <h2 className="font-bold text-3xl">Resume </h2>
          <div className="red-hr"></div>
        </div>
      </div>
      <div className=" flex justify-evenly mt-10">
        {/* <span>
          <IoMdSchool />
        </span> */}
        <p className="mr-[auto] text-3xl dark:text-white font-medium">
          Education
        </p>
        {/* <div className="flex items-center gap-2"> */}
        {/* <span>
            <BiShoppingBag />
          </span> */}
        <p className="mr-[auto]  text-3xl dark:text-white font-medium">
          Experience
        </p>
        {/* </div> */}
      </div>
      <div className="parent-grid  grid grid-cols-2 gap-[2rem] pt-[30px] ">
        <div className="grid-elements">
          <div className="flex gap-4">
            <div>
              <p>2021-2023</p>
              <p>Ph.D in Horriblensess</p>
              <p>ABC University, Los Angeles, CA</p>
            </div>
          </div>
        </div>
        <div className="grid-elements bg-[#fefaf0]">
          <div className="flex gap-4">
            <div>
              <p>2019 - Present</p>
              <p>Sr. Software Tester</p>
              <p>Google Inc.</p>
            </div>
          </div>
        </div>
        <div className="grid-elements bg-[#fcf4ff]">
          <div className="flex gap-4">
            <div>
              <p>2017-2021</p>
              <p>Computer Science</p>
              <p>Imperialize Technical Institute</p>
            </div>
          </div>
        </div>
        <div className="grid-elements bg-[#fcf4ff]">
          <div className="flex gap-4">
            <div>
              <p>2015-2017</p>
              <p>Cr. Web Developer</p>
              <p>ib-themes ltd.</p>
            </div>
          </div>
        </div>
        <div className="grid-elements bg-[#fefaf0]">
          <div className="flex gap-4">
            <div>
              <p>ib-themes ltd.</p>
              <p>Best Developer</p>
              <p> University Of Melbourne, NA</p>
            </div>
          </div>
        </div>
        <div className="grid-elements bg-[#fcf4ff]">
          <div className="flex gap-4">
            <div>
              <p>2008</p>
              <p>Best Writter</p>
              <p>Online Typodev Soluation Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
