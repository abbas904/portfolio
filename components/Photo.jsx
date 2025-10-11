"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4, ease: "easeIn" }}
        className="relative"
      >
        {/* الصورة الدائرية */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[498px] 2xl:h-[498px] rounded-full overflow-hidden shadow-2xl mix-blend-lighten relative"
        >
          <Image
            src="/me-removebg-preview.png"
            priority
            quality={100}
            fill
            alt="Abbas Rizk"
            className="object-contain"
          />
        </motion.div>

        {/* الدائرة المتحركة حول الصورة */}
        <motion.svg
          className="w-[202px] h-[202px] sm:w-[252px] sm:h-[252px] lg:w-[302px] lg:h-[302px] xl:w-[402px] xl:h-[402px] 2xl:w-[506px] 2xl:h-[506px] absolute top-0 left-0"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="253"
            stroke="#00ff99"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeDasharray="20 30"
            animate={{ 
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360] 
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
