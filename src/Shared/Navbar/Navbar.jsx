import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/'>Home</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/addProduct'>Add Product</NavLink></li>

        <li><NavLink className={({ isActive, isPending }) =>
            `text-sm md:text-lg lg:text-xl ${isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""}`
        } to='/cart'>My Cart</NavLink></li>


    </>

    return (
        <div className="navbar bg-slate-200 rounded-b-xl w-4/5 mx-auto shadow-xl sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center">
                        <img width="100px" src="/Logo.png" alt="" />
                        <p className="text-2xl font-bold">Shakil_Tech</p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;