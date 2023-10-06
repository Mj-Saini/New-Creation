import Image from "next/image";
import React from "react";

const TeamLeader = () => {
  return (
    <section className="py-12 my-10">
      <div className="container max-w-[1208px] mx-auto px-3">
        <h2 className="text-4xl text-center">Our Leader</h2>
        <div className="flex flex-col lg:flex-row mt-10 px-3">
          <div className="lg:w-1/2 ">
            <div className="flex items-center justify-center w-full h-full bg-white">
              <Image
                src="/assets/images/jpeg/muskan-mam.JPG"
                width="345"
                height="350"
                alt="slider-image"
                className="lg:w-full h-[600px] sm:w-3/4  object-cover object-top rounded-lg group-hover:scale-110 transition-all duration-300"
              />
              {/* <h2 className="text-5xl text-black"> Image</h2> */}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-col justify-center bg-red-950 py-6 ps-10 pe-6 h-full">
              <h2 className="text-2xl">Ms Muskan Saini</h2>
              <p className="text-lg">Front-End-Developer</p>
              <p className="text-base mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                eligendi et delectus ut! Minus consequatur corporis quaerat
                eligendi dignissimos rem sunt nesciunt cupiditate sapiente enim,
                fugiat officia distinctio nemo maiores?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamLeader;
