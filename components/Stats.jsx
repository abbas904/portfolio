"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 10, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 500, text: "Code Commits" },
];

const Stats = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // تأكد من أن المكون محمل بالكامل قبل بدء العد
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-t from-primary/20 to-transparent w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-20 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div className="relative min-h-[70px] sm:min-h-[90px] md:min-h-[110px] lg:min-h-[130px] flex items-center justify-center w-full">
                {isMounted ? (
                  <CountUp
                    start={0}
                    end={item.num}
                    duration={2.5}
                    delay={index * 0.2}
                    enableScrollSpy={false}
                    scrollSpyOnce={true}
                    useEasing={true}
                    separator=","
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-accent block"
                      />
                    )}
                  </CountUp>
                ) : (
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-accent block">
                    0
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 font-medium leading-tight px-2 max-w-[200px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
