import React from "react";

import { motion } from "framer-motion";
import CarouselNavbar from "../carouselNavbar/CarouselNavbar";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./carousel.scss";

const slides = [
  {
    image: 1,
    title:
      "CREATED IN THE ON THE BALTIC COAST. CAPTAIN KOMUBCHA WITH NEW FLAVOURS",
    button: "SHOP NOW",
  },
  {
    image: 2,
    title:
      "NOW AVAILABLE TO ORDER FROM OUR WEBSITE - SHOP NOW WITH FREE DELIVERY IN GUERNSEY",
    button: "SHOP NOW",
  },
  {
    image: 3,
    paragraph:
      "Kapitono Kombucha is delicious served chilled over ice with a twist of citrus zest. As KTea is raw and alive, it needs to be stored in the refrigerator to stop the fermentation",
    button: "SHOP NOW",
    title: "OUR KOMBUCHA",
  },
];
const buttonMotion = {
  hover: {
    scale: 1.1,
    color: "white",
    boxShadow: "0px 0px 6px rgb(226, 176, 83)",
    borderRadius: "8px",
    transition: {
      yoyo: Infinity,
      duration: 0.8,
    },
  },
};

const Carousel = () => {
  return (
    <div>
      <div className="slide-container">
        <Fade arrows={false} indicators={true} autoplay={false}>
          {slides.map(({ image, title, button, paragraph }) => (
            <div className="each-fade" key={image}>
              <CarouselNavbar />
              <div className={`slideImage image-${image}`}>
                <motion.div
                  className="title"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: -50 }}
                  transition={{ delay: 1, duration: 1.5 }}
                >
                  <h1>{title.toLowerCase()}</h1>
                  <p>{paragraph && paragraph}</p>
                  <motion.button whileHover="hover" variants={buttonMotion}>
                    {button}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};
export default Carousel;
