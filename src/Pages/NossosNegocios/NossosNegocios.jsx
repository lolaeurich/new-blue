import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import NegociosHero from "../../Components/NegociosHero/NegociosHero";
import FrontNegocios from "../../Components/FrontNegocios/FrontNegocios";
import CarouselNegocios from "../../Components/CarouselNegocios/CarouselNegocios";

const NossosNegocios = () => {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <NegociosHero />
      <FrontNegocios />
      <CarouselNegocios />
      <Footer />
    </div>
  );
};

export default NossosNegocios;
