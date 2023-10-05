import React from "react";
import {
  DiscordIcon,
  FaceBookIcon,
  InstaIcon,
  SlackIcon,
  TwitterIcon,
  YouTUbeIcon,
} from "./Helper";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-footer-bg-img w-full">
      <div className="container max-w-[1208px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between w-full">
          <h2 className="ff_roboto font-normal text-[52px]ctext-white mb-0">
            TEAM MUSKAN
          </h2>

          <div className="flex gap-[18px] mb-4 ">
            <span>
              <a
                target="_blank"
                href="
https://discord.com/"
              >
                <DiscordIcon />
              </a>
            </span>
            <span>
              <a target="_blank" href="https://slack.com/intl/en-gb">
                <SlackIcon />
              </a>
            </span>
            <span>
              <a target="_blank" href="https://www.youtube.com">
                <YouTUbeIcon />
              </a>
            </span>
            <span>
              <a target="_blank" href="https://www.facebook.com">
                <FaceBookIcon />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                href="
https://www.instagram.com/"
              >
                <InstaIcon />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                href="
https://twitter.com/login"
              >
                <TwitterIcon />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="border border-b border-[#FFFFFF4D] w-full mt-6 sm:mt-11 lg:mt-[66px]"></div>

      <div className="container max-w-[1208px] mx-auto">
        <div className="flex  sm:gap-10 justify-between sm:justify-end mt-7 pt-0.5 px-3">
          <span>
            <a
              className=" ff_oxinium font-normal text-sm sm:text-lg text-white"
              href="#"
            >
              PRIVACY POLICY
            </a>
          </span>
          <span>
            <a
              className=" ff_oxinium font-normal text-base sm:text-lg text-white"
              href="#"
            >
              TERM AND CONDIATIONS
            </a>
          </span>
        </div>
        <div className=" flex justify-center mt-20 items-center lg:mt-36">
          <Image
            className="w-1/2 h-1/2 lg:h-[305px]"
            src="/assets/images/png/footer-logo.svg"
            alt="shadow"
            width="300"
            height="305"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
