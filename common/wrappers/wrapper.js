// Store
import store from '../../store/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';
import COLORS from '../../utils/color';


function MainWrapper({ children }) {
    return (
        <>
            <StatusBar backgroundColor={COLORS.red} />
            <Provider store={store}>
                {children}
            </Provider>
        </>
    )
}

export default MainWrapper
