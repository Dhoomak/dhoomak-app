import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {TableHeader, TableRow} from '../../executive/components/table';
import SelectDropdown from 'react-native-select-dropdown';
import IMAGES from '../../../assets/images';
import COLORS from '../../../utils/color';
import {DELIVERY} from '../../../utils/strings/screen-name';
import {scale} from '../../../utils/scale';

const tableHeaderConfig = [
  {key: 'date', label: 'Date'},
  {key: 'status', label: 'Status'},
  {key: 'description', label: 'Address'},
];

const DeliveryScreenListing = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: '1',
      date: '2023-11-01',
      time: '09:30 AM',
      status: 'Delivered',
      description: 'House 68, Sector 38, Gurugram',
    },
    {
      id: '2',
      date: '2023-12-08',
      time: '02:45 PM',
      status: 'To be delivered',
      description: 'House 68, Sector 40, Gurugram',
    },
    {
      id: '3',
      date: '2023-11-13',
      time: '01:15 PM',
      status: 'Cancelled',
      description: 'Lorem ipsum dolor sit amet, cons',
    },
  ]);

  const unitQuantityType = [
    'Sort by Date',
    'Sort by Delivery',
    'Sort by Name',
    'Sort by Status',
  ];
  const unitQuantityDefaultValue = 'Sort by Date';
  const [selectedSortOption, setSelectedSortOption] = useState('Sort by Date');

  const onChangeQuanityTypeVal = selectedItem => {
    setSelectedSortOption(selectedItem);
    switch (selectedItem) {
      case 'Sort by Date':
        setData([...data.sort((a, b) => new Date(a.date) - new Date(b.date))]);
        break;
      case 'Sort by Delivery':
        setData([...data.sort((a, b) => a.status.localeCompare(b.status))]);
        break;
      case 'Sort by Name':
        setData([
          ...data.sort((a, b) => a.description.localeCompare(b.description)),
        ]);
        break;
      case 'Sort by Status':
        setData([...data.sort((a, b) => a.status.localeCompare(b.status))]);
        break;
      default:
        break;
    }
  };

  const navigateToDetails = () => {
    navigation.navigate(DELIVERY.DELIVERY_DETAILS);
  };

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Text></Text>
        <SelectDropdown
          data={unitQuantityType}
          onSelect={onChangeQuanityTypeVal}
          defaultValue={unitQuantityDefaultValue}
          buttonTextAfterSelection={selectedItem => selectedItem}
          rowTextForSelection={item => item}
          buttonStyle={styles.dropdown}
          buttonTextStyle={styles.dropdownText}
          dropdownIconPosition="right"
          selectedRowTextStyle={{color: COLORS.black}}
          selectedRowStyle={{backgroundColor: COLORS.lightGrey}}
          renderDropdownIcon={() => (
            <Image source={IMAGES.dropdownIcon} className="w-5 h-4" />
          )}
        />
      </View>
      <TableHeader tableHeader={tableHeaderConfig} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TableRow
            data={item}
            navigate={navigateToDetails}
            tableConfig={tableHeaderConfig}
            renderCell={(key, value) => (
              <View>
                <Text>{value}</Text>
              </View>
            )}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DeliveryScreenListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
  },
  shadow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(10),
    marginBottom: scale(5),
  },
  dropdown: {
    overflow: 'hidden',
    shadowColor: 'black',
    height: 36,
    backgroundColor: COLORS.white,
  },
  dropdownText: {
    marginHorizontal: 0,
    fontSize: 14,
    textAlign: 'left',
  },
});
