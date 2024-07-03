import React, { useState } from 'react';
// import './Accordion.css'; // Import CSS for styling (optional)
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = items.map((item, index) => {
    const isActive = index === activeIndex;
    const className = isActive ? 'active' : '';

    return ( 
        <div className="flex flex-col  gap-4 border-b-2 border-[#1d1d1d] cursor-pointer" key={index}>
        <div className={`title ${className} flex gap-12 justify-between items-center` } onClick={() => onTitleClick(index)}>
        {item.title}
        <i className={`icon ${isActive ? 'minus' : 'plus'} text-3xl font-bold text-[#1d1d1d]`}>&#43;</i>
        </div>
        {isActive && <div className="text-white bg-[#1d1d1d] p-3 w-full">{item.content}</div>}
        </div>
        );
        });
        
        return <div className="accordion">{renderItems}</div>;
        };

export default Accordion;
