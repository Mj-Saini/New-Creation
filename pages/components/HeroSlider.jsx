import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroSlider = () => {
  const HeroSliderImg = [
    {
      video: "/assets/images/video/team-video.mp4",
    },
    {
      bgImg: "/assets/images/jpeg/ROG-Pugio.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex, "Mj");

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroSliderImg.length);
  };

  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => {
    let autoplayInterval;

    if (!isAutoplayPaused) {
      autoplayInterval = setInterval(nextImage, 5000);
    }

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex, isAutoplayPaused]);
  const handlePauseAutoplay = () => {
    setIsAutoplayPaused(true);
  };

  const handleResumeAutoplay = () => {
    setIsAutoplayPaused(false);
  };

  return (
    <div
      onMouseEnter={handlePauseAutoplay}
      onMouseLeave={handleResumeAutoplay}
      className="relative h-screen overflow-hidden"
    >
      {HeroSliderImg.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.bgImg}
            layout="fill"
            alt="slider-image"
            className="w-full h-full object-cover"
          />
          <video autoPlay src={img.video}></video>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
