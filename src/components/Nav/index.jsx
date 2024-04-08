import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/about" className='nav-link'>
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className='nav-link'>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className='nav-link'>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" className='nav-link'>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;