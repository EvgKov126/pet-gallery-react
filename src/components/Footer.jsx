import '../styles/Footer.css';

const Footer = ({ year, author }) => {
    return (
        <footer className="main-footer">
            <p>&copy; {year} | Розробив {author} | Pet Gallery</p>
        </footer>
    );
};

export default Footer;