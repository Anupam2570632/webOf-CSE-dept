import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";

const Root = () => {
    return (
        <div className="font-cabin">
            <NavBar/>
            <Outlet />
        </div>
    );
};

export default Root;