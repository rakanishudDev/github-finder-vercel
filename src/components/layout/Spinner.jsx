import SpinnerLoading from './assets/spinner.gif'

function Spinner() {
    return (
        <div className="spinner">
            <img width={180} className="spinner-img" src={SpinnerLoading} alt="Loading..."></img>
        </div>
    )
}

export default Spinner
