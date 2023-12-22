import FounderImg from "../../assets/images/face-images/about-01-free-img.jpg";

function Founder() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-[150px] grid grid-flow-row grid-cols-1 md:grid-cols-2">
      <div className="">
        <img src={FounderImg} alt="" />
      </div>
      <div className="flex flex-col items-start space-x-5 pl-[20px]">
        <h1 className="font-bold text-[40px] ml-5">Learn Something <br /> Every Day</h1>
        <div className="flex space-x-1 my-[20px]">
          <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
          <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
          <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
          <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio similique est mollitia itaque, earum eos rerum consequuntur quidem maxime, doloribus, quibusdam sint deserunt nobis illum consequatur eveniet cupiditate alias?</p>
      <h1 className="font-bold my-[10px] text-[20px]">
      Bobby Harris
      </h1>
      <h1 className="font-semibold">Founder</h1>
      </div>
    </div>
  );
}

export default Founder;
