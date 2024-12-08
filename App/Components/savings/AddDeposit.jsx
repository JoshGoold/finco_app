import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { addDeposit } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const convertTimestampToDate = (id) => {
    const date = new Date(id)
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
  }

const AddDeposit = ({tracker}) => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState('');
  const today = convertTimestampToDate(Date.now())
 
  const Deposit = async () => {
    const newDeposit = {id:Date.now(), amount, tracker };
    dispatch(addDeposit(newDeposit));
    setAmount('')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add to Savings</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Deposit Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="e.g., 5000"
        keyboardType="numeric"
      />
      
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Deposit Date</Text>
        <TextInput
      style={styles.input}
      value={today}
      readOnly
      placeholder="e.g., 5000"
      keyboardType="numeric"
    />
      </View>
      <TouchableOpacity disabled={!(amount)} style={{backgroundColor: "#0F172A", borderRadius: 10, padding: 10}} onPress={Deposit} ><Text style={{color: "white", textAlign: "center"}}>Add New Deposit</Text></TouchableOpacity>    </View>
  );
};

export default AddDeposit;

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
