import '../styles/Footer.css';

const Footer = ({ year, author }) => {
    return (
        <footer className="main-footer">
            <p>&copy; {year} | Розробив {author} | Лабораторна робота №2</p>
        </footer>
    );
};

export default Footer;