import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import CatalogoHero from "../../Components/CatalogoHero/CatalogoHero";
import CatalogoCards from "../../Components/CatalogoCards/CatalogoCards";

const Catalogo = () => {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <CatalogoHero />
      <CatalogoCards />
      <Footer />
    </div>
  );
};

export default Catalogo;
