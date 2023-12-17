import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAuthState, setAuthToken, setCreds, setUserData } from '../reducers/auth-reducer'
import { getAsyncStorageItem, getAsyncStorageObjectItem } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';

const initialState = {
    isLoggedIn: '',
    userData: {},
    authToken: '',
}

function useCheckLogin() {
    const authState = useSelector(getAuthState);
    // const { isLoggedIn } = useSelector(getAuthState);
    // const dispatch = useDispatch();
    const [loggedInStatus, setLoggedInStatus] = useState(initialState);

    async function getAsyncDetails() {
        const userLoggedIn = await getAsyncStorageItem(ASYNC_STORAGE_KEY.IS_LOGGED_IN);
        const userDataAsync = await getAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA);
        const authTokenAsync = await getAsyncStorageItem(ASYNC_STORAGE_KEY.AUTH_TOKEN);

        setLoggedInStatus((prev) => ({
            ...prev,
            isLoggedIn: userLoggedIn === 'true',
            userData: userDataAsync,
            authToken: authTokenAsync,
        }));
        // dispatch(setUserData(loggedInStatus.userData));
        // dispatch(setAuthToken(loggedInStatus.authToken));
    }

    useEffect(() => {
        getAsyncDetails();
    }, [authState])
    // }, [isLoggedIn])

    return loggedInStatus;
}

export default useCheckLogin
