import { useState } from "react";
import { FaBus } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEventNote, MdOutlineLocalPhone } from "react-icons/md";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import navImg from "./../../assets/navlogo.png";


const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="md:shadow-lg fixed w-full top-0 z-10 left-0">
      <nav className="bg-[#3FC495]">
        <div className="md:flex md:justify-around md:items-center">
          <Link to="/" className="w-40 h-20 flex flex-col justify-center items-center">
            <img className="h-auto" src={navImg} alt="nav image" />
          </Link>
          <div>
            <div onClick={()=>setOpen(!open)} className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            {
                open ? <IoMdClose /> :  <RiMenu2Fill />
            }
            </div>
            <ul className={`md:flex px-10 md:px-0 lg:flex-row lg:space-x-8 lg:mt-0 pb-5 md:pb-0 md:mb-0 absolute md:static bg-[#3FC495] md:z-auto z-[-1] left-0 w-full transition-all ease-in duration-500 ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
              <li>
                <NavLink
                  to="/bus"
                  className={({ isActive }) =>
                    `hover:bg-white hover:text-black hover:rounded-full py-5 px-5 duration-500 flex justify-center items-center h-8 gap-2 ${
                      isActive ? " bg-white rounded-full py-5 px-5 " : "text-white"
                    }`
                  }
                >
                    <FaBus />
                  <span className="font-semibold ">Bus</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/air"
                  className={({ isActive }) =>
                    `hover:bg-white hover:text-black hover:rounded-full py-5 px-5 duration-500 flex justify-center items-center h-8 gap-2 ${
                      isActive ? " bg-white rounded-full py-5 px-5 " : "text-white"
                    }`
                  }
                >
                 <PiAirplaneTakeoffFill  />
                  <span className="font-semibold ">Air</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/train"
                  className={({ isActive }) =>
                    `hover:bg-white hover:text-black hover:rounded-full py-5 px-5 duration-500 flex justify-center items-center h-8 gap-2 ${
                      isActive ? " bg-white rounded-full py-5 px-5 " : "text-white"
                    }`
                  }
                >
                  <FaTrainSubway  />
                  <span className="font-semibold ">Train</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    `hover:bg-white hover:text-black hover:rounded-full py-5 px-5 duration-500 flex justify-center items-center h-8 gap-2 ${
                      isActive ? " bg-white rounded-full py-5 px-5 " : "text-white"
                    }`
                  }
                >
                  <MdOutlineEventNote />
                  <span className="font-semibold ">Event</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:bg-white hover:text-black hover:rounded-full py-5 px-5 duration-500 flex justify-center items-center h-8 gap-2 ${
                      isActive ? " bg-white rounded-full py-5 px-5 " : "text-white"
                    }`
                  }
                >
                  <MdOutlineLocalPhone />
                  <span className="font-semibold ">Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
