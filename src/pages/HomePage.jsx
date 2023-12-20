import Header from "../components/Home/Header";
import HtmlImg from "../assets/images/programmingIcons/html.png";
import CssImg from "../assets/images/programmingIcons/css-3.png";
import JsImg from "../assets/images/programmingIcons/js.png";
import PythonImg from "../assets/images/programmingIcons/python.png";
import ReactImg from "../assets/images/programmingIcons/react.png";
import VueImg from "../assets/images/programmingIcons/icons8-vue-js-480.png";
import TailwindImg from "../assets/images/programmingIcons/icons8-tailwind-css-480.png";
import MysqlImg from "../assets/images/programmingIcons/icons8-mysql-480.png";
import PopularCourses from "../components/Home/PopularCourses";
import HomeCourse from "../components/Home/HomeCourse";
import ThreeCourse from "../components/Home/ThreeCourse";
import Footer from "../components/Footer";
import Feature from "../components/Home/Feature";

export default function HomePage() {
  return (
    <div>
      <Header />

      <div className="h-auto w-[90%] md:w-[80%] mx-auto   md:flex block mb-10">
        <div className="md:block md:w-[40%]">
          <h1 className="font-semibold md:font-bold text-[20px] w-full text-center md:text-[40px] md:w-[70%] md:text-left">
            Technologies You Will Learn
          </h1>
        </div>
        <div className="grid grid-flow-row md:grid-cols-8 sm:grid-cols-4 grid-cols-2 py-10 md:w-[60%]">
          <div className=" flex items justify-center h-[120px]">
            <img src={HtmlImg} alt="" className="h-20 md:h-14" />
          </div>
          <div className=" flex items justify-center h-[120px]">
            <img src={CssImg} alt="" className="h-20 md:h-14" />
          </div>
          <div className=" flex items justify-center h-[120px]">
            <img src={JsImg} alt="" className="h-20 md:h-14" />
          </div>
          <div className=" flex items justify-center h-[120px]">
            <img src={ReactImg} alt="" className="h-20 md:h-14" />
          </div>
          <div className=" flex items justify-center h-[120px]">
            <img src={VueImg} alt="" className="h-20 md:h-14" />
          </div>
          <div className=" flex items justify-center h-[120px]">
            <img src={PythonImg} alt="" className="h-20 md:h-14" />
          </div>
          <div className=" flex items justify-center h-[120px]">
            <img src={TailwindImg} alt="" className="h-20" />
          </div>
          <div className=" flex items justify-center h-[120px]">
            <img src={MysqlImg} alt="" className="h-20" />
          </div>
        </div>
      </div>
      <PopularCourses />
      <HomeCourse />
      <ThreeCourse />
      <Feature/>
      <Footer />
    </div>
  );
}
