import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import './../index.css' ;

function NavBar() {
  const [windowsScreen, setWindowsScreen] = useState(window.innerWidth);
  const [navToggle, setNavToggle] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const handleNavLinkClick = () => {
    setNavToggle(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const isScrolled = scrollPosition > 150;
    setNavbarScrolled(isScrolled);
  };

  const toggling =()=>{
    setNavToggle(!navToggle)
  }

  useEffect(() => {
    const handleResize = () => setWindowsScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full h-[80px]  fixed z-10 ${navbarScrolled ? 'bg-white duration-700 text-black shadow-2xl' : 'duration-700'}`}>
      <div className="w-[97%] md:w-[80%] mx-auto h-full  flex justify-between items-center ">
        <div className=" h-full items-center flex ">
          <img src="" alt="" />
        </div>

        <MenuItems windowsScreen={windowsScreen} navToggle={navToggle} navbarScrolled={navbarScrolled} handleNavLinkClick={handleNavLinkClick}/>
        <div className=" h-full flex md:hidden items-center justify-end pl-0 ">
          <MenuUnfoldOutlined className={`${navToggle ? 'border border-white ' :''} text-white text-2xl font-bold items-center flex p-2 rounded-[5px] mr-4 bg-[#d326ed] hover:bg-black duration-500`} onClick={toggling} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;

const MenuItems = ({windowsScreen,navToggle,navbarScrolled,handleNavLinkClick}) => {
  return (
    <ul className={` ${windowsScreen<768 ? 'absolute bg-white w-full' : ''} ${navToggle ? 'block ' :'hidden'}   md:flex md:flex-row items-center md:space-x-7    right-0 top-[80px] h-fit py-5`}  >
      <li className="list-none  md:text-white md:border-white md:border-none  border-b pl-2 py-2 md:pl-0 md:py-0 font-semibold  ">
        <NavLink onClick={handleNavLinkClick}   className={({isActive}) => `${isActive && 'active-link active-link-scroll'} ${navbarScrolled ? ' text-black navlink-scroll ' : 'navlink'} relative ${isActive && navbarScrolled ? ' active-link-scroll':''}`} to="/">Home</NavLink>
      </li>
      <li className="list-none  md:text-white md:border-white md:border-none  border-b pl-2 py-2 md:pl-0 md:py-0 font-semibold ">
        <NavLink onClick={handleNavLinkClick}  className={({isActive}) => `${isActive && 'active-link active-link-scroll'} ${navbarScrolled ? ' text-black navlink-scroll  ' : 'navlink'} relative ${isActive && navbarScrolled ? ' active-link-scroll':''}`} to="/about">About Us</NavLink>
      </li>
      <li className="list-none  md:text-white md:border-white md:border-none  border-b pl-2 py-2 md:pl-0 md:py-0 font-semibold ">
        <NavLink onClick={handleNavLinkClick}  className={({isActive}) => `${isActive && 'active-link active-link-scroll'} ${navbarScrolled ? ' text-black navlink-scroll ' : 'navlink'} relative  ${isActive && navbarScrolled ? ' active-link-scroll':''}`} to="/courses">Courses</NavLink>
      </li>
      <li className="list-none  md:text-white md:border-white md:border-none  border-b pl-2 py-2 md:pl-0 md:py-0 font-semibold ">
        <NavLink onClick={handleNavLinkClick}  className={({isActive}) => `${isActive && 'active-link active-link-scroll'} ${navbarScrolled ? ' text-black navlink-scroll ' : 'navlink'} relative ${isActive && navbarScrolled ? ' active-link-scroll':''}`} to="/contact">Contact</NavLink>
      </li>
      <Link to={'/courses'}>
      <button className="md:text-white font-semibold hover:bg-black transition duration-500 bg-[#d326ed] py-2 px-6 rounded-[20px] hidden md:block">
        Start Learning
      </button>
      </Link>
    </ul>
  );
};
