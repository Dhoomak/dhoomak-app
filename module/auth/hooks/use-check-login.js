import { useSelector } from 'react-redux'
import { getAuthState } from '../reducers/auth-slice'

function useCheckLogin() {
    const { isLoggedIn } = useSelector(getAuthState);
    return isLoggedIn;
}

export default useCheckLogin
