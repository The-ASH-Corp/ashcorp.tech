import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ArrowUpOutlined } from "@ant-design/icons";
function App() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="relative">
      <NavBar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100vw",
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      {isScrolled && (
        <div className="bg-[#d326ed] fixed w-[50px] h-[50px] text-center py-2 rounded-full right-5 bottom-10" onClick={handleScrollToTop}>
          <ArrowUpOutlined className="text-white" />
        </div>
      )}
    </div>
  );
}

export default App;
