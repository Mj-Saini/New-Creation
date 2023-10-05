import Image from "next/image";
import React from "react";
import HeroSlider from "./HeroSlider";
import Header from "./common/Header";

const Hero = () => {
  return (
    <>
      <div className="z-10 relative flex flex-col justify-between h-[calc(100vh_-_89px)] px-3">
        <div className="max-w-[1069px] mx-auto flex flex-col justify-center items-center text-center z-10 relative flex-grow">
          <h1 className="ff_roboto font-normal lg:text-5xl md:text-[40px] sm:text-4xl text-2xl md:leading-[59.99px]">
            FRONT END DEVELOPERS
          </h1>
          <p className="ff_oxinium font-normal text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[48px] mt-4 lg:mt-14 lg:pt-1">
            Front-end Alchemy: Transforming ideas into captivating web
            interfaces. Join us on a journey of code and creativity, where
            innovation meets design to shape the digital world.
          </p>
          <button className="ff_roboto text-white text-xl leading-6 bg-[#2C368B] text-center py-[16px] w-[153px] rounded-lg mt-7 lg:mt-[87px]">
            Join
          </button>
          <a href="#about" className="mt-[50px]">
            <Image
              className="hero_down_img"
              src="/assets/images/svg/down_arrow.svg"
              alt="shadow"
              height={35}
              width={34}
            />
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 min-h-screen w-full z-[-1]">
        {" "}
        <HeroSlider />
      </div>
    </>
  );
};

export default Hero;
