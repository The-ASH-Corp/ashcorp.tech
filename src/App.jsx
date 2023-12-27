import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ArrowUpOutlined } from "@ant-design/icons";
import { FaWhatsapp } from "react-icons/fa";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
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
    <QueryClientProvider client={queryClient}>

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
        <div className="bg-[#d326ed] fixed w-[50px] h-[50px] text-center py-2 rounded-full right-5 bottom-[100px] hover:bg-black duration-500" onClick={handleScrollToTop}>
          <ArrowUpOutlined className="text-white" />
        </div>
      )}
      <div className="bg-[#d326ed] fixed w-[50px] h-[50px] text-center flex items-center justify-center rounded-full right-5 bottom-10 hover:bg-black duration-500" onClick={handleScrollToTop}>
      <FaWhatsapp className="text-white h-[30px] w-[30px]"/>
        </div>
    </div>
    </QueryClientProvider>
  );
}

export default App;
