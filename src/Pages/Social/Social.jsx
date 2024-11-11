import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import HeroSocial from "../../Components/HeroSocial/HeroSocial";
import FrontSocial from "../../Components/FrontSocial/FrontSocial";
import ComoContribuimos from "../../Components/ComoContribuimos/ComoContribuimos";

const Social = () => {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <HeroSocial />
      <FrontSocial />
      <ComoContribuimos />
      <Footer />
    </div>
  );
};

export default Social;
