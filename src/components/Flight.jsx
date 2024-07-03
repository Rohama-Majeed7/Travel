import React from "react";
import img2 from "../Images/sec-img1.png"
const Flight = () => {
  return (
    <div className="bg-[#1d1d1d] p-6">
      <section className=" w-11/12 my-10 mx-auto flex flex-col md:flex-row gap-6">
        <article className="flex flex-col gap-5 text-[#eae8e8] w-full ">
          <h1 className="text-2xl md:text-4xl font-bold">
            Choose anywhere<br></br>
            you’d like to be
          </h1>
          <div className="flex flex-col gap-2 text-[#eae8e8] ">
            <h3>Lorem Ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              repre henderit in voluptate velit esse.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-[#eae8e8]">
          <h3>Lorem Ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            repre henderit in voluptate velit esse.
          </p>
        </div>
        </article>
        <article className="w-full">
        <img src={img2} className="w-full h-full object-cover" />
        </article>
      </section>
    </div>
  );
};

export default Flight;
