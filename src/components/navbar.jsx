import { Link, Outlet } from "react-router-dom";
import navbarStyle from '../modules/navbar.module.css';

function Navbar(){
    return (
        <>
            <div className={`${navbarStyle.outerOfNavbar} navigation`}>
                <div className={`${navbarStyle.navbar}`}>
                    <Link className={`${navbarStyle.link} ${navbarStyle.titlelink}`} to="/">Blood Bank</Link>
                    <div className={navbarStyle.childnavbar}>
                        <Link className={navbarStyle.link} to="/adddonor">Add Donor</Link>
                        <Link className={navbarStyle.link} to="/about">About</Link>
                    </div>
                </div>
            </div>
            
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Navbar;