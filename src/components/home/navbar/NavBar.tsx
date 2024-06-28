import { NavLink } from "react-router-dom";
import { Navs } from "./Navs";
import call from "../../../assets/svgs/call.png"
 
function NavBar() {
    return(
        <nav className="p-12 flex text-xl justify-around items-center bg-[#FFF5EF] text-yellow-900 font-medium">
            <ul className="flex gap-8">
            {Navs.map((item) => (
                <NavLink to={`${item.path}`}>
                    {item.label}
                </NavLink>
            ))}
            <NavLink to={"/"} className="flex text-2xl">
                <img src={call} alt="call" className="" />
                <p>+91 9876543210</p>
            </NavLink>
            </ul>

        </nav>
    )
}

export default NavBar;
