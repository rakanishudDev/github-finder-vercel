import {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
    const {alert} = useContext(AlertContext);
    return alert !== null && (
            <p className="alert-message">{alert.type === 'error' && alert.msg}</p>
    )
}

export default Alert
