import {CaretRightFilled} from '@ant-design/icons'

function Feature() {
  return (
    <div className="w-[90%] md:w-[80%] py-[50px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
        <p className="font-bold">Features of Our Courses</p>
        <h1 className="font-bold text-[40px] my-[20px]">Why Choose Us?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          molestias vitae ipsum officiis quibusdam natus ducimus quasi ipsa,
          maxime expedita fugit repudiandae laborum cumque voluptatum omnis
          accusantium inventore saepe recusandae!
        </p>
      </div>
      <div className="">
        <div className="flex">
          <div className="px-[10px]">
            <CaretRightFilled className='bg-gradient-to-br from-violet-800 to-rose-800 text-white p-[5px] rounded-[50%]'/>
          </div>
          <div className="">
            <h1 className="text-[20px] font-bold">Best Industry Leaders</h1>
            <p className="mt-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              libero vel itaque doloremque id natus quidem dolorum hic explicabo
              harum iste iusto corrupti, nisi totam expedita nihil similique
              soluta. Fugit.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="px-[10px]">
            <CaretRightFilled className='bg-gradient-to-br from-violet-800 to-rose-800 text-white p-[5px] rounded-[50%]'/>
          </div>
          <div className="">
            <h1 className="text-[20px] font-bold"> Learn Online at Your Own Pace</h1>
            <p className="mt-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              libero vel itaque doloremque id natus quidem dolorum hic explicabo
              harum iste iusto corrupti, nisi totam expedita nihil similique
              soluta. Fugit.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="px-[10px]">
            <CaretRightFilled className='bg-gradient-to-br from-violet-800 to-rose-800 text-white p-[5px] rounded-[50%]'/>
          </div>
          <div className="">
            <h1 className="text-[20px] font-bold">Professional Certification</h1>
            <p className="mt-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              libero vel itaque doloremque id natus quidem dolorum hic explicabo
              harum iste iusto corrupti, nisi totam expedita nihil similique
              soluta. Fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
