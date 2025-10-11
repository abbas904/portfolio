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
  const [startCounting, setStartCounting] = useState(false);

  // عشان العد يبدأ بعد ما الصفحة تعمل mount (مهم جدًا في Next.js)
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCounting(true);
    }, 1000); // تأخير قصير لضمان أن الصفحة محملة بالكامل

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-t from-primary/20 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-4">
              <div className="relative">
                {startCounting && (
                  <CountUp
                    start={0}
                    end={item.num}
                    duration={2.5}
                    delay={index * 0.2} // تأخير تدريجي لكل عنصر
                    enableScrollSpy={false}
                    scrollSpyOnce={true}
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-accent block"
                      />
                    )}
                  </CountUp>
                )}
                {!startCounting && (
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-accent block">
                    0
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-white/70 font-medium leading-tight px-2">
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
