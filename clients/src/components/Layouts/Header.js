import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import { useAuth } from '../../context/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem("auth");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand font-34px" ><FaShopify className='icon-large' /> Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/policy" className="nav-link" >Policy</Link>
                            </li>
                            {
                                !auth.user ? (
                                    <>
                                        <li className="nav-item">
                                            <Link to="/register" className="nav-link" >Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link" >Login</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {auth?.user?.name}
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">Dashboard</Link></li>
                                                <li><Link to={"/login"} onClick={handleLogout} className="dropdown-item">Logout</Link></li>
                                            </ul>
                                        </div>
                                    </>
                                )

                            }
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
