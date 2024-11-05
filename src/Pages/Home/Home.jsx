import React from "react";
import "./style.css";
import Nav from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Carousel from "../../Components/Carousel/Carousel";
import image1 from "../../assets/Carousel/image1.png";
import image2 from "../../assets/Carousel/image2.png";
import image3 from "../../assets/Carousel/image3.png";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Front from "../../Components/Front/Front";
import Partners from "../../Components/Partners/Partners";

const Home1 = () => {
  const images = [image1, image2, image3];

  return (
    <div style={{ width: "100%" }}>
      {/* <Nav /> */}
      <Hero />
      {/* <Carousel images={images}/>
            <About />
            <Experience />
            <Front />
            <Partners /> */}
    </div>
  );
};

export default Home1;
