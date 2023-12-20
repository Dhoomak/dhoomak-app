import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {TableHeader, TableRow} from '../components/table';
import {EXECUTIVE} from '../../../utils/strings/screen-name';
import {scale} from '../../../utils/scale';
import {useDispatch} from 'react-redux';
import {getEnquiryHistoryAction} from '../thunk/executive-thunk';
import {getEnquiryHistory} from '../api/executive-api';

const tableHeaderConfig = [
  {key: 'restaurantName', label: 'Restaurant'},
  {key: 'nextMeetingSchedule', label: 'Meeting '},
  {key: 'interest', label: 'Interest'},
];

const getDotStyle = interest => {
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

const EnquiryHistoryTable = ({navigation}) => {
  const [data, setData] = useState([]);
  const filterByName2 = () => {
    console.log('hello');
  };

  const filterByName = restaurantName => {
    const filteredData = data.filter(item => item.includes(restaurantName));
    console.log('Filtered Data:', filteredData);
  };

  const FilterFunctionality = () => (
    <View style={styles.filterFunctionalities}>
      {filterFunctionalities.map(column => (
        <TouchableOpacity onPress={column.onPress}>
          <Text key={column.key}>{column.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const filterFunctionalities = [
    {key: 'enquiry', label: 'Enquiry History', onPress: filterByName2},
    {key: 'filter', label: 'Filter', onPress: filterByName},
  ];

  const callData = async () => {
    const response = await getEnquiryHistory();
    setData(response.data.data.enquiries);
    console.log(response.data.data.enquiries, 'response from call data');
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <View style={styles.container}>
      {/* <FilterFunctionality /> */}
      <TableHeader tableHeader={tableHeaderConfig} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TableRow
            data={item}
            tableConfig={tableHeaderConfig}
            getDotStyleGenerator={getDotStyle}
            navigate={() => {
              navigation.navigate(EXECUTIVE.ENQUIRY_DETAILS, {
                item,
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F3FF',
    padding: scale(10),
  },
  filterFunctionalities: {
    marginVertical: scale(5),
    flexDirection: 'row',
    padding: scale(10),
    justifyContent: 'space-between',
  },
  tableHeader: {
    marginVertical: scale(100),
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: scale(15),
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    justifyContent: 'space-between',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(2),
    padding: scale(15),
    backgroundColor: 'white',
  },
  tableRowText: {
    justifyContent: 'space-between',
    color: '#403F3F',
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

export default EnquiryHistoryTable;
