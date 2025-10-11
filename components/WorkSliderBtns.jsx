"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useState, useEffect } from "react";

const WorkSliderBtns = ({
  containerStyles = "flex justify-between mt-10",
  btnStyles = "w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-all flex justify-center items-center ",
  iconsStyles = "text-2xl text-white",
}) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiper) {
      const updateButtons = () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      };

      updateButtons();
      swiper.on('slideChange', updateButtons);
      swiper.on('reachBeginning', updateButtons);
      swiper.on('reachEnd', updateButtons);

      return () => {
        swiper.off('slideChange', updateButtons);
        swiper.off('reachBeginning', updateButtons);
        swiper.off('reachEnd', updateButtons);
      };
    }
  }, [swiper]);

  const handlePrev = () => {
    if (swiper && !isBeginning) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper && !isEnd) {
      swiper.slideNext();
    }
  };

  return (
    <div className={containerStyles}>
      {/* Previous Button */}
      <button
        className={`${btnStyles} ${isBeginning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
        onClick={handlePrev}
        disabled={isBeginning}
        aria-label="Previous Slide"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      {/* Next Button */}
      <button
        className={`${btnStyles} ${isEnd ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
        onClick={handleNext}
        disabled={isEnd}
        aria-label="Next Slide"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;