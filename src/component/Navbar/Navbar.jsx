import { FaBus } from "react-icons/fa";
import { MdOutlineEventNote, MdOutlineLocalPhone } from "react-icons/md";
import { PiAirplaneTakeoffDuotone, PiTrainLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import navImg from "./../../assets/navlogo.png";





const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#3FC495] shadow-lg shadow-gray-300">
        <div className="flex justify-around items-center">
          <div className="w-40 h-20 flex flex-col justify-center items-center">
            <img className="h-auto" src={navImg} alt="nav image" />
          </div>
          <div>
            <ul className="flex flex-col  lg:flex-row lg:space-x-8 lg:mt-0">
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
                 <PiAirplaneTakeoffDuotone />
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
                  <PiTrainLight />
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
