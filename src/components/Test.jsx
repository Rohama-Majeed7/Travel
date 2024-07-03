import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination} from "swiper/modules";
import { FaCircleUser } from "react-icons/fa6";

const Test = () => {
  return (
    <div className="p-8">
      <div>
        <h1 className="text-2xl md:text-4xl text-[#1d1d1d] text-center font-bold p-4">
          Here’s what they<br></br>
          have to say...
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="w-11/12 my-4 mx-auto"
      >
        <SwiperSlide>
          <div className="border-2 border-[#1d1d1d] py-6 px-4 rounded flex flex-col gap-5 text-center items-center">
            <FaCircleUser className="text-5xl" />
            <h2 className="text-[#1d1d1d] font-bold text-xl">Customer Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              ei usmod tempor incid idunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-2 border-[#1d1d1d] py-6 px-4 rounded flex flex-col gap-5 text-center items-center">
        <FaCircleUser className="text-5xl" />
        <h2 className="text-[#1d1d1d] font-bold text-xl">Customer Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          ei usmod tempor incid idunt ut labore et dolore magna aliqua.
        </p>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-2 border-[#1d1d1d] py-6 px-4 rounded flex flex-col gap-5 text-center items-center">
        <FaCircleUser className="text-5xl" />
        <h2 className="text-[#1d1d1d] font-bold text-xl">Customer Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          ei usmod tempor incid idunt ut labore et dolore magna aliqua.
        </p>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-2 border-[#1d1d1d] py-6 px-4 rounded flex flex-col gap-5 text-center items-center">
        <FaCircleUser className="text-5xl" />
        <h2 className="text-[#1d1d1d] font-bold text-xl">Customer Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          ei usmod tempor incid idunt ut labore et dolore magna aliqua.
        </p>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border-2 border-[#1d1d1d] py-6 px-4 rounded flex flex-col gap-5 text-center items-center">
        <FaCircleUser className="text-5xl" />
        <h2 className="text-[#1d1d1d] font-bold text-xl">Customer Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          ei usmod tempor incid idunt ut labore et dolore magna aliqua.
        </p>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
