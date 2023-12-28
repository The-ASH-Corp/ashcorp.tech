import { Parallax } from "react-parallax";
import HeaderBackground from "../../assets/bg_img/about_img (2).jpg";
import { motion } from "framer-motion";

function AboutHeader() {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-[500px] md:h-[700px] rounded-br-[150px] overflow-hidden ">
        <Parallax strength={400} speed={-10} bgImage={HeaderBackground}>
          <div className="w-full h-[500px] md:h-[700px] bg-black bg-opacity-40 pt-[60px]">
            <div className="h-full w-[90%] md:w-[80%] mx-auto flex md:items-center">
              <div>
                <motion.div
                  className="mb-10"
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <h1 className="font-bold text-5xl md:text-7xl text-white">
                    About Us
                  </h1>
                </motion.div>
                <motion.div
                  className="mb-10 max-w-[600px]"
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <p className="text-white">
                    We are a leading IT solutions provider, specializing in
                    mobile and web app development, as well as offering
                    comprehensive PR services. Our dedicated team is committed
                    to enhancing your digital presence and boosting your brand's
                    impact.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default AboutHeader;
