import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavBar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{
             
              x: '-100vw'
            }}
            animate={{
            
              x: 0
            }}
            exit={{
              x: '100vw'
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
    </>
  );
}

export default App;
