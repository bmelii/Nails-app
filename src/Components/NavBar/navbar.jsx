import React from 'react'
import './navbar.css'
import logo from '../../naillogo.jpg';
import { Link } from 'react-scroll'
import ContactImg from '../../Components/NavBar/Contactme.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt='Logo' className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About Me</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">My Works</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Services</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={ContactImg} alt="" className="desktopMenuImg" />Contact Me </button>
        </nav>
    )
}

export default Navbar