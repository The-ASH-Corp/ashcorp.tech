import { fetchCourse } from "../../api/CourseApi";
import { useState } from "react";
import { Modal } from "antd";
import { useQuery } from "react-query";
import FrontEndImg from "../../assets/images/courseImges/1_i3laWIzy2jaemiCURVPrMg.jpg";
import { motion } from "framer-motion";
import MocupImg from "../../assets/images/courseImges/Untitled-1.png"

function CourseCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const { isLoading, error, data: course } = useQuery("courses", fetchCourse);

  if (isLoading) {
    return <div>Loadinig</div>;
  }
  if (error) return "An error has occurred: " + error.message;
  console.log({ course });

  return (
    <div className="w-full mt-[100px]">
      {isLoading && (
        <p className="text-2xl font-semibold mt-[100px] text-center">
          Loading courses...
        </p>
      )}

      <div className=" md:w-[80%] w-[90%] grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto mb-[50px]">
        {course.map((c) => (
          <div
            key={c.id}
            className=" mt-[50px] shadow-2xl rounded-[10px] overflow-hidden transform transition duration-500 hover:scale-[1.1]"
          >
            <img
              src={
                c.courseMaterials[0]?.thumbnail
                  ? `${c.baseurl}/${c?.courseMaterials[0]?.thumbnail}`
                  : FrontEndImg
              }
              className="w-full h-[225px]"
              alt=""
            />
            <h1 className="text-[30px] font-bold w-full text-center py-5">
              {c.name}
            </h1>
            <p className="px-[15px] text-center">{c.description}</p>
            <div className="w-full flex justify-center md:mt-[35px] my-5">
              <motion.button
                whileHover={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="w-[95%] py-2 bg-[#d326ed] text-white rounded-md"
                onClick={handleModalOpen}
              >
                duration: {c.metadata[0]?.duration}
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <img src={MocupImg} alt="" />
      </Modal>
    </div>
  );
}

export default CourseCards;
