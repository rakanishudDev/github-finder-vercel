import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
function Home() {
    return (
        <div className="home">
            <UserSearch />
            <UserResults />
            
        </div>
    )
}

export default Home
