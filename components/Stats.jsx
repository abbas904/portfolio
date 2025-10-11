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
    setStartCounting(true);
  }, []);

  return (
    <section className="pt-4 pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {startCounting && (
                <CountUp
                  start={0}
                  end={item.num}
                  duration={5}
                  delay={2}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-4xl xl:text-6xl font-extrabold text-[#00ff99]"
                    />
                  )}
                </CountUp>
              )}
              <p className="text-sm xl:text-lg text-gray-400 mt-2">
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
