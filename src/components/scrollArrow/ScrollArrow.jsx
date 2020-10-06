import React, { useEffect, useState } from "react";

import "./scroll-arrow.scss";

import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const variants = {
  hover: {
    y: [0, -15],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};

const ScrollArrow = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <motion.svg
      className="progress-icon"
      viewBox="0 0 60 60"
      onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      whileHover="hover"
      variants={variants}
    >
      <motion.path
        fill="none"
        strokeWidth="1.5"
        stroke="black"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1,
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="1.5"
        stroke="black"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </motion.svg>
  );
};
export default ScrollArrow;
