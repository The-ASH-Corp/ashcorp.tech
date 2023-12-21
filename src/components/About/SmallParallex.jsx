import { Parallax } from "react-parallax";
import BackgroudImg from "../../assets/images/courseImges/1_i3laWIzy2jaemiCURVPrMg.jpg";
import {
  FileTextFilled,
  BulbFilled,
  ClockCircleFilled,
} from "@ant-design/icons";

function SmallParallex() {
  return (
    <div className="w-full">
      <Parallax strength={400} speed={-10} bgImage={BackgroudImg}>
        <div className="w-full bg-black bg-opacity-[0.5]">
          <div className="w-[90%] md:w-[80%] mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-3 py-[60px]">
            <div className="flex">
              <div className="pt-[10px]">
                <BulbFilled className="text-white bg-gradient-to-br from-violet-800 to-rose-800 text-[15px] p-[10px] rounded-[50%]"/>
              </div>
              <div className="px-[25px]">
                <h1 className="text-white font-bold text-[25px]">Learn From Industry Leaders</h1>
                <p className="text-white font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus a minus nulla libero, repudiandae rem, labore
                  saepe placeat sequi obcaecati neque,
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pt-[10px]">
                <ClockCircleFilled className="text-white bg-gradient-to-br from-violet-800 to-rose-800 text-[15px] p-[10px] rounded-[50%]"/>
              </div>
              <div className="px-[25px]">
                <h1 className="text-white font-bold text-[25px]">Learn at Your Own Pace</h1>
                <p className="text-white font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus a minus nulla libero, repudiandae rem, labore
                  saepe placeat sequi obcaecati neque,
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pt-[10px]">
                <FileTextFilled className="text-white bg-gradient-to-br from-violet-800 to-rose-800 text-[15px] p-[10px] rounded-[50%]"/>
              </div>
              <div className="px-[25px]">
                <h1 className="text-white font-bold text-[25px]">Professional Certification</h1>
                <p className="text-white font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus a minus nulla libero, repudiandae rem, labore
                  saepe placeat sequi obcaecati neque,
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default SmallParallex;
