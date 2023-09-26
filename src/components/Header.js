import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header-container">
                <h1>Peter Ostertag</h1>
                <nav>
                    <ul>
                        <li><Link to="/">About Me</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;