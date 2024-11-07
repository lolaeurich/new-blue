import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import NaMidiaHero from "../../Components/NaMidiaHero/NaMidiaHero"
import NaMidiaCards from "../../Components/NaMidiaCards/NaMidiaCards";

const NaMidia = () => {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <NaMidiaHero />
      <NaMidiaCards />
      <Footer />
    </div>
  );
};

export default NaMidia;
