import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
    return (
        <div className="font-cabin">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;