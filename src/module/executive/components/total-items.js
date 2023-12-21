import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import IMAGES from '../../../assets/images';
import commonStyles from '../../../common/styles';
import COLORS from '../../../utils/color';
import {scale} from '../../../utils/scale';
COLORS;

const renderItem = ({item}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 4,
    }}>
    <Image
      // source={IMAGES.banner.banner1}
      source={{uri: item?.products?.images[0]}}
      style={{width: 50, height: 50, borderRadius: 8}}
    />
    <View style={{marginLeft: 5, flexDirection: 'column', flex: 1}}>
      <Text
        style={{fontWeight: 'bold', color: COLORS.black}}
        className="text-black">
        {item.brandName}
      </Text>
      <Text style={{fontSize: 12}} className="text-black">
        {item.description}
      </Text>
    </View>
    <Text style={{fontSize: 14, color: COLORS.black}} className="text-black">
      {item?.quantity}
    </Text>
  </View>
);

const TotalItems = ({data, flatListdata}) => {
  return (
    <View
      className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg "
      style={commonStyles.shadow}>
      <View className="flex flex-row items-center mb-4">
        <View className="flex-1 flex flex-col justify-between ">
          <Text className="text-lg text-black font-bold">Total Items</Text>
          <Text className="text-xs text-black "></Text>
        </View>
        <View className="flex flex-row items-center gap-2">
          <TouchableOpacity>
            {/* <Image source={IMAGES.shareIcon} /> */}
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <Image source={IMAGES.deleteIcon} /> */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{height: scale(200)}}>
        <FlatList
          nestedScrollEnabled
          data={flatListdata}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{borderBottomWidth: 1, marginVertical: 5}}
              className="border-grey"
            />
          )}
        />
      </View>
    </View>
  );
};

export default TotalItems;
