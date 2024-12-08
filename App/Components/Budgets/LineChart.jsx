import React, { useState, useRef } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, View, Text, PanResponder } from "react-native";
import { useSelector } from "react-redux";

const screenWidth = Dimensions.get("window").width;
// problem
const Chart = () => {
  const [dataSet, setDataSet] = useState("monthly");
  const lastTapRef = useRef(null);
  const expenses = useSelector((state) => state.expenses);
  const budgets = useSelector((state) => state.budgets);

  const getMonthlyData = () => {
    const currentYear = new Date().getFullYear();
    const monthlyTotals = Array(12).fill(0);

    expenses.forEach((expense) => {
      const expenseDate = new Date(expense.id);
      if (expenseDate.getFullYear() === currentYear) {
        const monthIndex = expenseDate.getMonth();
        monthlyTotals[monthIndex] += Number(expense.amount);
      }
    });

    return monthlyTotals;
  };

  const getBudgetData = () => {
    const budgetMap = budgets.reduce((acc, budget) => {
      acc[budget.id] = { name: budget.name, totalSpent: 0, budgetedAmount: Number(budget.amount) };
      return acc;
    }, {});

    expenses.forEach((expense) => {
      if (budgetMap[expense.budget]) {
        budgetMap[expense.budget].totalSpent += Number(expense.amount);
      }
    });

    const labels = Object.values(budgetMap).map((b) => b.name);
    const spentData = Object.values(budgetMap).map((b) => b.totalSpent);
    const budgetedData = Object.values(budgetMap).map((b) => b.budgetedAmount);

    return { labels, spentData, budgetedData };
  };

  const getMonthlyBudgetedData = () => {
    const monthlyBudgetedData = Array(12).fill(0);

    budgets.forEach((budget) => {
      const budgetAmount = Number(budget.amount);
      const budgetDate = new Date(budget.id); // Assuming `budget.id` is the start date
      const startMonth = budgetDate.getMonth(); // Get the month where the budget starts

      // Distribute the budget amount over the next 12 months or until the end of the year
      for (let i = startMonth; i < 12; i++) {
        monthlyBudgetedData[i] += budgetAmount / (12 - startMonth);
      }
    });

    return monthlyBudgetedData;
  };

  const monthlyBudgetedData = getMonthlyBudgetedData();
  const monthlyData = getMonthlyData();
  const { labels: spansLabels, spentData: spansSpentData, budgetedData: spansBudgetedData } = getBudgetData();

  const monthlyLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      const currentTime = Date.now();
      if (lastTapRef.current && currentTime - lastTapRef.current < 300) {
        setDataSet((prev) => (prev === "monthly" ? "spans" : "monthly"));
      }
      lastTapRef.current = currentTime;
    },
  });

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `#ffffff`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "4",
      strokeWidth: "0",
    },
  };

  const activeLabels = dataSet === "monthly" ? monthlyLabels : spansLabels;
  const activeSpentData = dataSet === "monthly" ? monthlyData : spansSpentData;
  const activeBudgetedData = dataSet === "monthly" ? monthlyBudgetedData : spansBudgetedData;

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1, padding: 20 }}>
      <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 10, fontWeight: "bold" }}>
        {dataSet === "monthly" ? "Monthly Activity" : "Activity By Budget"}{"\n"}
      </Text>
      <LineChart
        data={{
          labels: activeLabels,
          datasets: [
            {
              data: activeSpentData,
              color: (opacity = 1) => `#85C898`,
              strokeWidth: 2,
            },
            {
              data: activeBudgetedData,
              color: (opacity = 1) => `#0F172A`,
              strokeWidth: 2,
            },
          ],
          legend: ["Spent Amount", "Budgeted Amount"],
        }}
        width={screenWidth - 40}
        height={250}
        chartConfig={chartConfig}
        style={{ marginVertical: 10, borderRadius: 16 }}
      />
      <Text style={{ textAlign: "right", fontSize: 12 }}>(Double Tap to Change Chart)</Text>
    </View>
  );
};

export default Chart;
