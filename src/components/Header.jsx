import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.svg';

const Header = ({ likedCount = 0 }) => {
    return (
        <header className="main-header">
            <div className="header-container">
                <a href="/" className="logo-area">
                    <img src={logo} alt="Pet Gallery Logo" className="site-logo" />
                </a>

                <nav className="main-nav">
                    <ul>
                        <li><a href="#home">Головна</a></li>
                        <li><a href="#gallery">Улюбленці</a></li>
                        <li><a href="#contact">Контакти</a></li>
                    </ul>
                </nav>

                <div className={`likes-status ${likedCount > 0 ? 'active' : ''}`}>
                    <svg
                        className="heart-svg"
                        viewBox="0 0 24 24"
                        fill={likedCount > 0 ? "#ff7675" : "none"}
                        stroke={likedCount > 0 ? "#ff7675" : "#636e72"}
                        width="24"
                        height="24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
                    <span className="likes-count">{likedCount}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;