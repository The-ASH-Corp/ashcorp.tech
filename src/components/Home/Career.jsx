import { Parallax } from "react-parallax";
import Bg_Img from "../../assets/bg_img/laptop_desk_img.jpeg";
import { Link } from "react-router-dom";
import {CaretRightFilled} from '@ant-design/icons'

function Career() {
  return (
    <div className="w-full my-[100px]">
      <Parallax strength={400} speed={-10} bgImage={Bg_Img}>
        <div className="w-ful flex flex-col md:flex-row py-[20px] px-[5%] md:px-[10%] bg-white  bg-opacity-[0.7] p-[20px]">
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-3 w-[100%] md:w-[70%] py-[50px]">
            <div className="px-[10px]">
              <div className="flex space-x-1 mb-[10px]">
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
              </div>
              <h1 className="text-black text-[20px] font-bold mb-[5px]">
                Education
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nemo, et fugit quisquam iure ab perspiciatis dolorum qui
              </p>
            </div>
            <div className="px-[10px]">
              <div className="flex space-x-1 mb-[10px]">
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
              </div>
              <h1 className="text-black text-[20px] font-bold mb-[5px]">
                Education
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nemo, et fugit quisquam iure ab perspiciatis dolorum qui
              </p>
            </div>
            <div className="px-[10px]">
              <div className="flex space-x-1 mb-[10px]">
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
                <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
              </div>
              <h1 className="text-black text-[20px] font-bold mb-[5px]">
                Education
              </h1>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nemo, et fugit quisquam iure ab perspiciatis dolorum qui
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center px-1">
            <div className="bg-white rounded-[10px] p-[20px]">
                <p className="font-semibold">Study at Your Own Pace</p>
                <h1 className="font-semibold text-[30px] my-[5px]">Boost Your Career by Learning Skills in High Demand</h1>

                <Link to={'/courses'}>
                    <button className="bg-[#d326ed] py-[5px] px-[10px] flex space-x-1 text-[15px] text-white items-center rounded-[20px]">
                        <CaretRightFilled className="text-white"/>
                        GET STARTED
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Career;
