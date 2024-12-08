import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setIncome, toggleIActive } from '../../../redux/actions'
import AntDesign from '@expo/vector-icons/AntDesign';

const AddIncome = () => {
    const dispatch = useDispatch()
    const active = useSelector((state)=>state.i_active)
    const [amount, setAmount] = useState(0)

    const handleSave = () => {
        dispatch(setIncome(amount));
        handleCancel()
      };

    const handleCancel = () => {
        dispatch(toggleIActive());
      };

  return (
    <View>
        <TouchableOpacity onPress={() => dispatch(toggleIActive())} style={styles.triggerButton}>
            <Text style={styles.triggerButtonText}>
            <AntDesign name="edit" size={14} color="black" />
            </Text>
        </TouchableOpacity>
        <Modal transparent visible={active} animationType='slide'>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>
                        Edit Income
                    </Text>
                    <TouchableOpacity style={styles.emojiButton}>
              <Text style={styles.emojiText}>🧧</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Text>Income</Text>
              <TextInput
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={{
                  width: "40%",
                  backgroundColor: "#0F172A",
                  padding: 10,
                  borderRadius: 15,
                }}
                onPress={handleSave}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "40%",
                  borderWidth: 1,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 15,
                }}
                onPress={handleCancel}
              >
                <Text
                  style={{
                    color: "#0F172A",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>

                </View>
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    triggerButton: {
      backgroundColor: "transparent",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    triggerButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "90%",
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
    },
    emojiButton: {
      backgroundColor: "#e6e6e6",
      borderRadius: 50,
      padding: 10,
      marginRight: 8,
      marginBottom: 10,
    },
    emojiText: {
      fontSize: 24,
    },
    inputContainer: {
      width: "100%",
      marginBottom: 15,
    },
    input: {
      borderRadius: 10,
      padding: 10,
      marginTop: 5,
      width: "100%",
      backgroundColor: "#e6e6e6",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
      width: "100%",
    },
  });

export default AddIncome