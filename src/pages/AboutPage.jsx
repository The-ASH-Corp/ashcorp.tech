import AboutHeader from "../components/About/AboutHeader";
import AllAbout from "../components/About/AllAbout";
import Founder from "../components/About/Founder";
import SmallParallex from "../components/About/SmallParallex";
import WhoWeAre from "../components/About/WhoWeAre";



function AboutPage() {
  return (
    <div className="relative">
      <AboutHeader />
      <AllAbout/>
      <Founder/>
      <WhoWeAre/>
      <SmallParallex/>
     
      
    </div>
  );
}

export default AboutPage;
