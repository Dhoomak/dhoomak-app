import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAuthState, setAuthToken, setUserData } from '../reducers/auth-reducer'
import { getAsyncStorageItem, getAsyncStorageObjectItem } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';

const initialState = {
    isLoggedIn: '',
    userData: {},
    authToken: '',
}

function useCheckLogin() {
    const authState = useSelector(getAuthState);
    // const { isLoggedIn, userData, authToken } = useSelector(getAuthState);
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

        // if (authToken === '' && Object.keys(userData).length === 0) {
        //     dispatch(setUserData(userDataAsync));
        //     dispatch(setAuthToken(authTokenAsync || ''));
        // }
    }

    useEffect(() => {
        getAsyncDetails();
    }, [authState])
    // }, [isLoggedIn])

    return loggedInStatus;
}

export default useCheckLogin
