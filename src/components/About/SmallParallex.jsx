import { Parallax } from "react-parallax";
import BackgroudImg from "../../assets/images/courseImges/1_i3laWIzy2jaemiCURVPrMg.jpg";
import {
  FileTextFilled,
  BulbFilled,
  ClockCircleFilled,
} from "@ant-design/icons";

function SmallParallex() {
  return (
    <div className="w-full mt-[100px]">
      <Parallax strength={400} speed={-10} bgImage={BackgroudImg}>
        <div className="w-full bg-black bg-opacity-[0.5]">
          <div className="w-[90%] md:w-[80%] mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-3 py-[60px]">
            <div className="flex">
              <div className="pt-[10px]">
                <BulbFilled className="text-white bg-[#d326ed] text-[15px] p-[10px] rounded-[50%]"/>
              </div>
              <div className="px-[25px]">
                <h1 className="text-white font-bold text-[25px]">Learn From Industry Leaders</h1>
                <p className="text-white font-light">
                Our organization is guided by the expertise of the best industry
              leaders, driving innovation and setting new benchmarks for
              success
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pt-[10px]">
                <ClockCircleFilled className="text-white bg-[#d326ed] text-[15px] p-[10px] rounded-[50%]"/>
              </div>
              <div className="px-[25px]">
                <h1 className="text-white font-bold text-[25px]">Learn at Your Own Pace</h1>
                <p className="text-white font-light">
                Empower your education journey with the flexibility to learn
              online at your own pace, tailoring your study experience to match
              your unique preferences and schedule
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="pt-[10px]">
                <FileTextFilled className="text-white bg-[#d326ed] text-[15px] p-[10px] rounded-[50%]"/>
              </div>
              <div className="px-[25px]">
                <h1 className="text-white font-bold text-[25px]">Professional Certification</h1>
                <p className="text-white font-light">
                Attain industry recognition and elevate your career with our
              professional certification programs, designed to validate and
              enhance your expertise in a competitive job marke
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
