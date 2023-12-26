import { FacebookFilled, InstagramFilled } from "@ant-design/icons";

function Footer() {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-300 flex justify-center items-center mt-[100px]">
        <div className="my-[50px]">
          <h1 className="text-[30px] sm:text-[40px] font-bold w-full text-center">
            Join Our Community
          </h1>
          <p className="my-[20px] px-2 text-center">
            Enter your email address to register to our newsletter subscription
            delivered on regular basis!
          </p>
          <div className="w-full flex justify-center">
            <div className="flex space-x-3">
              <input
                type="email"
                className="w-[200px] md:w-[350px] p-2 rounded-[20px] focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="py-1 text-white px-6 rounded-[20px] bg-[#d326ed] hover:bg-black duration-500">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[25px]">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-[30px]">
          <div className="">
            <h1 className="text-4xl font-bold my-2">Logo</h1>
            <p className="my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur debitis voluptates doloribus optio soluta,
              voluptatibus minus fugit sed unde ducimus totam quo dignissimos ut
              dolor doloremque corrupti. Repudiandae, saepe ratione?
            </p>
            <div className="w-full flex">
              <FacebookFilled />
              <InstagramFilled />
            </div>
          </div>
          <div className="w-ful grid grid-cols-1 md:grid-cols-2 gap-3 sm:grid-cols-2">
            <div className="">
              <h1 className="font-bold text-[20px] my-2">Popular Courses</h1>
              <ul>
                <li>Frontend development</li>
                <li>Backend development</li>
                <li>MERN stcak development</li>
                <li>WordPress development</li>
                <li>Flutter development</li>
                <li>UI/UX design</li>
              </ul>
            </div>
            <div className="">
              <h1 className="font-bold text-[20px] my-2">Contact Info</h1>
              <ul>
                <li className="font-bold">Address</li>
                <li>123 Fifth Avenue, New York, NY 10160</li>
                <li className="font-bold">Phone</li>
                <li>929-242-6868</li>
                <li className="font-bold">Email</li>
                <li>contact@info.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] border-t-2 flex items-center justify-center">
        <div className="text-center ">
            <p>Copyright © 2023 Online Courses</p>
            <p>Powered by Online Courses</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
