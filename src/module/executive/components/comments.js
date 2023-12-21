import {View, Text, FlatList} from 'react-native';
import React from 'react';
import commonStyles from '../../../common/styles';

const renderItem = ({item, index}) => (
  <View
    className="px-5 py-4 mx-4  bg-white rounded-xl shadow-lg mb-2"
    key={index}>
    <View style={[commonStyles.flexColumn]}>
      {/* <View style={[commonStyles.flexRowSB]} className="my-2">
        <Text className="font-bold">Date:{item.date}</Text>
        <Text className="font-bold">Level Status: {item.levelStatus}</Text>
      </View> */}
      <Text>{item}</Text>
    </View>
  </View>
);

export const SubscriptionType = ({item, index}) => (
  <View
    className="px-5 py-4 mx-4 bg-white rounded-xl shadow-lg mb-2"
    key={index}>
    <View style={[commonStyles.flexColumn]}>
      <View style={[commonStyles.flexRowSB]} className="my-2">
        <Text>
          Your subscription in <Text className="font-bold">Monthly</Text>
        </Text>
      </View>
    </View>
  </View>
);

const Comments = ({data}) => {
  return (
    <View>
      <View style={[commonStyles.flexRowSB]} className="px-5 mb-3">
        <Text className="font-bold">Comment</Text>
        {/* <Text className="font-bold">Visited: 2 Times</Text> */}
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Comments;
