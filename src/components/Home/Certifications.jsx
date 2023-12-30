import netdPng from '../../assets/images/logos/NETD.png'
import metaPng from '../../assets/images/logos/meta-business-partner-logo.webp'
import keralaStartupPng from '../../assets/images/logos/kerala_start_up_mission.png'

function Certifications() {
  return (
    <div className="w-[100%] my-[100px]">
        <div className="md:w-[80%] w-[90%] mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-2">
            <div className="flex items-center h-full w-full ">
                <h1 className="text-[40px] font-bold ">Certification's</h1>
            </div>
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
                <div className="flex justify-center items-center">
                    <img src={netdPng} alt="" className='w-[100px] h-[100px]'/>
                </div>
                <div className="flex justify-center items-center">
                <img src={metaPng} alt="" className='w-[300px] h-[200px]'/>
                </div>
                <div className="flex justify-center items-center pt-[40px]">
                <img src={keralaStartupPng} alt="" className='w-[250px]  h-[150px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certifications