import Nav from "../../Components/Navbar/Navbar";
import Partners from "../../Components/Partners/Partners";
import Notify from "../../Components/Notify/Notify";
import Footer from "../../Components/Footer/Footer";
import SobreHero from "../../Components/SobreHero/SobreHero";
import SobreAtuacao from "../../Components/SobreAtuacao/SobreAtuacao";
import Pilares from "../../Components/SobrePilares/SobrePilares";

const Sobre = () => {

  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <SobreHero />
      <SobreAtuacao />
      <Pilares />
      <Partners />
      <Notify />
      <Footer />
    </div>
  );
};

export default Sobre;
