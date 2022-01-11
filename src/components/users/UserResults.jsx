import {useContext} from 'react';
import SpinnerLoading from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
    const {users, loading} = useContext(GithubContext)
    


  
    
    if (!loading) {
        return (
            <div className="search-results-container">
                {users.length > 0 && users.map(user => {
                    return <UserItem key={user.id} user={user} />
                })}
            </div>
        )
    } else {
        return <SpinnerLoading />
    }
    
}

export default UserResults
