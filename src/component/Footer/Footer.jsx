import { MdEmail, MdLocationOn, MdOutlineCopyright, MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import bkash from "../../assets/bkash.jpg";
import logo from "../../assets/navlogo.png";
import nogod from "../../assets/nogod.png";
import rocket from "../../assets/rocket.png";
import visa from "../../assets/visa.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col w-full"> 
      {/* for subscriber input form */}
      <div></div>
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
              <Link to="/about" className="text-xl text-white underline decoration-white decoration-1.5">About</Link>
              <Link to="/about" className="text-xl text-white underline decoration-white decoration-1.5">Cookie Policy</Link>
              <Link to="/about" className="text-xl text-white underline decoration-white decoration-1.5">Booking Policy</Link>
              <Link to="/about" className="text-xl text-white underline decoration-white decoration-1.5">Contact Us</Link>
            </div>
            <div className="flex flex-col gap-y-3">
              <Link to="/about" className="text-xl text-white underline decoration-white decoration-1.5">Privacy Policy</Link>
              <Link to="/about" className="text-xl text-white underline decoration-white decoration-1.5">Treams and conditon</Link>
              <Link to="/about" className="text-xl text-white underline decoration-white decoration-1.5">My Account</Link>
            </div>
            </div>
        </div>
      </div>
      <hr className="text-white pb-5"/>
      <div className="flex md:flex-row flex-col justify-between items-center mx-20">
        <div className="md:mb-0 mb-3">
        <p className="text-white font-think sm:flex justify-center items-center">Copyright 
        <MdOutlineCopyright /> 2024. All Rights Reserved
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