import { IoMdMailUnread } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";

function Contact() {
  const handelFrom = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col w-full h-full bg-[#eaf9e7]">
      <div
        className="bg-cover bg-no-repeat bg-center h-[300px] text-center mt-20 bg-gray-500"
        style={{
          backgroundImage: "url('https://i.ibb.co/qY8SKWX/contact-us.jpg')",
        }}
      >
        <p className="text-white bg-black bg-opacity-25 h-full flex items-center justify-center text-5xl font-semibold">
          Contact Us
        </p>
      </div>
      <div className="lg:flex grid sm:grid-cols-2 lg:mx-0 mx-10 gap-20 md:gap-32 justify-center items-center my-36 lg:gap-x-36">
        <div className="flex flex-col border-2 border-gray-500 px-10 items-center justify-center">
          <IoLocationSharp className="text-5xl bg-[#eaf9e7] -translate-y-10" />
          <p className="text-3xl font-semibold -translate-y-6 font-roboto text-justify">
            Our location
          </p>
          <small className="text-md -translate-y-6 text-gray-500">
            Embankment Drive Road
          </small>
          <small className="text-md -translate-y-6 text-gray-500">
            Uttara-10, Dhaka-1230
          </small>
        </div>
        <div className="flex flex-col border-2 border-gray-500 px-10 items-center text-justify justify-center">
          <IoCall className="text-5xl bg-[#eaf9e7] -translate-y-8" />
          <p className="text-3xl font-semibold -translate-y-6 font-roboto">
            Give A Call
          </p>
          <small className="text-md -translate-y-6 text-gray-500">
            +880 1761208866
          </small>
          <small className="text-md -translate-y-6 text-gray-500">
            +880 1761208866
          </small>
        </div>
        <div className="flex flex-col border-2 border-gray-500 px-10 items-center text-justify justify-center">
          <IoMdMailUnread className="text-5xl bg-[#eaf9e7] -translate-y-6 px-1" />
          <p className="text-3xl font-semibold -translate-y-6 font-roboto">
            Help Desk
          </p>
          <small className="text-md -translate-y-6 text-gray-500">
            info@ur.com
          </small>
          <small className="text-md -translate-y-6 text-gray-500">
            uriride@ur.com
          </small>
        </div>
      </div>
      {/* google map location */}
      <div className="flex  flex-col justify-center items-center w-[100%]">
        <p className="text-4xl font-roboto font-semibold pb-5">
          Google map Location
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0435352179256!2d90.38774792519186!3d23.888074878576703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c469610d01b9%3A0xaa41c726134f443b!2sIUBAT%20-%20International%20University%20of%20Business%20Agriculture%20and%20Technology!5e0!3m2!1sen!2sbd!4v1710187313996!5m2!1sen!2sbd"
          style={{ border: "0", width: "80%", height: "700px" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
        <form
          onClick={handelFrom}
          className="flex flex-col items-center gap-5 justify-center my-20"
        >
          <div className="lg:w-2/4 w-3/4 flex lg:flex-row flex-col items-center justify-center gap-5">
            <input type="text"  className="lg:w-1/2 w-full py-2 ps-5" required placeholder="Your Name*" />
            <input type="email" className="lg:w-1/2 w-full py-2 ps-5" required placeholder="Your Email*" />
          </div>
          <input
            type="text"
            className="lg:w-2/4 w-3/4 py-2 ps-5"
            required
            placeholder="Subject or topic*"
          />
          <textarea  type="text" className="lg:w-2/4 w-3/4 pt-2 ps-5 h-40" required placeholder="Message*" />
          <div className="w-2/4">
          <button type="submit" className="bg-[#3fc495] text-white font-roboto font-semibold px-4 py-2 text-left ">Submit</button>
          </div>
        </form>
    </div>
  );
}

export default Contact;
