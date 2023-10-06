import Image from "next/image";
import React from "react";
import TeamOverlay from "./TeamOverlay";
import { TeamData } from "./common/Helper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container max-w-[1208px] mx-auto px-3 mb-12">
      <Slider {...settings}>
        {TeamData.map((data, index) => {
          return (
            <div className="w-full px-3 my-10">
              {" "}
              <div
                key={index}
                className="px-3 py-3 w-full flex flex-col justify-center group transition-all relative overflow-hidden rounded-lg border border-solid border-gray-800"
              >
                <div className="absolute -start-full -bottom-full w-full h-full rounded-lg bg-[#2c368bcb] group-hover:bottom-0 group-hover:left-0 z-10 transition-all duration-300">
                  <TeamOverlay />
                </div>
                <div className="flex justify-center overflow-hidden rounded-lg">
                  <Image
                    src={data.img}
                    width="345"
                    height="350"
                    alt="slider-image"
                    className="w-full h-[250px] object-cover object-top rounded-lg group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="w-full">
                  <h2 className="ff_roboto font-medium text-xl text-white mb-0 lg:pt-3 text-start w-full capitalize">
                    {data.name}
                  </h2>
                  <p className="ff_roboto font-normal text-base text-white mb-0 text-start w-full">
                    {data.About}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default OurTeam;
