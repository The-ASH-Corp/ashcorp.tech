import { Parallax } from "react-parallax";
import HeaderBackground from "../../assets/bg_img/about_img.jpg";
import NavBar from "../NavBar";

function ContactHeader() {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-[400px] md:h-[400px] rounded-br-[150px] overflow-hidden ">
        <Parallax strength={400} speed={-10} bgImage={HeaderBackground}>
          <div className="w-full h-[400px] md:h-[400px] bg-violet-800 bg-opacity-40">
            <NavBar />
            <div className="h-full w-[90%] md:w-[80%] mx-auto flex md:items-center">
              <div>
                
                <div className="mb-10">
                  <h1 className="font-bold text-5xl md:text-7xl text-white">
                    All Courses
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
               
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default ContactHeader;