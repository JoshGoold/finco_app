import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native"; // For navigation
// import { PanResponder } from 'react-native'
import AddExpense from "../Components/Budgets/AddExpense";
import ExpenseList from "../Components/Budgets/ExpensesList";
import Budget from "../Components/Budgets/Budget";
import { ScrollView } from "react-native-gesture-handler";
import Nav from "../Components/Nav";
import { useDispatch } from "react-redux";
import { removeBudget } from "../../redux/actions";

const BudgetPage = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
    const budget = useRoute().params.budget

  const deleteBudget = () => {
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
            dispatch(removeBudget(budget.id));
            navigation.goBack()
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.goBackText}>Go Back to Budgets</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.pageTitle}>My Expenses</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={deleteBudget} style={{backgroundColor: 'red', padding: 10, borderRadius: 10}}><Text style={{color: 'white', fontWeight: 'bold'}}>Delete</Text></TouchableOpacity>
            {/* <Button title="Delete"  color="red" /> */}
          </View>
        </View>
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Budget budget={budget}/>
          {/* <Text>{budget.id}</Text> */}
          <AddExpense budgetId={100} userId={10000} />
        </View>

        <View style={styles.latestExpensesContainer}>
          <Text style={styles.latestExpensesTitle}>Latest Expenses</Text>
          <ExpenseList />
        </View>
      </ScrollView>
      <Nav isActive={'budgets'}/>
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

export default BudgetPage;
