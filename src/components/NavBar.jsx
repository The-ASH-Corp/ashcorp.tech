import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function NavBar() {
  const [windowsScreen, setWindowsScreen] = useState(window.innerWidth);
  const [navToggle, setNavToggle] = useState(false);

  const toggling =()=>{
    setNavToggle(!navToggle)
  }

  useEffect(() => {
    const handleResize = () => setWindowsScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full h-[80px]  relative">
      <div className="w-[97%] md:w-[80%] mx-auto h-full  flex justify-between items-center ">
        <div className=" h-full items-center flex ">icon</div>

        <MenuItems windowsScreen={windowsScreen} navToggle={navToggle} />
        <div className=" h-full flex md:hidden items-center justify-end pl-0 ">
          <MenuUnfoldOutlined className="text-white text-2xl font-bold items-center flex p-2 rounded-[5px] mr-4 bg-rose-800" onClick={toggling} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;

const MenuItems = ({windowsScreen,navToggle}) => {
  return (
    <ul className={` ${windowsScreen<768 ? 'absolute bg-white w-full' : ''} ${navToggle ? 'block' :'hidden'}  md:flex md:flex-row items-center md:space-x-7    right-0 top-[80px] h-fit py-5`}  >
      <li className="list-none md:font-thin md:text-white md:border-white md:border-none  border-b pl-2 py-2 md:pl-0 md:py-0 font-semibold ">
        <a href="">Home</a>
      </li>
      <li className="list-none md:font-thin md:text-white md:border-white md:border-none  border-b pl-2 py-2 md:pl-0 md:py-0 font-semibold ">
        <a href="">About Us</a>
      </li>
      <li className="list-none md:font-thin md:text-white md:border-white md:border-none  border-b pl-2 py-2 md:pl-0 md:py-0 font-semibold ">
        <a href="">Courses</a>
      </li>
      <li className="list-none md:font-thin md:text-white md:border-white md:border-none  border-b pl-2 py-2 md:pl-0 md:py-0 font-semibold ">
        <a href="">Contact</a>
      </li>
      <button className="md:text-white font-semibold bg-rose-900 py-2 px-6 rounded-[20px] hidden md:block">
        Start Learning
      </button>
    </ul>
  );
};
