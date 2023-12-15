import { SafeAreaView, StatusBar } from 'react-native';

// Store
import store from '../../store/store'
import { Provider } from 'react-redux'
import COLORS from '../../utils/color';

function MainWrapper({ children }) {
    return (
        <>
            <StatusBar backgroundColor={COLORS.primary} />
            <Provider store={store}>
                <SafeAreaView className='flex-1 relative'>
                    {children}
                </SafeAreaView>
            </Provider>
        </>
    )
}

export default MainWrapper
