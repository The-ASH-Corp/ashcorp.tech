import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import CoursePage from "./pages/CoursePage"
import HomePage from "./pages/HomePage"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/courses" element={<CoursePage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  )
}

export default App
