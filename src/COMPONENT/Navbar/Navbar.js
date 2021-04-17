import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
    
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    
    
    return (
        <div className="siv">
            <nav className="nav">
                <a className="icon" href="#">
                    Roshan
                </a>
                <div className="bars" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <div className="content">
                    <ul className={click? "nav-menu active":"nav-menu"}>
                    <li className="links">
                            <a href="#" className="link">
                                Home
                            </a>
                        </li>
                        <li className="links">
                            <a href="./Projects" className="link">
                                Projects
                            </a>
                        </li>
                        <li className="links">
                            <a href="./" className="link">
                                About
                            </a>
                        </li>
                        <li className="links">
                            <a href="" className="link">
                                Contact
                            </a>
                        </li>
                       

                    </ul>
                </div>

        </nav>
        </div>
    )
}



export default Navbar

