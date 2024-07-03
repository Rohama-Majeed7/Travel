import React from "react";
import img1 from "../Images/sec-img1.png"
import img2 from "../Images/sec-img2.png"
import img3 from "../Images/sec-img3.png"


const City = () => {
  return (
    <React.Fragment>
      <section className="flex flex-col md:flex-row w-11/12 gap-4 my-4 mx-auto">
        <article className="flex flex-col gap-4 p-3">
          <img src={img1} alt={""} />
          <h1 className="w-[100px] h-[5px] bg-[#1d1d1d] rounded-sm"></h1>
          <h2 className="text-xl text-[#1d1d1d] md:text-3xl font-bold">
            Lorem ipsum<br></br>dolor sit amet
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </article>
        <article className="flex flex-col gap-4 p-3">
        <img src={img2} alt={""} />
        <h1 className="w-[100px] h-[5px] bg-[#1d1d1d] rounded-sm"></h1>
        <h2 className="text-xl text-[#1d1d1d] md:text-3xl font-bold">
          Lorem ipsum<br></br>dolor sit amet
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          ipsum suspendisse ultrices gravida.
        </p>
      </article>
      <article className="flex flex-col gap-4 p-3">
      <img src={img3} alt={""} />
      <h1 className="w-[100px] h-[5px] bg-[#1d1d1d] rounded-sm"></h1>
      <h2 className="text-xl text-[#1d1d1d] md:text-3xl font-bold">
        Lorem ipsum<br></br>dolor sit amet
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
        ipsum suspendisse ultrices gravida.
      </p>
    </article>
      </section>
    </React.Fragment>
  );
};

export default City;
