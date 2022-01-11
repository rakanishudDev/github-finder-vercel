import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';
function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-text">
                <h1>Oops!</h1>
                <h2>404 - Not Found</h2>
            </div>
            <div className="not-found-nav">
                <Link to="/" className="not-found-link" >
                <FaHome className="not-found-icon" />
                Back To Home
                </Link>
                
            </div>
        </div>
    )
}

export default NotFound
