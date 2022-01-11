import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function UserItem({user: {login, avatar_url}}) {
    return (
        <div className="search-result">
            <div className="search-result-content">
                <div className="search-result-avatar">
                    <img className="search-result-avatar-img" width="100px" src={avatar_url} alt="profile" />
                </div>
                <div className="search-result-title">
                    <p className="search-result-login">{login}</p>
                    <Link className="search-result-link" to={`/user/${login}`}>Visit Profile</Link>
                </div>
            </div>
        </div>
    )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
export default UserItem
