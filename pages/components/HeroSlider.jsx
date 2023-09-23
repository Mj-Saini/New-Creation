import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroSlider = () => {
  const HeroSliderImg = [
    {
      bgImg: "/assets/images/webp/TvuM20.webp",
    },
    {
      bgImg: "/assets/images/webp/TvuM20.webp",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex, "hjkl");

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroSliderImg.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HeroSliderImg.length - 1 : prevIndex - 1
    );
  };
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => {
    let autoplayInterval;

    if (!isAutoplayPaused) {
      autoplayInterval = setInterval(nextImage, 1000);
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
      className="relative h-screen w-screen overflow-hidden"
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
            width="100"
            height="100"
            alt="slider-image"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
