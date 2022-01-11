import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({repos}) {
    return (
        <div>
            <h1>Latest Repositories</h1>
            {repos && repos.map(repo => {
                return <RepoItem key={repo.id} repo={repo} />
            })}
        </div>
    )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}
export default RepoList
