import React, { useEffect, useState } from "react";

import Carousel from "../../components/carousel/Carousel";
import AboutSection from "../../components/aboutSection/AboutSection";
import ScrollArrow from "../../components/scrollArrow/ScrollArrow";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./homepage.module.scss";


const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Carousel />
      <AboutSection />
      <ScrollArrow />
    </div>
  );
};
export default HomePage;
