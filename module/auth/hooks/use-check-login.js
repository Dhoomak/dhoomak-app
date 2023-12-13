import { useSelector } from 'react-redux'
import { getAuthState } from '../reducers/auth-slice'
import { useEffect, useState } from 'react';
import { getAsyncStorageItem, getAsyncStorageObjectItem } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';

const initialState = {
    isLoggedIn: '',
    userData: {}
}

function useCheckLogin() {
    const authState = useSelector(getAuthState);
    const [loggedInStatus, setLoggedInStatus] = useState(initialState);

    async function getAsyncDetails() {
        const userLoggedIn = await getAsyncStorageItem(ASYNC_STORAGE_KEY.IS_LOGGED_IN);
        const userDataAsync = await getAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA);

        setLoggedInStatus((prev) => ({
            ...prev,
            isLoggedIn: userLoggedIn === 'true',
            userData: userDataAsync,
        }));
    }
    
    useEffect(() => {
        getAsyncDetails();
    }, [authState])

    return loggedInStatus;
}

export default useCheckLogin
