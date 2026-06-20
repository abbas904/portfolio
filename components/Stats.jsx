"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 10, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 500, text: "Code Commits" },
];

const Stats = () => {
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  
  const StatsGrid = ({ withCountUp = false }) => (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5"
          >
            <div className="min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              {withCountUp && inView ? (
                <CountUp
                  start={0}
                  end={item.num}
                  duration={2.5}
                  delay={index * 0.2}
                  enableScrollSpy
                  scrollSpyOnce
                  useEasing
                  separator=","
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-accent tracking-tight leading-tight"
                    />
                  )}
                </CountUp>
              ) : (
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-accent tracking-tight leading-tight">
                  {item.num}
                </span>
              )}
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 font-medium leading-snug max-w-[180px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-t from-primary/20 to-transparent w-full"
    >
      <StatsGrid withCountUp={isClient} />
    </section>
  );
};

export default Stats;
