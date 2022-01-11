import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

function Navbar({title}) {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <FaGithub className="navbar-logo"/>
                <Link to='/' className="navbar-header-link">
                <p>{title}</p>
                </Link>
            </div>
            
            <div className="navbar-links">
                <button className="navbar-links-btn">
                    <Link to="/" className="navbar-links-link">Home
                    </Link>
                </button>
                <button className="navbar-links-btn">
                    <Link to="/about" className="navbar-links-link">About
                    </Link>
                </button>
            </div>
        </nav>
    )
}
Navbar.defaultProps = {
    title: 'Github Finder'
}
Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar

