import React from "react";
import img1 from "../Images/sec-img2.png"
const Form = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 w-11/12 my-4 mx-auto" >
      <article className="flex flex-col gap-[60px] w-full" >
        <h1 className="text-4xl font-bold text-[#1d1d1d]">Be updated!</h1>
        <form className="flex flex-col gap-2" >
          <input
            type="text"
            placeholder="First Name"
            className="outline-none border-2 border-[#1d1d1d] placeholder:text-[#1d1d1d] p-2 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="outline-none border-2 border-[#1d1d1d] placeholder:text-[#1d1d1d] p-2 rounded"
          />
          <input
            type="text"
            placeholder="Email"
            className="outline-none border-2 border-[#1d1d1d] placeholder:text-[#1d1d1d] p-2 rounded"
          />
          <textarea
            placeholder="write message"
            className="outline-none border-2 border-[#1d1d1d] placeholder:text-[#1d1d1d] p-2 rounded"
          />
          <button type="submit" className="bg-[#1d1d1d] text-white py-2 px-4 rounded">Submit Email</button>
        </form>
      </article>
      <article className="w-full">
      <img src={img1} className="w-full h-full object-cover"/>
      </article>
    </section>
  );
};

export default Form;
