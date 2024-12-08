import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet, Alert } from "react-native";
import * as Progress from "react-native-progress";
import { useDispatch } from "react-redux";
import {
  setBudgets,
  setDeposits,
  setExpenses,
  setPlanItems,
  setPlans,
  setIncome,
} from "../../../redux/actions";


const LoadingPage = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const {userid} = route.params;

  const getUserData = async (userid) => {
    try {
      const response = await fetch(
        `https://final-project-backend-9io5wpxd9-joshs-projects-9174c388.vercel.app/user?id=${userid}`,
        { method: "GET" }
      );
      const data = await response.json();
      if (data.Success) {
        console.log(data.User)
        dispatch(setBudgets(data.User.budgets));
        dispatch(setDeposits(data.User.savings.deposits));
        dispatch(setPlans(data.User.plans));
        dispatch(setPlanItems(data.User.plans.planitems));
        dispatch(setIncome(data.User.income));
        dispatch(setExpenses(data.User.budgets.expenses));
      } else {
        Alert.alert(data.Message);
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    } finally {
      setLoading(false);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(() => navigation.navigate("home"));
    }
  };

  useEffect(() => {
    if (userid) {
      getUserData(userid);
    }
  }, [userid]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Progress.Bar indeterminate={true} width={200} color="#6200EE" />
      ) : (
        <Animated.View
          style={[
            styles.successView,
            { transform: [{ scale: animatedValue }] },
          ]}
        >
          <Text style={styles.successText}>✅</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  successView: {
    justifyContent: "center",
    alignItems: "center",
  },
  successText: {
    fontSize: 48,
    color: "green",
  },
});

export default LoadingPage;
