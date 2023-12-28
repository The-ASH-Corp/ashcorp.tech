import { Parallax } from "react-parallax";
import HeaderBackground from "../../assets/bg_img/courses_img.jpg";
import { motion } from "framer-motion";

function ContactHeader() {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-[500px] md:h-[700px] rounded-br-[150px] overflow-hidden ">
        <Parallax strength={400} speed={-10} bgImage={HeaderBackground}>
          <div className="w-full h-[500px] md:h-[700px] bg-black bg-opacity-40 pt-[60px]">
            <div className="h-full w-[90%] md:w-[80%] mx-auto flex md:items-center ">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="mb-10">
                  <h1 className="font-bold text-5xl md:text-7xl text-white">
                    Contact Us
                  </h1>
                </div>
                <div className="mb-10 max-w-[600px]">
                  <p className="text-white">
                    Connect with us effortlessly! Our contact page is your
                    gateway to reaching our dedicated team. Drop us a message,
                    and let's start a conversation about your educational
                    journey or any inquiries you may have.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default ContactHeader;
