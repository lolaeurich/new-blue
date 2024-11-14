import Nav from "../../../Components/Navbar/Navbar"
import Footer from "../../../Components/Footer/Footer"
import AyaHero from "../../../Components/Empreendimentos/AyaHero/Hero";
import Avanco from "../../../Components/Empreendimentos/AyaAvanco/Avanco";
import Carac from "../../../Components/Empreendimentos/AyaCarac/AyaCarac";
import AyaCarousel from "../../../Components/Empreendimentos/AyaCarousel/AyaCarousel";
import AyaDifer from "../../../Components/Empreendimentos/AyaDifer/AyaDifer";
import AyaContato from "../../../Components/Empreendimentos/AyaContato/AyaContato";

const Aya = () => {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <AyaHero />
      <Avanco />
      <Carac />
      <AyaCarousel /> 
      <AyaDifer /> 
      <AyaContato />
      <Footer />
    </div>
  );
};

export default Aya;
