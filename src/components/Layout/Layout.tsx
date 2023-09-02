import './Layout.scss'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Header />
            <div>
                <Outlet/>
            </div>
            <Footer />
        </>
    );
}