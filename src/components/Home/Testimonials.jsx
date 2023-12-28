import { StarFilled } from "@ant-design/icons";
import FaceImage from "../../assets/images/face-images/online-programming-course-review-01.jpg";

function Testimonials() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-[30px]">
      <div className="w-full gap-4 grid grid-flow-row grid-cols-1 sm:grid-cols-2">
        <div className="">
          <p className="font-bold my-[20px]">Testimonials</p>
          <h1 className="text-[50px] font-bold ">
            Trusted by Thousand of Students and Tutors
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex">
            <div className="text-[100px] font-bold">4.8</div>
            <div className="flex pl-2 mt-[30px]">
              <div className="">
                <StarFilled className="text-yellow-400" />
                <StarFilled className="text-yellow-400" />
                <StarFilled className="text-yellow-400" />
                <StarFilled className="text-yellow-400" />
                <StarFilled className="text-yellow-400" />
                <div className="">
                  <h1 className="font-bold mt-[10px]">3,000+ Ratings</h1>
                  <h1 className="font-bold">Google Reviews</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full gap-4 grid grid-flow-row grid-cols-1 md:grid-cols-2 mb-5 mt-[70px]">
        <div className="p-[20px]">
          <div className="relative mt-[50px] bg-[#d326ed] pt-[60px] pb-[30px] px-[30px] rounded-[10px] hover:bg-black duration-500">
            <div className="">
              <p className="font-thin text-white">
                {" "}
                Exceptional courses! The content is comprehensive, and the
                instructors are incredibly knowledgeable. I've gained invaluable
                skills that have significantly boosted my career prospects{" "}
              </p>
              <h1 className="font-bold text-white mt-4">Emama Hart</h1>
              <div className="w-full flex justify-end">
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
              </div>
            </div>
            <div className="absolute rounded-[10px] w-[90px] h-[90px] overflow-hidden shadow-2xl bg-white top-[-50px] left-4 ">
              <img src={FaceImage} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="p-[20px]">
          <div className="relative mt-[50px] bg-[#d326ed] pt-[60px] pb-[30px] px-[30px] rounded-[10px] hover:bg-black duration-500">
            <div className="">
              <p className="font-thin text-white">
                {" "}
                Choosing these courses was a game-changer for me. The material
                is relevant, engaging, and the hands-on approach truly sets them
                apart. I highly recommend these courses to anyone looking to
                excel in their field{" "}
              </p>
              <h1 className="font-bold text-white mt-4">Emama Hart</h1>
              <div className="w-full flex justify-end">
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
              </div>
            </div>
            <div className="absolute rounded-[10px] w-[90px] h-[90px] overflow-hidden shadow-2xl bg-white top-[-50px] left-4 ">
              <img src={FaceImage} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="p-[20px]">
          <div className="relative mt-[50px] bg-[#d326ed] pt-[60px] pb-[30px] px-[30px] rounded-[10px] hover:bg-black duration-500">
            <div className="">
              <p className="font-thin text-white">
                {" "}
                I can't speak highly enough about the quality of these courses.
                The well-structured curriculum, combined with supportive
                instructors, made the learning experience enjoyable. I feel
                well-prepared and confident in applying my newfound knowledge.{" "}
              </p>
              <h1 className="font-bold text-white mt-4">Emama Hart</h1>
              <div className="w-full flex justify-end">
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
              </div>
            </div>
            <div className="absolute rounded-[10px] w-[90px] h-[90px] overflow-hidden shadow-2xl bg-white top-[-50px] left-4 ">
              <img src={FaceImage} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="p-[20px]">
          <div className="relative mt-[50px] bg-[#d326ed] pt-[60px] pb-[30px] px-[30px] rounded-[10px] hover:bg-black duration-500">
            <div className="">
              <p className="font-thin text-white">
                {" "}
                Enrolling in these courses was the best decision I made for my
                professional development. The course content is up-to-date, the
                learning resources are top-notch, and the flexibility
                accommodated my busy schedule. I'm extremely satisfied with the
                expertise I've gained.{" "}
              </p>
              <h1 className="font-bold text-white mt-4">Emama Hart</h1>
              <div className="w-full flex justify-end">
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
                <StarFilled className="text-white text-[15px]" />
              </div>
            </div>
            <div className="absolute rounded-[10px] w-[90px] h-[90px] overflow-hidden shadow-2xl bg-white top-[-50px] left-4 ">
              <img src={FaceImage} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
