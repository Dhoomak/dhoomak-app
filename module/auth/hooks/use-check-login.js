import { useSelector } from 'react-redux'
import { getAuthState } from '../reducers/auth-slice'
import { useEffect, useState } from 'react';
import { getAsyncStorageItem } from '../../../utils/async-storage';

const initialState = {
    isLoggedIn: '',
    // userData: {}
}

function useCheckLogin() {
    const authState = useSelector(getAuthState);
    const [loggedInStatus, setLoggedInStatus] = useState(initialState);

    async function getAsyncDetails() {
        const userLoggedIn = await getAsyncStorageItem('isLoggedIn');
        setLoggedInStatus({ isLoggedIn: userLoggedIn === 'true' });
    }

    useEffect(() => {
        getAsyncDetails();
    }, [authState])

    return loggedInStatus;
}

export default useCheckLogin
