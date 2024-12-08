import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native"; // For navigation
import List from "../Components/savings/DepositsList";
import AddDeposit from "../Components/savings/AddDeposit";
import Tracker from '../Components/savings/Tracker'
import { ScrollView } from "react-native-gesture-handler";
import Nav from "../Components/Nav";
import { useDispatch } from "react-redux";
import { removeSavingsTracker } from "../../redux/actions";
import Ionicons from '@expo/vector-icons/Ionicons';

const Deposits = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
const tracker = useRoute().params.tracker

  const deleteTracker = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this budget?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            dispatch(removeSavingsTracker(tracker.id));
            navigation.goBack()
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={[styles.container, {height: Dimensions.get('screen').height}]}>
      <ScrollView
        style={{
          backgroundColor: "white",
          marginTop: 30,
          marginBottom: 40,
          padding: 20,
          flexDirection: "column",
          gap: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        >
         <Text style={styles.goBackText}><Ionicons name="arrow-back" size={24} color="black" /></Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.pageTitle}>My Deposits</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={deleteTracker} style={{backgroundColor: 'red', padding: 10, borderRadius: 10}}><Text style={{color: 'white', fontWeight: 'bold'}}>Delete</Text></TouchableOpacity>
            {/* <Button title="Delete"  color="red" /> */}
          </View>
        </View>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Tracker item={tracker}/>
          <AddDeposit tracker={tracker.id}  />
        </View>

        <View style={styles.latestExpensesContainer}>
          {/* <Text style={styles.latestExpensesTitle}>Latest Expenses</Text> */}
          <List tracker={tracker.id}/>
        </View>
      </ScrollView>
      <Nav isActive={'savings'}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: "#fff",
  },
  goBackButton: {
    marginBottom: 10,
  },
  goBackText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  latestExpensesContainer: {
    marginTop: 20,
  },
  latestExpensesTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Deposits;
