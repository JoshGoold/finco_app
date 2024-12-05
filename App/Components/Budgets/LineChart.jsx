import React, { useState, useRef } from "react"
import { LineChart } from "react-native-chart-kit"
import { Dimensions, View, Text, PanResponder } from "react-native"

const screenWidth = Dimensions.get("window").width

const Chart = () => {
  const [dataSet, setDataSet] = useState("monthly")
  const lastTapRef = useRef(null)

  const monthlyLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  const spentData = [200, 450, 300, 500, 700, 600]
  const budgetedData = [500, 600, 400, 700, 800, 700]

  const spansLabels = ["Car", "Groceries", "Outings"]
  const spansSpentData = [950, 1800, 600]
  const spansBudgetedData = [900, 2200, 1000]

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      const currentTime = Date.now()
      if (lastTapRef.current && currentTime - lastTapRef.current < 300) {
        setDataSet((prev) => (prev === "monthly" ? "spans" : "monthly"))
      }
      lastTapRef.current = currentTime
    },
  })

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    decimalPlaces: 0,
    color: (opacity = 1) => `white`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "4",
      strokeWidth: "0",
      stroke: "#ffa726",
    },
  }

  const activeLabels = dataSet === "monthly" ? monthlyLabels : spansLabels
  const activeSpentData = dataSet === "monthly" ? spentData : spansSpentData
  const activeBudgetedData =
    dataSet === "monthly" ? budgetedData : spansBudgetedData

  return (
    <View {...panResponder.panHandlers} style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          marginBottom: 10,
          fontWeight: "bold",
        }}
      >
        {dataSet === "monthly" ? "Monthly Activity" : "Activity Over Spans"}{" "}
        {"\n"}
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
        style={{
          marginVertical: 10,
          borderRadius: 16,
        }}
      />
      <Text style={{ textAlign: "right", fontSize: 12 }}>
        {" "}
        (Double Tap to Change Chart)
      </Text>
    </View>
  )
}

export default Chart
