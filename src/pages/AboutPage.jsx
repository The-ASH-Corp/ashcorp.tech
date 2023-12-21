import AboutHeader from "../components/About/AboutHeader";
import AllAbout from "../components/About/AllAbout";
import Founder from "../components/About/Founder";
import SmallParallex from "../components/About/SmallParallex";
import WhoWeAre from "../components/About/WhoWeAre";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div className="">
      <AboutHeader />
      <AllAbout/>
      <Founder/>
      <WhoWeAre/>
      <SmallParallex/>
      <Footer />
    </div>
  );
}

export default AboutPage;
