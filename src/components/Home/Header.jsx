import { Parallax } from "react-parallax";
import { PlayCircleFilled } from "@ant-design/icons";
import HeaderBackground from "../../assets/bg_img/bussinus_img.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-[600px] md:h-[700px] rounded-br-[150px] overflow-hidden ">
        <Parallax strength={400} speed={-10} bgImage={HeaderBackground}>
          <div className="w-full h-[600px] md:h-[700px] bg-black bg-opacity-40 pt-[60px]">
            <motion.div
              className="h-full w-[90%] md:w-[80%] mx-auto flex md:items-center"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div>
                <div className=" flex h-5 items-center space-x-2 mb-10">
                  <PlayCircleFilled className="text-white" />
                  <p className="text-white">ON-DEMAMD VIDEO TRAINIG</p>
                </div>
                <div className="mb-10">
                  <h1 className="font-bold text-5xl md:text-7xl text-white">
                    Enpowering Minds
                  </h1>
                  <h1 className="font-bold text-5xl md:text-7xl text-white">
                    In The Digital Age
                  </h1>
                </div>
                <div className="mb-10 max-w-[600px]">
                  <p className="text-white">
                  Elevating Education and Crafting Code for a Brighter Digital Tomorrow - Where Learning Meets Innovation, Our Online Classes and Software Development Solutions Are Pioneering Progress.
                  </p>
                </div>
                <div className="md:mb-10">
                  <Link to={'/courses'}>
                  <button className="bg-[#d326ed] py-2 text-[15px] text-white px-6 rounded-[20px] hover:bg-black duration-500">
                    START COURSE
                  </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Header;
