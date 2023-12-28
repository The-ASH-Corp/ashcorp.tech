import { CaretRightFilled } from "@ant-design/icons";

function Feature() {
  return (
    <div className="w-[90%] md:w-[80%] py-[50px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <p className="font-bold">Features of Our Courses</p>
        <h1 className="font-bold text-[40px] my-[20px]">Why Choose Us?</h1>
        <p>
          We stand out as your preferred choice due to our institution's
          unwavering commitment to delivering exceptional courses tailored to
          current industry demands. Our cutting-edge curriculum, experienced
          instructors, and a track record of successful graduates underscore our
          dedication to providing unparalleled education and shaping future
          leaders in the field
        </p>
      </div>
      <div className="">
        <div className="flex">
          <div className="px-[10px]">
            <CaretRightFilled className="bg-[#d326ed] text-white p-[5px] rounded-[50%]" />
          </div>
          <div className="">
            <h1 className="text-[20px] font-bold">Best Industry Leaders</h1>
            <p className="mt-[10px]">
              Our organization is guided by the expertise of the best industry
              leaders, driving innovation and setting new benchmarks for
              success.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="px-[10px]">
            <CaretRightFilled className="bg-[#d326ed] text-white p-[5px] rounded-[50%]" />
          </div>
          <div className="">
            <h1 className="text-[20px] font-bold">
              {" "}
              Learn Online at Your Own Pace
            </h1>
            <p className="mt-[10px]">
              Empower your education journey with the flexibility to learn
              online at your own pace, tailoring your study experience to match
              your unique preferences and schedule
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="px-[10px]">
            <CaretRightFilled className="bg-[#d326ed] text-white p-[5px] rounded-[50%]" />
          </div>
          <div className="">
            <h1 className="text-[20px] font-bold">
              Professional Certification
            </h1>
            <p className="mt-[10px]">
              Attain industry recognition and elevate your career with our
              professional certification programs, designed to validate and
              enhance your expertise in a competitive job marke
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
