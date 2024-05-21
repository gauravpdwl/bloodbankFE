import { Link, Outlet } from "react-router-dom";
import navbarStyle from '../assets/modules/navbar.module.css';

function Navbar(){
    return (
        <>
            <div className={`${navbarStyle.outerOfNavbar} navigation`}>
                <div className={`${navbarStyle.navbar}`}>
                    <div className={navbarStyle.titlenavbar}>
                        <Link className={`${navbarStyle.link} `} to="/">
                            <p className={`${navbarStyle.para} ${navbarStyle.titlelink}`}>BloodBank</p>
                        </Link>
                    </div>
                    
                    <div className={navbarStyle.childnavbar}>

                        <Link className={navbarStyle.link} to="/donors">
                            <p className={navbarStyle.para}>Donors</p>
                        </Link>
                       
                        <Link className={navbarStyle.link} to="/adddonor">
                            <p className={navbarStyle.para}>Add Donor</p>
                        </Link>
                    
                    
                        <Link className={navbarStyle.link} to="/about">
                            <p className={navbarStyle.para}>About</p>
                        </Link>
                      
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