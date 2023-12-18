import { MenuUnfoldOutlined} from'@ant-design/icons'
function NavBar() {
  return (
    <div className="w-full h-[80px] flex">
      <div className="w-[35%] h-full"></div>
      <div className="w-[65%] h-full flex items-center space-x-10">
        <li className="list-none font-thin text-white"><a href="">Home</a></li>
        <li className="list-none font-thin text-white"><a href="">About Us</a></li>
        <li className="list-none font-thin text-white"><a href="">Courses</a></li>
        <li className="list-none font-thin text-white"><a href="">Contact</a></li>
        <button className="text-white font-semibold bg-rose-900 py-2 px-6 rounded-[20px] ">Start Learning</button>
      </div>
      <div>
      <MenuUnfoldOutlined className='text-white h-full ' />
      </div>
    </div>
  )
}

export default NavBar