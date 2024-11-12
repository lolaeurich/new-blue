import "./style.css";
import Nav from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Carousel from "../../Components/Carousel/Carousel";
import image1 from "../../assets/Carousel/image1.png";
import image2 from "../../assets/Carousel/image2.png";
import item3 from "../../assets/Carousel/item3.png";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Front from "../../Components/Front/Front";
import Partners from "../../Components/Partners/Partners";
import Notify from "../../Components/Notify/Notify";
import Footer from "../../Components/Footer/Footer";

const Home1 = () => {
  const listCarrosel = [
    {
      id: 1,
      name: "Aya",
      img: image1,
      address: "Curitiba - Paraná",
      squareMeters: "200"
    },
    {
      id: 2,
      name: "Cena",
      img: image2,
      address: "Curitiba - Paraná",
      squareMeters: "200"
    },
    {
      id: 3,
      name: "Hit Home",
      img: item3,
      address: "Curitiba - Paraná",
      squareMeters: "200"
    },
    {
      id: 4,
      name: "Aya",
      img: image1,
      address: "Curitiba - Paraná",
      squareMeters: "200"
    },
    {
      id: 5,
      name: "Cena",
      img: image2,
      address: "Curitiba - Paraná",
      squareMeters: "200"
    },
    {
      id: 6,
      name: "Hit Home",
      img: item3,
      address: "Curitiba - Paraná",
      squareMeters: "200"
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <Hero />
      <Carousel items={listCarrosel} />
      <About />
      <Experience />
      <Front />
      <Partners />
      <Notify />
      <Footer />
    </div>
  );
};

export default Home1;
