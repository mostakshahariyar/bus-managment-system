import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

export default function Layout() {
  return (
<>
<Navbar/>
<Outlet />
<Footer />
</>
    )
}
