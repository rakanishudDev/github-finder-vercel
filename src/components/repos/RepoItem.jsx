import PropTypes from "prop-types";
import {FaEye, FaInfo, FaLink,  FaStar, FaUtensils} from 'react-icons/fa';

function RepoItem({repo}) {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo

    return (
        <div className="repo-item">
            <div className="repo-item-content">
                <div className="repo-title">
                    <h3>
                    <a className="repo-title-link" href={html_url} target="_blank" rel="noreferrer">
                    <FaLink className="FaLink-icon" />
                   {name}
                   </a></h3>
                   </div>
                   <div className="repo-description">
                    <p className="p">{description}</p>
                   </div>
                   <div className="repo-badges-container">
                        <div className="repo-badge watchers">
                            <FaEye className="Fa-icon"/>{watchers_count}
                        </div>
                        <div className="repo-badge stargazers">
                            <FaStar className="Fa-icon"/>{stargazers_count}
                        </div>
                        <div className="repo-badge issues">
                            <FaInfo className="Fa-icon"/>{open_issues}
                        </div>
                        <div className="repo-badge forks">
                            <FaUtensils className="Fa-icon"/>{forks}
                        </div>
                   </div>
            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem
