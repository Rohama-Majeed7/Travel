// src/components/Sidebar.js
import React from 'react';
// import {SidebarContext} from '../context/SideBarContext';

const Sidebar = ({openSide}) => {

  return (
    <div className={`${openSide ? 'block' : 'hidden'} transition-all  md:hidden p-2`}>
    <ul className='flex flex-col gap-4'>
    <li><a href='#index.html' className='text-slate-500 hover:text-[#1d1d1d] font-bold ' >Home</a></li>
<li><a href='#guides.html' className='text-slate-500 hover:text-[#1d1d1d] font-bold ' >Guides</a></li>
<li><a href='#flights.html' className='text-slate-500 hover:text-[#1d1d1d] font-bold ' >Flights</a></li>
<li><a href='#about.html' className='text-slate-500 hover:text-[#1d1d1d] font-bold ' >About</a></li>
    </ul>
    <button className=' border-2 border-[#1d1d1d] rounded my-2 text-[#1d1d1d] py-1 px-2 font-bold hover:bg-[#1d1d1d] hover:text-white'>Contact Us</button>
    </div>
  );
};

export default Sidebar;
