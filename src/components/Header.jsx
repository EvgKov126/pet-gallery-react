import '../styles/Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
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
            </div>
        </header>
    );
};

export default Header;