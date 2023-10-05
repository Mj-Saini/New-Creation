import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#0D1014]">
      <div className="bg_navbar flex items-center justify-between w-full lg:ps-[70px] ps-8 lg:pe-[68px] pe-8 py-[5px]">
        <a href="#">
          <Image
            className=""
            src="/assets/images/svg/page_logo.svg"
            alt="logo"
            height={79}
            width={78}
          />
        </a>
        <ul
          className={`flex items-center lg:gap-12 gap-6 md:static fixed top-0 md:w-auto md:min-h-0 w-full min-h-screen md:flex-row md:bg-transparent bg-[#0D1014] flex-col justify-center duration-300 ${
            show ? "left-0" : "-left-full"
          }`}
        >
          <li>
            <a
              className="ff_roboto lg:text-[24px] text-[20px] text-white after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-[#25A6DD] hover:text-[#25A6DD] duration-300 relative after:bg-no-repeat after:duration-300 bg_size_full"
              href="#"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="ff_roboto lg:text-[24px] text-[20px] text-white after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-[#25A6DD] hover:text-[#25A6DD] duration-300 relative after:bg-no-repeat after:duration-300 bg_size_full"
              href="#"
            >
              ABOUT US
            </a>
          </li>{" "}
          <li>
            <a
              className="ff_roboto lg:text-[24px] text-[20px] text-white after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 hover:after:w-full after:h-[3px] after:bg-[#25A6DD] hover:text-[#25A6DD] duration-300 relative after:bg-no-repeat after:duration-300 bg_size_full"
              href="#"
            >
              TEAM
            </a>
          </li>
          <li>
            <button className="md:hidden ff_roboto bg-[#2C368B] flex justify-center items-center lg:py-[15px] py-[10px] ps-[25px] pe-[29px] gap-[10px] lg:text-[20px] text-[18px] text-white rounded-[9px]">
              Join us
              <span>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M9.18433 17C11.3447 17 13.4165 16.1571 14.9441 14.6569C16.4717 13.1566 17.3299 11.1217 17.3299 9C17.3299 6.87827 16.4717 4.84344 14.9441 3.34315C13.4165 1.84285 11.3447 1 9.18433 1"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.03882 9H11.2207M11.2207 9L8.16616 6M11.2207 9L8.16616 12"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
        <button className="hidden ff_roboto bg-[#2C368B] md:flex justify-center items-center lg:py-[15px] py-[10px] ps-[25px] pe-[29px] gap-[10px] lg:text-[20px] text-[18px] text-white rounded-[9px]">
          Join us
          <span>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M9.18433 17C11.3447 17 13.4165 16.1571 14.9441 14.6569C16.4717 13.1566 17.3299 11.1217 17.3299 9C17.3299 6.87827 16.4717 4.84344 14.9441 3.34315C13.4165 1.84285 11.3447 1 9.18433 1"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M1.03882 9H11.2207M11.2207 9L8.16616 6M11.2207 9L8.16616 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        <div
          className="md:hidden relative z-50 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <Image
              src="/assets/images/png/cross_menu.png"
              alt="menuIcon"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/assets/images/svg/icons_menu.svg"
              alt="menuIcon"
              width={30}
              height={30}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
