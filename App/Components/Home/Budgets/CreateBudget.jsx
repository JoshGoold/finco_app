import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
} from 'react-native'
// import EmojiPicker from 'emoji-picker-react'

const CreateBudget = ({ edit }) => {

  const emoji = '💰'
  const budgetName = 'Dorm Room'
  const amount = 5000


  const handleSave = () => {
    console.log('Saving budget...')
    console.log(`Name: ${budgetName}`)
    console.log(`Amount: ${amount}`)
    console.log(`Emoji: ${emoji}`)
  }

  const handleCancel = () => {
    console.log('Cancel action triggered.')
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => console.log('Opening modal...')}
        style={styles.triggerButton}
      >
        <Text style={styles.triggerButtonText}>
          {edit ? 'Edit Budget' : 'Add New Budget +'}
        </Text>
      </TouchableOpacity>
      <Modal visible={false} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {edit ? 'Edit Budget' : 'Create New Budget'}
            </Text>
            <TouchableOpacity style={styles.emojiButton}>
              <Text style={styles.emojiText}>{emoji}</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Text>Budget Name</Text>
              <Text style={styles.input}>{budgetName}</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text>Budget Amount</Text>
              <Text style={styles.input}>{amount}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={{width: "40%", backgroundColor: '#0F172A', padding: 10, borderRadius: 15}} onPress={handleSave}><Text style={{color: 'white', textAlign: 'center', fontSize:20}}>Save</Text></TouchableOpacity>
                <TouchableOpacity style={{width: "40%",borderWidth: 1, backgroundColor: 'white', padding: 10, borderRadius: 15}} onPress={handleCancel}><Text style={{color: '#0F172A', fontSize:20, textAlign: "center"}}>Cancel</Text></TouchableOpacity>
              
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  triggerButton: {
    backgroundColor: '#0F172A', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  triggerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emojiButton: {
    backgroundColor: '#e6e6e6', 
    borderRadius: 50,
    padding: 10,
    marginRight: 8,
    marginBottom: 10
  },
  emojiText: {
    fontSize: 24,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    width: '100%',
    backgroundColor: '#e6e6e6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
})

export default CreateBudget
