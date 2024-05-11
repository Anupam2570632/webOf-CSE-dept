import { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const [theme, setTheme] = useState(true)


    if (theme) {
        document.querySelector('html').setAttribute('data-theme', 'light')
    }
    else {
        document.querySelector('html').setAttribute('data-theme', 'dark')
    }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/academic'}>Academic Programs</NavLink></li>
        <li><NavLink to={'/teacher'}>Our Teachers</NavLink></li>
        <li><NavLink to={'/notice'}>Notice</NavLink></li>
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
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <div>
                        {
                            theme ?
                                <FiSun className="text-2xl hover:cursor-pointer" onClick={() => setTheme(!theme)} />
                                :
                                <FaMoon className="text-2xl hover:cursor-pointer" onClick={() => setTheme(!theme)} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;