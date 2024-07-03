import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#c5c5c5]'>
      <section className='flex flex-col md:flex-row gap-3 md:gap-8 w-11/12 m-auto p-2 md:p-6 '>
      <h1 className='text-3xl text-[#1d1d1d] font-bold'>My Log Travels</h1>
      <div className='flex flex-col  gap-3 w-full'>
      <h2 className='text-[#1d1d1d] font-bold'>Quick links</h2>
      <div className='flex flex-col md:flex-row justify-between md:gap-4 gap-2'>
      <article className='flex flex-col gap-3 items-start' >
      <a href='' className='text-[#1d1d1d]'>Home</a>
      <a href='' className='text-[#1d1d1d]'>About Us</a>
      <a href='' className='text-[#1d1d1d]'>My Travel log</a>
      </article>
      <article className='flex flex-col gap-3 items-start'>
      <a href='' className='text-[#1d1d1d]'>Home</a>
      <a href='' className='text-[#1d1d1d]'>About Us</a>
      <a href='' className='text-[#1d1d1d]'>My Travel log</a>
      </article>
      <article className='flex flex-col gap-3 items-start'>
      <a href='' className='text-[#1d1d1d]'>Home</a>
      <a href='' className='text-[#1d1d1d]'>About Us</a>
      <a href='' className='text-[#1d1d1d]'>My Travel log</a>
      </article>
      <article className='flex flex-col gap-3 items-start'>
      <a href='' className='text-[#1d1d1d]'>Home</a>
      <a href='' className='text-[#1d1d1d]'>About Us</a>
      <a href='' className='text-[#1d1d1d]'>My Travel log</a>
      </article>
      </div>
      </div>
      </section>
      <p className='text-center p-3'>2024 - 2025 My Log Travels. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
