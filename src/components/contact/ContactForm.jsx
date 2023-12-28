import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function ContactForm() {
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
        <div className="bg-white shadow-2xl p-[40px] rounded-[10px]">
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
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-gray-200 focus:outline-none border-gray-300 border-[1px] py-[15px] px-[20px] w-[100%] my-[10px]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-gray-200 focus:outline-none border-gray-300 border-[1px] py-[15px] px-[20px] w-[100%] my-[10px]"
            />
            <textarea
              name="massage"
              id=""
              placeholder="your Message"
              cols="30"
              rows="5"
              className="bg-gray-200 focus:outline-none border-gray-300 border-[1px] py-[15px] px-[20px] w-[100%] my-[10px]"
            ></textarea>
            <input
              type="submit"
              value="SEND MESSAGE"
              className="py-[10px] px-[15px] rounded-[20px] bg-[#d326ed] my-[5px] text-white font-semibold hover:bg-black duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
