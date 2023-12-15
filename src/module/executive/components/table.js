import { View, Text, FlatList, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { scale } from '../../../utils/scale';
export const TableHeader = ({ tableHeader }) => (
  <View style={styles.tableHeader}>
    {tableHeader.map((column) => (
      <Text key={column.key} style={[styles.tableHeaderText]}>
        {column.label}
      </Text>
    ))}
  </View>
);
export const TableRow = ({ data, tableConfig, getDotStyleGenerator,navigate }) => (
  <View style={styles.tableRow}>
    {tableConfig.map((column) => (
      <TouchableOpacity key={column.key} style={styles.columnContainer} onPress={navigate}>
        {column.key === 'interest' && (
          <View style={getDotStyleGenerator(data[column.key])} />
        )}
        <Text style={styles.tableRowText}>{data[column.key]}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F8F3FF",
    padding:scale(5)
  },
  filterFunctionalities:{
    marginVertical:scale(5),
    flexDirection: 'row',
    padding: scale(10),
    justifyContent:"space-between",
  },
  tableHeader: {
    marginVertical:scale(5),
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: scale(15),
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
    justifyContent:"space-around",

  },
  tableHeaderText: {
    fontWeight: 'bold', 
    justifyContent:"space-between",
  },
  tableRow: {
    display:"flex",
    flexDirection: 'row',
    justifyContent:"space-around",
    marginBottom:scale(2),
    padding: scale(15),
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  tableRowText: {
    color:"#403F3F"
  },

    columnContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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