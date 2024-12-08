import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { addItem, addPlanItem } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

// const convertTimestampToDate = (id) => {
//     const date = new Date(id)
//     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
//     const day = date.getDate().toString().padStart(2, '0');
//     const year = date.getFullYear();
  
//     return `${month}/${day}/${year}`;
//   }

const AddItem = ({plan}) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [price, SetPrice] = useState(0);
  const [notes, setNotes] = useState('');
//   const today = convertTimestampToDate(Date.now())
 
  const handleSave = async () => {
    const newItem = {id:Date.now(), name, price, notes, plan: plan.id };
    dispatch(addPlanItem(newItem));
   setName('')
   setNotes('')
   SetPrice(0)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add to Plan</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Item Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="e.g., Lamp (required)"
      />
      
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Price</Text>
        <TextInput
      style={styles.input}
      value={price}
      onChangeText={SetPrice}
      placeholder="e.g., 5000"
      keyboardType="numeric"
    />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Notes</Text>
        <TextInput
      style={styles.input}
      value={notes}
      onChangeText={setNotes}
      placeholder="e.g., important (keep it simple)"
    />
      </View>
      <TouchableOpacity disabled={!(name)} style={{backgroundColor: "#0F172A", borderRadius: 10, padding: 10}} onPress={handleSave} ><Text style={{color: "white", textAlign: "center"}}>Add New Item</Text></TouchableOpacity></View>
  );
};

export default AddItem;

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
