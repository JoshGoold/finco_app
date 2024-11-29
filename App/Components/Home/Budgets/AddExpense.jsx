import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'

const AddExpense = ({ budgetId, userId }) => {
  const [expenseName, setExpenseName] = useState('')
  const [amount, setAmount] = useState('')

  const createExpense = () => {
    if (expenseName && amount) {
      // Call the API to create an expense
      console.log('Creating expense', { expenseName, amount, budgetId, userId })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Expense Name</Text>
        <TextInput
          style={styles.input}
          placeholder="eg. Ford Truck"
          value={expenseName}
          onChangeText={setExpenseName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Expense Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="eg. 5000"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity disabled={!(expenseName && amount)} style={{backgroundColor: "#0F172A", borderRadius: 10, padding: 10}} onPress={createExpense} ><Text style={{color: "white", textAlign: "center"}}>Add Expense</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderColor: "#0F172A",
    borderWidth: 0,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#0F172A',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
})

export default AddExpense
