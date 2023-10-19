import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

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

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        <div className="navbar bg-slate-200 rounded-b-xl w-4/5 mx-auto shadow-xl sticky top-0 z-10">
            <div className="w-full flex items-center">
                <div className="navbar-start lg:absolute">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-start hidden lg:block">
                    <div className="flex items-center">
                        <img width="100px" src="/Logo.png" alt="" />
                        <p className="text-2xl font-bold">Shakil_Tech</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    {
                        user ? <img className="rounded-full w-10 h-10" src={user.photoURL} alt="" /> :
                            <CgProfile className="md:text-2xl lg:text-4xl"></CgProfile>
                    }
                    {
                        user ? <p>{user.displayName}</p> : ''
                    }
                    <div>
                        {
                            user ? <button onClick={handleLogOut} className=" bg-slate-300 lg:py-2 px-1 md:px-2 lg:px-4 text-xl font-semibold rounded-xl ">Log Out</button> :
                                <Link to='/login'><button className=" bg-slate-300 lg:py-2 px-1 md:px-2 lg:px-4 text-xl font-semibold rounded-xl">Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;