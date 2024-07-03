import React from 'react'

const About = () => {
  return (
    <div className=' my-4  mx-auto py-8'>
    <article className=" flex flex-col gap-6 py-6 bg-[#1d1d1d] text-center">
    <h1 className="text-2xl font-bold md:text-6xl  text-[#eae8e8]">
    Create a memory<br></br>
    to remember
    </h1>
    <p className="text-[#eae8e8]">
      Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
      ipsum sus pendisse ultrices gravida.
    </p>
    <button className=" self-center py-2 px-3 text-[#eae8e8] font-bold rounded border-2 border-[#eae8e8] hover:text-[#1d1d1d] hover:bg-[#eae8e8]">
    My Travel Logs
    </button>
  </article>
    </div>
  )
}

export default About
