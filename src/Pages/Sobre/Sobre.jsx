import Nav from "../../Components/Navbar/Navbar";
import Partners from "../../Components/Partners/Partners";
import Notify from "../../Components/Notify/Notify";
import Footer from "../../Components/Footer/Footer";
import SobreHero from "../../Components/SobreHero/SobreHero";
import SobreAtuacao from "../../Components/SobreAtuacao/SobreAtuacao";
import Pilares from "../../Components/SobrePilares/SobrePilares";
import Historico from "../../Components/SobreHistorico/SobreHistorico";
import Reconhecimento from "../../Components/Reconhecimento/Reconhecimento";

const Sobre = () => {

  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <SobreHero />
      <SobreAtuacao />
      <Pilares />
      <Historico />
      <Reconhecimento />
      <Partners />
      <Footer />
    </div>
  );
};

export default Sobre;
