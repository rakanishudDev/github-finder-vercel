import {useEffect, useContext} from 'react';
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import GithubContext from '../context/github/GithubContext';
import {useParams, Link} from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import ReposList from '../components/repos/RepoList';
import {getUserAndRepos} from '../context/github/GithubActions';

function User() {
    const {user, dispatch, loading, repos} = useContext(GithubContext);
    const params = useParams()
    const gettingUserAndRepos = async () => {
        dispatch({type: 'SET_LOADING'})
        const user = await getUserAndRepos(params.login)
        dispatch({type: 'GET_USER_AND_REPOS', payload: user})
    }
    // const gettingRepos = async () => {
    //     dispatch({type: 'SET_LOADING'})
    //     const repos = await getRepos(params.login)
    //     dispatch({type: 'GET_REPOS', payload: repos})
    // }
    useEffect(() => {
        gettingUserAndRepos()
        // gettingRepos()
    }, [])
    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;
    if (loading) {
        return <Spinner />
    }
    return (
        <div className="user-profile-container">
            <div className="user-profile-margin">
            <Link className="user-profile-backtosearch" to='/' >Back To Search </Link>
            <div className="user-profile">
            <div className="user-profile-avatar">
                <figure>
                    <img className="user-profile-image" width="200px" src={avatar_url} alt="avatar" />
                </figure>
            </div>
            <div className="user-profile-details">
                <div className="user-profile-title" >

                    <h1 >{name}</h1>
                    <div className="stats-flex-row">
                    <p className="user-profile-login"><i>{login}</i></p>
                    <div className="badges">
                        <p className="badge-type">{type}</p>
                        { hireable && <p className="badge-hireable">{hireable}</p>}
                        
                    </div>
                    </div>
                </div>
                <p>{bio}</p>
                <div className="user-profile-actions">
                    <a className="user-profile-visit " href={html_url} target="_blank" rel="noreferrer">Visit Github Profile</a>
                </div>
                <div className="user-profile-stats-container">
                <div className="user-profile-stats">
                    {location && (
                        <div className="stat-title">
                            Location
                            <div className="stat">
                                <address>{location}</address>
                            </div>
                        </div>
                    )}
                </div>
                <div className="user-profile-stats">
                    {blog && (
                        <div className="stat-title">
                            Website
                            <div className="stat">
                                <a className="website" href={`https://${blog}`} target="_blank" rel="noreferrer">{blog}</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className="user-profile-stats">
                    {twitter_username && (
                        <div className="stat-title">
                            Twitter
                            <div className="stat">
                                <a className="website" href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">{twitter_username}</a>
                            </div>
                        </div>
                    )}
                </div>
                </div>
            </div>
            </div>
                <div className="user-profile-stats stats-flex-row-spacearound">
                    <div className="stat-title extra-margin">
                        <div className="stats-flex-row">
                        <div className="mx-auto  mx-right">
                            <FaUsers className="fausers" />
                        </div>
                        <div className="stats-value">
                            <p className="text-gray">Followers</p>
                            {followers}
                        </div>
                        </div>
                    </div>
                    <div className="stat-title extra-margin">
                        <div className="stats-flex-row">
                        <div className="mx-auto mx-right">
                            <FaUserFriends className="fausers " />
                        </div>
                        <div className="stats-value">
                        <p className="text-gray">Following</p>
                            {following}
                        </div>
                        </div>
                    </div>
                    <div className="stat-title extra-margin">
                        <div className="stats-flex-row">
                        <div className="mx-auto mx-right">
                            <FaCodepen className="fausers " />
                        </div>
                        <div className="stats-value">
                        <p className="text-gray">Public Repos</p>
                            {public_repos}
                        </div>
                        </div>
                    </div>
                    <div className="stat-title extra-margin">
                        <div className="stats-flex-row">
                        <div className="mx-auto mx-right">
                            <FaStore className="fausers " />
                        </div>
                        <div className="stats-value">
                        <p className="text-gray">Public Gists</p>
                            {public_gists}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="user-repos">
                    {repos && <ReposList repos={repos} />}
                </div>
           </div>
        </div>
    )
}

export default User
