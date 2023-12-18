import { Parallax } from "react-parallax"
import HeaderBackground from '../assets/images/rsz_1o-smiling-students-facebook_800.jpg'
import NavBar from './NavBar'
function Header() {
  return (
    <div className="w-full h-screen">
        <div className="w-full h-[700px] rounded-br-[150px] overflow-hidden ">
            <Parallax strength={400} speed={-10} bgImage={HeaderBackground}>
                <div className="w-full h-[700px] bg-rose-800 bg-opacity-40">
                    <NavBar/>
                </div>
            </Parallax>
        </div>  
    </div>
  )
}

export default Header