import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    return (
        <header>
            <div className="header-container">
                <h1>Peter Ostertag</h1>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={activeTab === '/' ? 'active' : ''}
                                onClick={() => setActiveTab('/')}
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/portfolio"
                                className={activeTab === '/portfolio' ? 'active' : ''}
                                onClick={() => setActiveTab('/portfolio')}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={activeTab === '/contact' ? 'active' : ''}
                                onClick={() => setActiveTab('/contact')}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/resume"
                                className={activeTab === '/resume' ? 'active' : ''}
                                onClick={() => setActiveTab('/resume')}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;