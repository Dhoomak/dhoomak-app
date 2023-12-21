import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  TableHeader,
  TableRow,
  TableRowOnboardingHistory,
} from '../components/table';
import {EXECUTIVE} from '../../../utils/strings/screen-name';
import {scale} from '../../../utils/scale';
import {getOnboardingHistory} from '../api/executive-api';
import {dateFormatter} from '../../../common/utility/validators';

const tableHeaderConfig = [
  {key: 'restaurantName', label: 'Restaurant'},
  {key: 'restaurantId', label: 'Restaurant Id'},
  {key: 'updatedAt', label: 'Onboarding Date'},
];

const filterByName2 = () => {
  console.log('hello');
};

const filterByName = name => {
  const filteredData = data2.filter(item => item.restaurant.includes(name));
  console.log('Filtered Data:', filteredData);
};

const filterFunctionalities = [
  {key: 'history', label: 'Onboarding History', onPress: filterByName2},
  {key: 'filter', label: 'Filter', onPress: filterByName},
];

const FilterFunctionality = () => (
  <View style={styles.filterFunctionalities}>
    {filterFunctionalities.map(column => (
      <TouchableOpacity onPress={column.onPress}>
        <Text key={column.key}>{column.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const OnBoardingHistoryTable = ({navigation}) => {
  const [data, setData] = useState([]);

  const navigateToDetails = item => {
    navigation.navigate(EXECUTIVE.ONBOARDING_HISTORY_DETAILS, {
      item: item,
    });
  };

  const callData = async () => {
    const response = await getOnboardingHistory();
    setData(response.data.data.onboardings);
    console.log(response.data.data.onboardings, 'response from call data');
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
          <Pressable
            onPress={() => {
              navigation.navigate(EXECUTIVE.ONBOARDING_HISTORY_DETAILS, {
                item: item,
              });
            }}
            style={styles.tableRow}>
            <Pressable
              style={styles.columnContainer}
              onPress={() => {
                navigation.navigate(EXECUTIVE.ONBOARDING_HISTORY_DETAILS, {
                  item: item,
                });
              }}>
              <Text style={styles.tableRowText}>{item.profile.name} </Text>
              <Text style={styles.tableRowText}>
                {item?.profile?.restaurantId}{' '}
              </Text>
              <Text style={styles.tableRowText}>
                {dateFormatter(item.createdAt)}{' '}
              </Text>
            </Pressable>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
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
  columnContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  tableRowText: {
    width: '30%',
    color: '#403F3F',
  },
});

export default OnBoardingHistoryTable;
