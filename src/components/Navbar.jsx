import React ,{useState}from 'react'
import Sidebar from './Sidebar'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const [openSidebar,setOpenSidebar] = useState(false)
    const toggleSide=() =>{
        setOpenSidebar(!openSidebar);
        console.log("clicked");
    }
  return (
<React.Fragment>
<nav className='flex justify-between items-center p-3'>
<h1 className='text-[#1d1d1d] font-bold text-xl'>Travel-Agency</h1>
<ul className=' hidden md:flex gap-4'>
<li><a href='#index.html' className='text-slate-500 hover:text-[#1d1d1d] font-bold text-xl' >Home</a></li>
<li><a href='#guides.html' className='text-slate-500 hover:text-[#1d1d1d] font-bold text-xl' >Guides</a></li>
<li><a href='#flights.html' className='text-slate-500 hover:text-[#1d1d1d] font-bold text-xl' >Flights</a></li>
<li><a href='#about.html' className='text-slate-500 hover:text-[#1d1d1d] font-bold text-xl' >About</a></li>
</ul>
<button className='hidden md:block border-2 border-[#1d1d1d] rounded text-[#1d1d1d] py-2 px-3 font-bold hover:bg-[#1d1d1d] hover:text-white'>Contact Us</button>
<button onClick={toggleSide} className='block md:hidden text-xl'><FaBars /></button>
</nav>
<div>
<Sidebar openSide={openSidebar} />
</div>
</React.Fragment>
  )
}

export default Navbar