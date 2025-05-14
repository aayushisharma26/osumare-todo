import logo from "../assets/image.png";
import { useState } from "react";

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo-section">
                <img src={logo} alt="do List Logo" className="logo-img" />
            </div>
        
            <div className={`nav-container ${menuOpen ? 'show' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">More Option</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className="auth-buttons">
                    <button className="btn-outline">Log In</button>
                    <button className="btn-filled">Sign Up</button>
                </div>
            </div>
            
            <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
}