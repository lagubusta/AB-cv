import React from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className='cont-l'>
                <li  className='l'><Link to="/">Inicio</Link></li>
                <li  className='l'><Link to="/skills">Skills</Link></li>
                <li  className='l'><Link to="/contacto">Contacto</Link></li>
                <li  className='l'><Link to="/experiencia">Experiencia</Link></li>
            </ul>
        </nav>

    )
}

export default NavBar;