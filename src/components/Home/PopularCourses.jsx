import { Link } from "react-router-dom"


function PopularCourses() {
  return (
    <div className="md:flex block md:w-[80%] mx-auto w-[90%] mb-16">
        <div className="md:w-[45%]">
            <p className="font-bold">Top Categories</p>
            <h1 className="font-bold text-[35px]">Popular Courses</h1>
        </div>
        <div className="pl-4 border-l-2 md:mt-0 mt-5 md:w-[35%]">
            <p className="font-thin text-gray-900">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nesciunt minus aliquam, minima, error omnis voluptates ipsa sint accusantium quaerat dicta soluta eius qui, laudantium magni amet consequatur cupiditate quod?</p>
        </div>
        <div className="md:w-[20%] md:h-auto flex md:items-center md:justify-center">
          <Link to={'/courses'}>
            <button className="font-semibold mt-5 md:mt-0 py-2 px-4 rounded-[20px] bg-[#d326ed] text-[15px] text-white hover:bg-black duration-500">VIEW ALL COURSES</button>
          </Link>
        </div>
    </div>
  )
}

export default PopularCourses