import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

// Dummy data for expenses
const expenses = [
  { id: 1, name: 'Groceries', amount: '$50', date: '2024-11-01' },
  { id: 2, name: 'Rent', amount: '$1200', date: '2024-11-02' },
  { id: 3, name: 'Utilities', amount: '$200', date: '2024-11-03' },
  { id: 4, name: 'Subscriptions', amount: '$15', date: '2024-11-04' },
  { id: 5, name: 'Groceries', amount: '$50', date: '2024-11-01' },
  { id: 6, name: 'Rent', amount: '$1200', date: '2024-11-02' },
  { id: 7, name: 'Utilities', amount: '$200', date: '2024-11-03' },
  { id: 8, name: 'Subscriptions', amount: '$15', date: '2024-11-04' },
]

// Convert timestamp to date (dummy function)
const convertTimestampToDate = (date) => date

const ExpenseList = () => {
  const deleteExpense = (id) => {
    console.log(`Deleted expense with id: ${id}`)
   
  }

  const renderItem = ({ item }) => (
    <View style={[styles.row, styles.expenseRow]}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.amount}</Text>
      <Text style={styles.cell}>{convertTimestampToDate(item.date)}</Text>
      <TouchableOpacity onPress={() => deleteExpense(item.id)} style={styles.cell}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 10, fontWeight: 'bold' }}>
          Latest Expenses
        </Text>
      <View style={[styles.row, styles.header]}>
        <Text style={styles.cell}>Name</Text>
        <Text style={styles.cell}>Amount</Text>
        <Text style={styles.cell}>Date</Text>
        <Text style={styles.cell}>Action</Text>
      </View>
      
      <FlatList
      style={{paddingBottom: 10}}
        data={expenses}
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
  expenseRow: {
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

export default ExpenseList
