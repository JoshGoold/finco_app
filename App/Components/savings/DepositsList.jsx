import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeDeposit, removedeposit } from '../../../redux/actions'

const convertTimestampToDate = (id) => {
  const date = new Date(id)
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

const List = ({tracker}) => {

  const deposits = useSelector((state)=>state.deposits)
  const dispacth = useDispatch()

  const deleteDeposit = (id) => {
    console.log(`Deleted deposit with id: ${id}`)
   dispacth(removeDeposit(id))
  }

  const filteredDeposits = tracker? deposits?.filter((deposit) => deposit.tracker === tracker) : deposits.sort((a, b) => a.id - b.id); 

  const renderItem = ({ item }) => (
    <View style={[styles.row, styles.depositRow]}>
      {/* <Text style={styles.cell}>{item.name}</Text> */}
      <Text style={styles.cell}>{item.amount}</Text>
      <Text style={styles.cell}>{convertTimestampToDate(item.id)}</Text>
      <TouchableOpacity onPress={() => deleteDeposit(item.id)} style={styles.cell}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 10, fontWeight: 'bold' }}>
          Latest deposits
        </Text>
      <View style={[styles.row, styles.header]}>
        {/* <Text style={styles.cell}>Name</Text> */}
        <Text style={styles.cell}>Amount</Text>
        <Text style={styles.cell}>Date</Text>
        <Text style={styles.cell}>Action</Text>
      </View>
      
      <FlatList
      style={{paddingBottom: 10}}
      nestedScrollEnabled
        data={filteredDeposits}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    backgroundColor: '#85C898', 
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  depositRow: {
    backgroundColor: '#F1F5F8', 
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default List
