import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from "../components/About"
import City from '../components/City'
import Travel from './Travel'
import Flight from './Flight'
import Accordion from './Accordion'
import img1 from "../Images/sec-img3.png"
import Test from '../components/Test'
import Form from "../components/Form"
import Footer from "../components/Footer"
const Home = () => {
    const items = [
        {
          title: 'Section 1',
          content: 'Content for section 1...',
        },
        {
          title: 'Section 2',
          content: 'Content for section 2...',
        },
        {
          title: 'Section 3',
          content: 'Content for section 3...',
        },
      ];
  return (
    <React.Fragment>
    <Navbar/>
    <Hero />
    <About />
    <City />
    <Travel/>
    <Flight />
    <div className='flex flex-col md:flex-row gap-4 w-11/12 my-10 mx-auto p-4'>
    <div className='flex flex-col gap-8 w-full' >
    <h1 className='text-2xl md:text-4xl font-bold text-[#1d1d1d]'>Lorem ipsum dolor
    sit amet consectetur</h1>
    <Accordion items={items} />
    </div>
    <img src={img1}  />
    </div>
    <Test />
    <Form />
    <Footer />
    </React.Fragment>
  )
}

export default Home