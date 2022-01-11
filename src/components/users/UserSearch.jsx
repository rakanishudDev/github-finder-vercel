import {useState, useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import Alert from '../layout/Alert';
import {searchUsers} from '../../context/github/GithubActions';

function UserSearch() {
    const [text, setText] = useState('');
    const {users, dispatch, clearUsers} = useContext(GithubContext);
    const {alert, setAlert} = useContext(AlertContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please Enter Something', 'error');
        } else {
            const users = await searchUsers(text);
            dispatch({type: 'SET_LOADING'})
            dispatch({type: 'GET_USERS', payload: users})
            setText('');
        }
    }
    const handleClear = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    return (
        <div className="user-search">
            <Alert />
            <form onSubmit={handleSubmit}>
            <div>
                <input className="search-input" type="search" placeholder="Search" value={text} onChange={(e) => setText(e.target.value)} />
                <button className="search-submit" type="submit">GO</button>
            </div>
            </form>
           { users.length > 0 && <div>
                <button className="search-clear-btn" onClick={() => handleClear()}>Clear</button>
            </div>}
        </div>
    )
}

export default UserSearch
