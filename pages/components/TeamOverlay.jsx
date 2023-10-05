import React from "react";

const TeamOverlay = () => {
  return (
    <>
      <div className="p-6">
        <h4 className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          corrupti quod blanditiis expedita perspiciatis laboriosam praesentium
          inventore similique animi voluptatum, exercitationem, iusto
          repudiandae architecto velit provident aut commodi quam! Beatae?
        </h4>
        <button className="ff_roboto text-white text-lg sm:text-xl leading-6 bg-[#2C368B] text-center py-[7px] w-[145px] rounded-lg mt-6 lg:mt-[30px] flex items-center justify-center gap-2">
          Full Bio
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
    </>
  );
};

export default TeamOverlay;
