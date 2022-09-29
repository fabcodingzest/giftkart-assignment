import React, { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";

const DIRECTIOM_TYPE = {
  next: "NEXT",
  prev: "PREV",
};

function Carousel({
  slides,
  width = "",
  height = "20rem",
  fullScreen,
  autoPlay,
}) {
  const [state, setState] = useState({
    nums: slides,
    current: 0,
    needTransition: true,
    direction: "",
  });
  let crInterval = useRef(null);
  const { direction, current, nums, needTransition } = state;

  useEffect(() => {
    clearInterval(crInterval.current);
    crInterval.current =
      autoPlay &&
      setInterval(() => {
        handleNext();
      }, autoPlay * 1000);

    return () => {
      clearInterval(crInterval.current);
      window.removeEventListener("transitionend", handleSliderTranslateEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const handleSliderTranslateEnd = () => {
    switch (direction) {
      case DIRECTIOM_TYPE.next:
        vaildNextSlider();
        break;
      case DIRECTIOM_TYPE.prev:
        vaildPrevSlider();
        break;
      default:
        break;
    }
  };

  const vaildNextSlider = () => {
    let _current = current;
    _current -= 1;
    const _nums = [...nums, ...nums.slice(0, 1)].slice(-slides.length);
    setState({
      ...state,
      needTransition: false,
      current: _current,
      nums: _nums,
    });
  };

  const vaildPrevSlider = () => {
    const { current, nums } = state;
    let _current = current;
    _current += 1;
    const _nums = [...nums.slice(-1), ...nums].slice(0, slides.length);
    setState({
      ...state,
      needTransition: false,
      current: _current,
      nums: _nums,
    });
  };

  const handleNext = () => {
    const { current, nums } = state;
    if (nums.length > 1) {
      let _current = current + 1;
      if (nums.length % 2 !== 0) {
        const middle = nums.length / 2 - 1;
        if (_current > nums.length - middle) return;
      }
      setState({
        ...state,
        needTransition: true,
        current: _current,
        direction: DIRECTIOM_TYPE.next,
      });
    }
  };

  const handlePrev = () => {
    if (nums.length > 1) {
      let _current = current - 1;
      if (_current < 0) return;
      setState({
        ...state,
        needTransition: true,
        current: _current,
        direction: DIRECTIOM_TYPE.prev,
      });
    }
  };

  const transLateVal = () => {
    return -(current * 100);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        width={`${width * slides.length - 1}%`}
        style={{
          height,
          transform: `translateX(${transLateVal()}%)`,
          transition: needTransition && "transform 0.3s ease-in-out",
        }}
        onTransitionEnd={handleSliderTranslateEnd}>
        {nums.map((item, i) => (
          <div key={i} className="carousel-img">
            <img
              style={
                fullScreen ? { objectFit: "cover" } : { objectFit: "contain" }
              }
              src={item}
              alt="display"
            />
          </div>
        ))}
      </div>
      {state.nums.length > 1 && (
        <>
          <Arrow direction="left" handleClick={handlePrev} />
          <Arrow direction="right" handleClick={handleNext} />
        </>
      )}
    </div>
  );
}

export default Carousel;
