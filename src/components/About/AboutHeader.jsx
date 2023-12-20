import { Parallax } from "react-parallax";
import { PlayCircleFilled } from "@ant-design/icons";
import HeaderBackground from "../../assets/images/rsz_1o-smiling-students-facebook_800.jpg";
import NavBar from "../NavBar";

function AboutHeader() {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-[600px] md:h-[700px] rounded-br-[150px] overflow-hidden ">
        <Parallax strength={400} speed={-10} bgImage={HeaderBackground}>
          <div className="w-full h-[600px] md:h-[700px] bg-violet-800 bg-opacity-40">
            <NavBar />
            <div className="h-full w-[90%] md:w-[80%] mx-auto flex md:items-center">
              <div>
                <div className=" flex h-5 items-center space-x-2 mb-10">
                  <PlayCircleFilled className="text-white" />
                  <p className="text-white">ON-DEMAMD VIDEO TRAINIG</p>
                </div>
                <div className="mb-10">
                  <h1 className="font-bold text-5xl md:text-7xl text-white">
                    Education Opens
                  </h1>
                  <h1 className="font-bold text-5xl md:text-7xl text-white">
                    up the Mind
                  </h1>
                </div>
                <div className="mb-10 max-w-[600px]">
                  <p className="text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia voluptates quibusdam maiores iusto culpa eum vel
                    fuga, facere odio incidunt saepe inventore nam perferendis
                    odit? Quis nesciunt voluptas excepturi voluptatem.
                  </p>
                </div>
                <div className="md:mb-10">
                  <button className="bg-gradient-to-br from-violet-800 to-pink-800 py-2 text-[15px] text-white px-6 rounded-[20px] hover:border border-white">
                    START COURSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default AboutHeader;
