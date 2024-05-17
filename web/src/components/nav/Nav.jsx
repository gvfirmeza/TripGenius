import React from 'react';
import './Nav.css';
import Logo from './logo.png';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav-lista'>
                <li><img className='nav-logo' src={Logo}/></li>
                <li className='nav-link'>Inscreva-Se</li>
            </ul>
        </nav>
    );
};

export default Nav;