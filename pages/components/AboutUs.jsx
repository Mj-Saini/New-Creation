import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="lg:my-32 md:my-20 my-12 md:my px-3">
      <div className="container max-w-[1208px] mx-auto relative">
        {/* <Image
          className="w-full h-full absolute z-[-1] px-3 lg:px-0 hidden lg:flex"
          src="/assets/images/png/about-us-border-image.png"
          alt="shadow"
          width="1204"
          height="648"
        /> */}
        <h2 className="ff_roboto font-normal text-[32px] md:text-[40px] lg:text-[52px] text-white leading-[60px] m-0 lg:pt-16 text-center">
          ABOUT US
        </h2>
        <div className="flex flex-col lg:flex-row w-full justify-between">
          {/* <div className="lg:w-1/2">
            <div className="lg:ps-12 lg:pe-16 pt-4 lg:pt-7 pb-5 lg:pb-12 flex justify-center">
              <Image
                className="lg:w-full lg:h-full"
                src="/assets/images/png/about-us-img.png"
                alt="shadow"
                width="473"
                height="313"
              />
            </div>
          </div> */}
          <div className="w-full">
            <div className="flex justify-center flex-col items-center lg:pt-7">
              <p className="ff_oxinium font-normal text-base sm:text-xl text-center md:text-2xl md:leading-8 text-white mb-0">
                Front-end developers create the visual and interactive aspects
                of websites using HTML, CSS, and JavaScript, ensuring a seamless
                user experience. They also focus on responsive design and
                cross-browser compatibility for broader accessibility.
              </p>
              <button className="ff_roboto text-white text-lg sm:text-xl leading-6 bg-[#2C368B] text-center py-[13px] w-[145px] rounded-lg mt-6 lg:mt-[50px] flex items-center justify-center gap-2">
                CONTACT
                <svg
                  className=""
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M8.08545 14.2166C9.84439 14.2166 11.5313 13.5204 12.775 12.2811C14.0188 11.0418 14.7175 9.36093 14.7175 7.6083C14.7175 5.85567 14.0188 4.17482 12.775 2.93553C11.5313 1.69623 9.84439 1 8.08545 1"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.45361 7.60824H9.74372M9.74372 7.60824L7.25669 5.13013M9.74372 7.60824L7.25669 10.0864"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
