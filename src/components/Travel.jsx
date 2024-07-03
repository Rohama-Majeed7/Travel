import React from 'react'
import { MdFlight } from "react-icons/md";
import img1 from "../Images/sec2-img1.png"
import img2 from "../Images/sec2-img2.png"
import { FaArrowRightLong } from "react-icons/fa6";
const Travel = () => {
  return (
    <div>
      <div className='flex flex-col gap-8 text-center p-5 items-center mt-[150px]'>
      <MdFlight className='text-8xl' />
      <h1 className='md:text-4xl text-2xl font-bold text-[#1d1d1d]'>See places you’ve<br></br>
      never been before</h1>
      <p className='text-xl font-bold text-[#1d1d1d]'>Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor</p>
      </div>
      <section className='flex md:flex-row flex-col gap-3 w-11/12 mt-8 mx-auto'>
      <article className='w-full'>
      <img src={img1} alt=''/>
      </article>
      <article className='flex flex-col  gap-6 w-full'>
      <img src={img2} alt='' className='md:block hidden' />
      <div className='flex md:flex-row flex-col gap-5'>
      <h2 className='text-2xl md:text-3xl font-bold underline underline-offset-2'>Lorem ipsum
      dolor sit amet
      consectetur
      adipiscing elit
      sed do ei</h2>
      <div className='flex flex-col gap-5'>
      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
      </div>
      </div>
      <FaArrowRightLong  className='md:self-end self-start text-6xl'/>
      </article>
      </section>
    </div>
  )
}

export default Travel
