import React, { useEffect, useState } from "react";

import Carousel from "../../components/carousel/Carousel";
import AboutSection from "../../components/aboutSection/AboutSection";
import ScrollArrow from "../../components/scrollArrow/ScrollArrow";
import Cards from "../../components/Cards/Cards";
import SocialSection from "../../components/socialSection/SocialSection";
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
      <Cards />
      <SocialSection />
    </div>
  );
};
export default HomePage;
