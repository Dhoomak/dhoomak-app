import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, TouchableOpacity }from 'react-native';
import { TableHeader, TableRow } from '../components/table';
import { EXECUTIVE } from '../../../utils/strings/screen-name';
import { scale } from '../../../utils/scale';

const tableHeaderConfig = [
  { key: 'restaurant', label: 'Restaurant',  },
  { key: 'restaurantID', label: 'Restaurant ',  },
  { key: 'obDate', label: 'Onboarding Date', },
];

const filterByName2 = () => {
  console.log("hello");
};

const filterByName = (name) => {
  const filteredData = data2.filter(item => item.restaurant.includes(name));
  console.log("Filtered Data:", filteredData);
};

const filterFunctionalities = [
  { key: 'history', label: 'Onboarding History', onPress: filterByName2 },
  { key: 'filter', label: 'Filter', onPress: filterByName },
];



const data2 = [{
  restaurant: 'Restaurant 1',
  restaurantID: '123456789',
  obDate: '2023-02-01',
}]

const getDotStyle = (interest) => {
  switch (interest) {
    case 'High':
      return [styles.dot, styles.dotHigh];
    case 'Medium':
      return [styles.dot, styles.dotMedium];
    case 'Low':
      return [styles.dot, styles.dotLow];
    default:
      return styles.dot;
  }
};

const FilterFunctionality = () => (
  <View style={styles.filterFunctionalities}>
    {filterFunctionalities.map((column) => (
    <TouchableOpacity onPress={column.onPress}>
      <Text key={column.key} >
        {column.label}
      </Text>
    </TouchableOpacity>

    ))}
  </View>
);



const OnBoardingHistoryTable = ({ navigation }) => {
const navigateToDetails=()=>{
    navigation.navigate(EXECUTIVE.ONBOARDING_HISTORY_DETAILS)
}
return(
  <View style={styles.container}>
    <FilterFunctionality/>
    <TableHeader tableHeader={tableHeaderConfig}/>
    <FlatList
      data={data2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <TableRow data={item} tableConfig={tableHeaderConfig} navigate={navigateToDetails}/>}
      showsVerticalScrollIndicator ={false}
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F8F3FF",
    padding:scale(10)
  },
  filterFunctionalities:{
    marginVertical:scale(5),
    flexDirection: 'row',
    padding: scale(10),
    justifyContent:"space-between",
  },
  tableHeader: {
    marginVertical:scale(100),
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: scale(15),
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
    justifyContent:"space-between",

  },
  tableHeaderText: {
    fontWeight: 'bold', 
        justifyContent:"space-between",
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent:"space-between",
    marginBottom:scale(2),
    padding: scale(15),
    backgroundColor: 'white',
  },
  tableRowText: {
    justifyContent:"space-between",
    color:"#403F3F"
  },
   dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  dotHigh: {
    backgroundColor: 'green',
  },
  dotMedium: {
    backgroundColor: 'orange',
  },
  dotLow: {
    backgroundColor: 'red',
  },
});


export default OnBoardingHistoryTable;
