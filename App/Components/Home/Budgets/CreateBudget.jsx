import React from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addBudget,
  clearBudgetInput,
  setBudgetInput,
  toggleActive,
} from "../../../../redux/actions";

const CreateBudget = ({ edit }) => {
  const { icon, name, amount } = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.active);

  const handleInputChange = (field, value) => {
    dispatch(setBudgetInput(field, value));
  };

  const handleSave = () => {
    const newBudget = {id:Date.now(), name, icon, amount };
    dispatch(addBudget(newBudget));
    dispatch(clearBudgetInput());
    handleCancel()
  };

  const handleCancel = () => {
    dispatch(toggleActive());
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => dispatch(toggleActive())}
        style={styles.triggerButton}
      >
        <Text style={styles.triggerButtonText}>
          {edit ? "Edit Budget" : "Add New Budget +"}
        </Text>
      </TouchableOpacity>
      <Modal visible={active} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {edit ? "Edit Budget" : "Create New Budget"}
            </Text>
            <TouchableOpacity style={styles.emojiButton}>
              <Text style={styles.emojiText}>{icon}</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Text>Budget Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter budget name"
                value={name}
                onChangeText={(text) => handleInputChange("name", text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Budget Amount</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter budget amount"
                value={amount}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange("amount", text)}
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
                  Add Budget
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

export default CreateBudget;
