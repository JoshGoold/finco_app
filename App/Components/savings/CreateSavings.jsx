"use client";

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
// import EmojiPicker from 'emoji-picker-react';
// import { Button } from '../../../../../components/ui/button'; // Adjust import path based on your project structure.

const CreateSavings = ({ refreshData, edit, existingData }) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [icon, setIcon] = useState('$$');
  // const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const editSavings = () => {
    if (existingData) {
      setGoal(existingData.goal);
      setName(existingData.name);
      setIcon(existingData.icon);
    }
    setModalVisible(true);
  };

  const addSavings = () => {
    try {
      const left = goal - Number(existingData?.saved || 0);

      if (existingData) {
        // Update existing savings logic here
        console.log('Edited:', { left, icon, goal, name });
      } else {
        // Insert new savings logic here
        console.log('Added:', {
          id: Date.now(),
          icon,
          name,
          goal,
          saved: 0,
          left: goal,
          reached: false,
          retired: false,
        });
      }

      setName('');
      setGoal('');
      setModalVisible(false);
      refreshData && refreshData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => (edit ? editSavings() : setModalVisible(true))}
      >
        <Text style={styles.createButtonText}>
          {edit ? 'Edit Savings Tracker' : 'Create Tracker +'}
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a New Tracker</Text>

            {/* Emoji Picker */}
            <TouchableOpacity
              style={styles.emojiButton}
              onPress={() => setOpenEmojiPicker(!openEmojiPicker)}
            >
              <Text style={{ fontSize: 24 }}>{icon}</Text>
            </TouchableOpacity>
            

            {/* Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="e.g. Emergency Fund"
              />
            </View>

            {/* Goal Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Goal</Text>
              <TextInput
                style={styles.input}
                onChangeText={setGoal}
                value={goal}
                placeholder="e.g. 3000"
                keyboardType="numeric"
              />
            </View>

            {/* Save Button */}
            <TouchableOpacity
              disabled={!(name && goal)}
              onPress={addSavings}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>

            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  createButton: {
  backgroundColor: "#0F172A",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  createButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emojiButton: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#70A288',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 16,
  },
  closeButtonText: {
    color: '#ff6b6b',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateSavings;
