import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonValue, setButtonValue] = useState("SEND MESSAGE");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    massage: "",
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        setIsModalOpen(false);
        setButtonValue("SEND MESSAGE");
        window.location.reload();
      }, 2000);
    }
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonValue("Sending . . .")
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzQubW1j3bTbvR-aM9X7hq5D_RPj-g3xsi9s16BVyUedzM74KHTtrc-7Sbo1iWruqvN/exec",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setIsModalOpen(true);
      } else {
        // Handle error, e.g., show an error message
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="w-[90%] my-[50px] mx-auto gap-5 md:w-[80%] grid grid-flow-row grid-cols-1 md:grid-cols-2">
      <div className="">
        <h1 className="font-semibold text-[50px] mt-[10px]">Contact Us</h1>
        <div className="flex space-x-1 my-[10px]">
          <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
          <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
          <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
          <div className="w-[15px] h-[7px] bg-[#d326ed] skew-x-[-45deg]"></div>
        </div>
        <p className="my-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          officia voluptate placeat provident voluptas odit.
        </p>
        <div className="my-[20px]">
          <div className="flex my-[10px]">
            <div className=" h-full items-center mt-[5px]">
              <FaLocationDot />
            </div>
            <div className="pl-[10px]">
              123 Fifth Avenue, New York, NY 10160
            </div>
          </div>
          <div className="flex my-[10px]">
            <div className=" h-full items-center mt-[5px]">
              <IoIosMail />
            </div>
            <div className="pl-[10px]">contact@example.com</div>
          </div>
          <div className="flex my-[10px]">
            <div className=" h-full items-center mt-[5px]">
              <FaPhoneAlt />
            </div>
            <div className="pl-[10px]">1234567890</div>
          </div>
        </div>
        <div className="flex my-[20px]">
          <div className="">
            <h1>Keep in Touch</h1>
          </div>
          <div className="flex h-full  items-center space-x-5 px-[10px] pt-[5px]">
            <FaInstagramSquare />
            <FaWhatsappSquare />
            <FaFacebookSquare />
          </div>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.57689648295!2d75.97948457520428!3d10.995274389167067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b3ee33351edf%3A0x47eff5071e2c191d!2sRootsys%20International!5e0!3m2!1sen!2sin!4v1703222234595!5m2!1sen!2sin"
            width="500"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="">
        <form
          className="bg-white shadow-2xl p-[40px] rounded-[10px]"
          onSubmit={handleSubmit}
        >
          <div className="">
            <h1 className="font-bold text-[25px] my-[10px]">Have Questions?</h1>
            <p className="font-thin my-[10px]">
              Feel free to reach out! We're here to help and answer any
              questions you may have
            </p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-gray-200 focus:outline-none border-gray-300 border-[1px] py-[15px] px-[20px] w-[100%] my-[10px]"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-gray-200 focus:outline-none border-gray-300 border-[1px] py-[15px] px-[20px] w-[100%] my-[10px]"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-gray-200 focus:outline-none border-gray-300 border-[1px] py-[15px] px-[20px] w-[100%] my-[10px]"
              value={formData.subject}
              onChange={handleChange}
            />

            <textarea
              onChange={handleChange}
              placeholder="Message"
              className="bg-gray-200 
            
            focus:outline-none border-gray-300 border-[1px] py-[15px] px-[20px] w-[100%] my-[10px]"
              name="massage"
              id=""
              cols="30"
              rows="5"
            >
              {formData.message}
            </textarea>

            <input
              type="submit"
              value={buttonValue}
              disabled={buttonValue === "sending..."}
              className="py-[10px] px-[15px] rounded-[20px] bg-[#d326ed] my-[5px] text-white font-semibold hover:bg-black duration-500"
            />
          </div>
        </form>
      </div>
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        width={"200px"}
      >
        <CheckCircleFilled className="text-green-600 " />{" "}
        <span className="ml-[10px] font-semibold">Success</span>
      </Modal>
    </div>
  );
}

export default ContactForm;
