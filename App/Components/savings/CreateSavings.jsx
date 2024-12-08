"use client";

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addSavingsTracker, clearSavingsTrackerInput, setSavingsTrackerInput, toggleSActive } from '../../../redux/actions';
// import EmojiPicker from 'emoji-picker-react';
// import { Button } from '../../../../../components/ui/button'; // Adjust import path based on your project structure.

const CreateSavings = ({refreshData}) => {
  const [name, setName] = useState('')
  const [goal, setGoal] = useState('')
  const { icon } = useSelector((state) => state.s_input);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.s_active);

  const handleSave = () => {
    const newTracker = {id:Date.now(), name, icon, goal };
    dispatch(addSavingsTracker(newTracker));
    setName('')
    setGoal('')
    handleCancel()
    refreshData()
  };

  const handleCancel = () => {
    dispatch(toggleSActive());
  };


  return (
    <View style={{ padding: 16 }}>
      <TouchableOpacity
        style={styles.triggerButton}
        onPress={() => dispatch(toggleSActive())}
      >
        <Text style={styles.triggerButtonText}>
          Create Tracker +
        </Text>
      </TouchableOpacity>

      <Modal visible={active} transparent animationType="slide" >
      <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a New Tracker</Text>

            <TouchableOpacity
              style={styles.emojiButton}
            >
              <Text style={styles.emojiText}>{icon}</Text>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
            <Text>Tracker Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Tracker name"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Savings Goal</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Goal"
                value={goal}
                keyboardType="numeric"
                onChangeText={setGoal}
              />
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
              disabled={!(name && goal)}
              onPress={()=>handleSave()}
              style={{
                width: "40%",
                backgroundColor: "#0F172A",
                padding: 10,
                borderRadius: 15,
              }}
            >
              <Text  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                  }}>Save</Text>
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
              <Text style={{
                    color: "#0F172A",
                    fontSize: 20,
                    textAlign: "center",
                  }}>Cancel</Text>
            </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
export default CreateSavings;
