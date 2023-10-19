import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Mood from "../Mood/Mood";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Mood></Mood>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;