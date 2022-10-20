import React from "react";

function Work() {
  return (
    <div>
      <div className="about-para">
        <div className=" flex bg-[#fff] mt-[3rem]">
          <h2 className="font-bold text-3xl">Portfolio </h2>
          <div className="red-hr"></div>
        </div>
      </div>
      <div className="flex gap-4 justify-end mt-5  ">
        <button className="hover:text-[red]">All</button>
        <button className="hover:text-[red]">Video</button>
        <button className="hover:text-[red]">Logo</button>
        <button className="hover:text-[red]">Graphic Design</button>
        <button className="hover:text-[red]">Web design</button>
      </div>
      <div className=" flex justify-evenly mt-10"></div>
      <div className="parent-grid  grid grid-cols-2 gap-[2rem] pt-[30px] ">
        <div className="grid-elements">
          <div className="flex gap-4">
            <div>
              <img className="rounded-lg" src="Blogimg.jpg" alt="" />
              <p>ABC University, Los Angeles, CA</p>
            </div>
          </div>
        </div>
        <div className="grid-elements bg-[#fefaf0]">
          <div className="flex gap-4">
            <div>
              <div>
                <div>
                  <div>
                    <img className="rounded-lg" src="blogimg2.jpg" alt="" />
                  </div>
                  <p>Google Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-elements bg-[#fcf4ff]">
          <div>
            <div>
              <img className="rounded-lg" src="blogimg3.jpg" alt="" />
              <p>Imperialize Technical Institute</p>
            </div>
          </div>
        </div>
        <div className="grid-elements bg-[#fcf4ff]">
          <div>
            <div>
              <img className="rounded-lg" src="blogimg4.jpg" alt="" />
            </div>
            <p>ib-themes ltd.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
