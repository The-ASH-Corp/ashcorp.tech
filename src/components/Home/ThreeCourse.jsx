import FrontEndImg from "../../assets/images/courseImges/1_i3laWIzy2jaemiCURVPrMg.jpg"
import BackEndImg from "../../assets/images/courseImges/backend_developer_roles_and_responsibilities-optimized.webp"
import FullStackImg from "../../assets/images/courseImges/full-stack.webp"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

function ThreeCourse() {
  return (
    <div className="w-full mt-[100px]">
        <div className="md:w-[80%] w-[90%] grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto mb-[50px]">
            <div className="md:h-[450px] shadow-2xl rounded-[10px] overflow-hidden transform transition duration-500 hover:scale-[1.1]">
                <img src={FrontEndImg} alt="" className="w-full h-[225px]" />
                <h1 className="text-[30px] font-bold w-full text-center py-5">Frontend Development</h1>
                <p className="px-[15px] text-center">Master the in-demand skills shaping the future</p>
                <Link to={"/courses"}>
                <div className="w-full flex justify-center md:mt-[35px] my-5">
                <motion.button
                whileHover={{ scale: 0.8 }}
                transition={{duration:0.5}}
                className="w-[95%] py-2 bg-[#d326ed] text-white rounded-md">see more</motion.button>
                </div>
                </Link>
            </div>
            <div className="md:h-[450px] shadow-2xl rounded-[10px] overflow-hidden transform transition duration-500 hover:scale-[1.1]">
                <img src={BackEndImg} alt="" className="w-full h-[225px]" />
                <h1 className="text-[30px] font-bold w-full text-center py-5 p-[2px]"> Backend Development</h1>
                <p className="px-[15px] text-center">Master the in-demand skills shaping the future</p>
                <Link to={"/courses"}>
                <div className="w-full flex justify-center md:mt-[35px] my-5">
                <motion.button
                whileHover={{ scale: 0.8 }}
                transition={{duration:0.5}}
                className="w-[95%] py-2 bg-[#d326ed] text-white rounded-md">see more</motion.button>
                </div>
                </Link>
            </div>
            <div className="md:h-[450px] shadow-2xl rounded-[10px] overflow-hidden transform transition duration-500 hover:scale-[1.1]">
                <img src={FullStackImg} alt="" className="w-full h-[225px]" />
                <h1 className="text-[30px] font-bold w-full text-center py-5">Full Stack Development</h1>
                <p className="px-[15px] text-center">Master the in-demand skills shaping the future</p>
                <Link to={"/courses"}>
                <div className="w-full flex justify-center md:mt-[35px] my-5">
                <motion.button
                whileHover={{ scale: 0.8 }}
                transition={{duration:0.5}}
                className="w-[95%] py-2 bg-[#d326ed] text-white rounded-md">see more</motion.button>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ThreeCourse