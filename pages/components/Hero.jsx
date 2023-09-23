import Image from "next/image";
import React from "react";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <>
      <div className="z-10 relative  min-h-screen flex">
        <div className="max-w-[1069px] mx-auto flex flex-col justify-center items-center text-center z-10 relative flex-grows">
          <h1 className="ff_rocker font-normal text-5xl leading-[59.99px]">
            FRONT END DEVELOPERS
          </h1>
          <p className="ff_nanum font-normal text-4xl leading-[48px] mt-14 pt-1">
            Front-end Alchemy: Transforming ideas into captivating web
            interfaces. Join us on a journey of code and creativity, where
            innovation meets design to shape the digital world.
          </p>
          <button className="ff_rocker text-white text-xl leading-6 bg-[#2C368B] text-center py-[22px] w-[243px] rounded-lg mt-[87px]">
            LEARN MORE
          </button>
          <div className="mt-[50px]">
            <Image
              className="hero_down_img"
              src="/assets/images/svg/down_arrow.svg"
              alt="shadow"
              height={35}
              width={34}
            />
          </div>
        </div>
      </div>{" "}
      <div className="absolute top-0 left-0 min-h-screen z-[-1]">
        {" "}
        <HeroSlider />
      </div>
    </>
  );
};

export default Hero;
