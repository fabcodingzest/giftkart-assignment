import React, { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";

function Carousel({
  slides,
  width = "",
  height = "20rem",
  fullScreen,
  autoPlay,
}) {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];
  const [data, setData] = useState([firstSlide, secondSlide, lastSlide]);
  const [currentIndex, setCurrentIndex] = useState(0);
  let crInterval = useRef(null);

  const carouselHorizontalScroll = () => {
    if (currentIndex === slides.length - 1) {
      return setCurrentIndex(0);
    } else {
      return setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    // newData.unshift(newData[slides.length - 1]);

    // setData(newData);
    crInterval.current =
      autoPlay &&
      setInterval(() => {
        carouselHorizontalScroll();
      }, 3000);

    return () => {
      clearInterval(crInterval.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const prevSlide = () => {
    clearInterval(crInterval.current);
    if (currentIndex === 0) {
      return setCurrentIndex(slides.length - 1);
    }
    setCurrentIndex(currentIndex - 1);
  };
  const nextSlide = () => {
    clearInterval(crInterval.current);
    if (currentIndex === slides.length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="carousel" width={width * slides.length - 1}>
      {slides.map((item, i) => (
        <div
          key={i}
          className="carousel-img"
          style={{
            transition: `${
              currentIndex === slides.length
                ? 0
                : "all 1s cubic-bezier(0.39, 0.39, 0.39, 1)"
            }`,
            transform: `translateX(-${currentIndex * 100}%)`,
            height,
            width,
          }}>
          <img
            style={
              fullScreen ? { objectFit: "cover" } : { objectFit: "contain" }
            }
            src={item}
            alt="display"
          />
        </div>
      ))}
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
}

export default Carousel;
