import Image from "next/image";
import React from "react";
import TeamOverlay from "./TeamOverlay";
import { TeamData } from "./common/Helper";

const OurTeam = () => {
  return (
    <div className="container max-w-[1208px] mx-auto px-3 mb-12">
      {" "}
      <div className="flex flex-row w-full py-12">
        {TeamData.map((data, index) => {
          return (
            <div className="w-1/3 px-3 ">
              {" "}
              <div
                key={index}
                className="px-3 py-3 w-full flex flex-col justify-center items-center group transition-all relative overflow-hidden rounded-lg border border-solid border-gray-800"
              >
                <div className="absolute -start-full -bottom-full w-full h-full rounded-lg bg-[#FF5300BF] group-hover:bottom-0 group-hover:left-0 z-10 transition-all duration-300">
                  <TeamOverlay />
                </div>
                <div className="flex justify-center overflow-hidden rounded-lg">
                  <Image
                    src={data.img}
                    width="345"
                    height="350"
                    alt="slider-image"
                    className="w-full h-[250px] object-cover object-center rounded-lg group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="w-full">
                  {" "}
                  <h2 className="ff_roboto font-medium text-xl text-white mb-0 lg:pt-3 text-start w-full uppercase">
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
      </div>
    </div>
  );
};

export default OurTeam;
