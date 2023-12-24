import React from 'react';
import { View, Pressable } from 'react-native';

// Components
import HistoryDetailCard from '../components/history-detail-card';
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';

// Utils
import COLORS from '../../../utils/color';
import { USER } from '../../../utils/strings/screen-name';

// API
import { getOrderHistoryDetailsApi, getFakeOrderHistoryDetailsApi } from '../api/history-api';

// Hook
import useAxios from '../../../common/hooks/use-axios';


const HistoryList = ({ navigation }) => {
    const { response } = useAxios(getFakeOrderHistoryDetailsApi);

    return (
        <View className='flex-1 bg-grey p-2'>
            <View className='flex-1 bg-white rounded-lg overflow-hidden'>
                <DhoomakFlatlist
                    className='flex-1 '
                    data={response?.orderHistoryList}
                    keyExtractor={(item) => item.orderId}
                    ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: COLORS.darkGrey }}></View>}
                    renderItem={({ item }) => (
                        <Pressable
                            className='p-2'
                            onPress={() => { navigation.navigate(USER.ORDER_HISTORY_DETAILS, { historyDetails: item }); }}
                        >
                            <HistoryDetailCard {...item} />
                        </Pressable>
                    )}
                />
            </View>
        </View>
    );
}

export default HistoryList;