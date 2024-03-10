import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdOutlineCopyright, MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import bkash from "../../assets/bkash.jpg";
import logo from "../../assets/navlogo.png";
import nogod from "../../assets/nogod.png";
import rocket from "../../assets/rocket.png";
import visa from "../../assets/visa.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-full"> 
      {/* for subscriber input form */}
      <div className="bg-cover bg-no-repeat bg-center h-[700px] text-center"  style={{backgroundImage: "url('/src/assets/footer.jpg')"}}>
        <div className="flex flex-col justify-center items-center md:w-full h-full">
          <div className="bg-[#188a62] rounded-lg px-10 py-6 mx-7 lg:m-0 lg:px-16 lg:py-10 text-white">
          <h1 className="md:text-5xl text-3xl font-semibold md:pb-0 pb-3 md:leading-loose">Subscribe our newsletter</h1>
          <p className="pb-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente labore, eius est architecto eos!</p>
          <div className="md:w-11/12 sm:bg-white md:h-10 flex sm:flex-row flex-col sm:justify-center sm:items-center md:py-6 md:px-1 sm:border-2 sm:border-red-300 sm:rounded-full sm:overflow-hidden">
            <input type="text" placeholder="Enter your email" className="sm:border-none rounded focus:outline-none w-full h-10 ps-5 text-black" name="subscribe" id="subscribe" />
            <button className="bg-red-500 hover:text-black duration-300 text-lg rounded-full font-semibold px-3 py-2 sm:mt-0 mt-4">Subscribe</button>
          </div>
          </div>
        </div>
      </div>
      {/* footer info */}
     <div className="bg-[#188A62] pb-5">
     <div className="lg:flex md:grid md:grid-cols-2 justify-around items-center py-20 px-11">
        <div className="flex flex-col gap-y-6 justify-center md:mr-16 lg:w-[30%]">
          <Link to="/" className="w-44 h-20 ms-3">
            <img src={logo} alt="logo" />
          </Link>
          <p className="text-white text-lg font-mono w-full text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur labore ea alias sunt voluptate quaerat, quia facilis, magnam rerum saepe id ducimus quibusdam doloremque dignissimos! Expedita voluptatum quae possimus doloremque.</p>
        </div>
        <div className="md:mr-0 md:mt-0 mt-5 mr-9 flex flex-col justify-center gap-y-6">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-y-2">
            <MdEmail className="text-white text-2xl"/>
            <p className="text-white text-xl">Email</p>
            </div>
            <div>
              <p className="text-white text-xl underline decoration-white decoration-1.5">info@ur.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-y-2">
            <MdOutlineLocalPhone className="text-white text-2xl"/>
            <p className="text-white text-xl">Phone</p>
            </div>
            <div>
              <p className="text-white text-xl">+88017 6120 8866</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-y-2">
            <MdLocationOn className="text-white text-2xl"/>
            <p className="text-white text-xl">Address</p>
            </div>
            <div>
              <p className="text-white text-xl ">Embankment Drive Road, Dhaka 1230</p>
            </div>
          </div>
         
        </div>
        <div className="flex flex-col justify-center lg:mt-0 mt-5">
          <h1 className="text-2xl text-white underline decoration-white decoreation-1.5 mb-3">Quick Link</h1>
            <div className="md:flex  items-center gap-x-10">
            <div className="flex flex-col gap-y-3 mb-3 md:mb-0">
              <Link to="/about" className="text-xl text-white underline hover:text-black transition-all duration-200 hover:decoration-black decoration-white decoration-1.5">About</Link>
              <Link to="/about" className="text-xl text-white underline hover:text-black transition-all duration-200 hover:decoration-black decoration-white decoration-1.5">Cookie Policy</Link>
              <Link to="/about" className="text-xl text-white underline hover:text-black transition-all duration-200 hover:decoration-black decoration-white decoration-1.5">Booking Policy</Link>
              <Link to="/about" className="text-xl text-white underline hover:text-black transition-all duration-200 hover:decoration-black decoration-white decoration-1.5">Contact Us</Link>
            </div>
            <div className="flex flex-col gap-y-3">
              <Link to="/about" className="text-xl text-white underline hover:text-black transition-all duration-200 hover:decoration-black decoration-white decoration-1.5">Privacy Policy</Link>
              <Link to="/about" className="text-xl text-white underline hover:text-black transition-all duration-200 hover:decoration-black decoration-white decoration-1.5">Treams and conditon</Link>
              <Link to="/about" className="text-xl text-white underline hover:text-black transition-all duration-200 hover:decoration-black decoration-white decoration-1.5">My Account</Link>
            </div>
            </div>
            <div className="flex justify-center items-center gap-5 md:gap-20 mt-6">
              <div className="text-black text-xl bg-white p-2 hover:text-[#188A62] hover:bg-black shadow-md shadow-gray-300 transition-all ease-in duration-300 rounded-full">
                <Link to="https://www.facebook.com">
                <FaFacebookF />
                </Link>
              </div>
              <div className="text-black text-xl bg-white p-2 hover:text-[#188A62] hover:bg-black shadow-md shadow-gray-300 transition-all ease-in duration-300 rounded-full">
                <Link to="https://www.instagram.com">
                <AiFillInstagram />
                </Link>
              </div>
              <div className="text-black text-xl bg-white p-2 hover:text-[#188A62] hover:bg-black shadow-md shadow-gray-300 transition-all ease-in duration-300 rounded-full">
                <Link to="https://www.twitter.com">
                <FaTwitter />

                </Link>
              </div>
              <div className="text-black text-xl bg-white p-2 hover:text-[#188A62] hover:bg-black shadow-md shadow-gray-300 transition-all ease-in duration-300 rounded-full">
                <Link to="https://www.linkedin.com">
                  <FaLinkedinIn/>
                </Link>
              </div>
            </div>
        </div>
      </div>
      <hr className="text-white pb-5"/>
      <div className="flex md:flex-row flex-col justify-between items-center mx-20">
        <div className="md:mb-0 mb-3 flex gap-2 justify-center items-start">
        <MdOutlineCopyright className="text-white text-2xl"/>
        <p className="text-white font-think text-justify">Copyright 
         2024. All Rights Reserved
        </p>
        </div>
        <div className="flex justify-center items-center gap-x-4">
            <img className="w-12 h-10" src={visa} alt="visa logo" />
            <img className="w-12 h-10" src={rocket} alt="rocket logo" />
            <img className="w-12 h-10" src={nogod} alt="nogod logo" />
            <img className="w-12 h-10" src={bkash} alt="bkash" />
        </div>
      </div>
     </div>

    </div>
  )
}

export default Footer