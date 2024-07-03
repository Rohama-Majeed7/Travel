import React from "react";
import img1 from "../Images/img-1.png"
const Hero = () => {
  return (
    <React.Fragment>
      <section className=" flex flex-col md:flex-row w-11/12 my-4 mx-auto items-center h-full gap-4">
        <article className="flex flex-col gap-4">
          <h1 className="text-xl font-bold md:text-6xl mt-[20px] text-[#1d1d1d]">
            Travel to<br></br>
            your dream<br></br>
            destination
          </h1>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum sus pendisse ultrices gravida.
          </p>
          <button className="bg-[#1d1d1d] self-start py-2 px-3 text-white rounded hover:border-2 border-[#1d1d1d hover:text-[#1d1d1d]">
            Reserve Ticket
          </button>
        </article>
        <article className="w-full">
        <img src={img1} className="w-full" />
        </article>
      </section>
    </React.Fragment>
  );
};

export default Hero;
