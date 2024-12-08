import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addPlan, togglePActive } from '../../../redux/actions'

const CreatePlan = () => {
    const dispatch = useDispatch()
    const active = useSelector((state)=>state.p_active)
    const [name, setName] = useState('')
    const [notes, setNotes] = useState('')
    const icon = '📝'

    const handleSave = () => {
        const newPlan = {id:Date.now(), name, icon, notes };
        dispatch(addPlan(newPlan));
        setName('')
        setNotes('')
        handleCancel()
      };

    const handleCancel = () => {
        dispatch(togglePActive());
      };

  return (
    <View>
        <TouchableOpacity onPress={() => dispatch(togglePActive())} style={styles.triggerButton}>
            <Text style={styles.triggerButtonText}>
                Add new Plan +
            </Text>
        </TouchableOpacity>
        <Modal transparent visible={active} animationType='slide'>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>
                        Create New Plan
                    </Text>
                    <TouchableOpacity style={styles.emojiButton}>
              <Text style={styles.emojiText}>{icon}</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Text>Plan Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter plan name eg. Dorm Checklist"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Notes</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter notes eg. This is checklist (optional)"
                value={notes}
                keyboardType="numeric"
                onChangeText={setNotes}
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
                  Add Plan
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
      backgroundColor: "#0F172A",
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

export default CreatePlan