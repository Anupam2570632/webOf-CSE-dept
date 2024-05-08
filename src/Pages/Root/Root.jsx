import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-cabin">
            <Outlet />
        </div>
    );
};

export default Root;