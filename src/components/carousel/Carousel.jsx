import React from "react";

import { motion } from "framer-motion";
import CarouselNavbar from "../carouselNavbar/CarouselNavbar";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./carousel.scss";

const Carousel = () => {
  const buttonMotion = {
    rest: {
      scale: 0,
    },
    hover: {
      scale: 1.1,
      color: "white",
      boxShadow: "0px 0px 6px rgb(226, 176, 83)",
      borderRadius: "8px",
    },
  };
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    hidden: { opacity: 0 },
  };
  return (
    <div>
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <CarouselNavbar />
            <div className="slideImage image-1">
              <motion.div
                className="title"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -50 }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                <h1>
                  CREATED IN THE ON THE BALTIC COAST. CAPTAIN KOMUBCHA WITH NEW
                  FLAVOURS IS NOW AVAILABLE SHOP ONLINE WITH FREE DELIVERY IN
                  LITHUANIA
                </h1>
                <motion.button whileHover="hover" variants={buttonMotion}>
                  SHOP NOW
                </motion.button>
              </motion.div>
            </div>
          </div>
          <div className="each-fade">
            <CarouselNavbar />
            <div className="slideImage image-2">
              <motion.div
                className="title"
                initial={false}
                animate="visible"
                variants={variants}
              >
                <h1>
                  NOW AVAILABLE TO ORDER FROM OUR WEBSITE - SHOP NOW WITH FREE
                  DELIVERY IN GUERNSEY
                </h1>
                <motion.button whileHover="hover" variants={buttonMotion}>
                  SHOP NOW
                </motion.button>
              </motion.div>
            </div>
          </div>

          <div className="each-fade">
            <CarouselNavbar />
            <div className="slideImage image-3">
              <motion.div
                className="title"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -50 }}
                transition={{ delay: 10, duration: 1.5 }}
              >
                <h1>OUR KOMBUCHA</h1>
                <p>
                  Kapitono Kombucha is delicious served chilled over ice with a
                  twist of citrus zest. As KTea is raw and alive, it needs to be
                  stored in the refrigerator to stop the fermentation
                </p>
                <motion.button whileHover="hover" variants={buttonMotion}>
                  SHOP NOW
                </motion.button>
              </motion.div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Carousel;
