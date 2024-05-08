import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/academic'}>Academic</NavLink></li>
        <li><NavLink to={'/event'}>Event</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
    </>

    return (
        <div className="w-full bg-green-100 sticky z-10 top-0">
            <div className="navbar w-11/12 md:w-4/5 max-w-[1500px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="flex items-center gap-1 text-xl"><h2>Tech<span className="text-blue-300">Nova</span></h2> University</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;