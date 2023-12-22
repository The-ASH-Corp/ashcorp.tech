import { Parallax } from "react-parallax";
import HeaderBackground from "../../assets/bg_img/laptop_desk_img.jpeg";
import { motion } from "framer-motion";

function AboutHeader() {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-[400px] md:h-[400px] rounded-br-[150px] overflow-hidden ">
        <Parallax strength={400} speed={-10} bgImage={HeaderBackground}>
          <div className="w-full h-[400px] md:h-[400px] bg-black bg-opacity-40">
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia voluptates quibusdam maiores iusto culpa eum vel
                    fuga, facere odio incidunt saepe inventore nam perferendis
                    odit? Quis nesciunt voluptas excepturi voluptatem.
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
