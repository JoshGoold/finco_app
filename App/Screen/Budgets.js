import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import Budget from '../Components/Home/Budgets/Budget'
import CreateBudget from '../Components/Home/Budgets/CreateBudget'
import Nav from '../Components/Nav'
import Chart from '../Components/Home/Budgets/LineChart'
import ExpenseList from '../Components/Home/Budgets/ExpensesList'

const SummaryCard = ({ title, value }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  )
}

const Budgets = () => {
  const [activeSection, setActiveSection] = useState('statistics') // Toggle between sections

  const totalMoneyHave = 10000.0
  const totalSpendings = 5050.03
  const totalBudgets = 5
  const totalRemaining = totalMoneyHave - totalSpendings

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView
        style={{
          backgroundColor: 'white',
          marginTop: 30,
          marginBottom: 40,
          padding: 20,
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0F172A' }}>My Budgets</Text>
          <CreateBudget />
        </View>

        {/* Summary Cards */}
        <View style={styles.container2}>
          <SummaryCard title="Total Budget" value={`$${totalMoneyHave.toFixed(2)}`} />
          <SummaryCard title="Total Spend" value={`$${totalSpendings.toFixed(2)}`} />
          <SummaryCard title="Total Remaining" value={`$${totalRemaining.toFixed(2)}`} />
          <SummaryCard title="No. of Budgets" value={totalBudgets} />
        </View>

        {/* Toggle Buttons */}
        <View style={styles.toggleContainer}>
         
          <TouchableOpacity
            style={[styles.toggleButton, activeSection === 'budgets' && styles.activeButton]}
            onPress={() => setActiveSection('budgets')}
          >
            <Text style={[styles.toggleText, activeSection === 'budgets' && styles.activeText]}>Budgets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, activeSection === 'statistics' && styles.activeButton]}
            onPress={() => setActiveSection('statistics')}
          >
            <Text style={[styles.toggleText, activeSection === 'statistics' && styles.activeText]}>Statistics</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        {activeSection === 'statistics' ? (
          <View style={{ marginVertical: 20, paddingHorizontal: 10, paddingVertical: 20 }}>
            <Chart />
            <ExpenseList />
          </View>
        ) : (
          <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
            <Budget />
            <Budget />
            <Budget />
            <Budget />
            <Budget />
          </View>
        )}
      </ScrollView>

      {/* Navigation */}
      <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 60 }}>
        <Nav isActive={'budgets'} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container2: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    flexBasis: '48%',
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#0F172A',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  toggleButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#85C898',
    borderColor: '#85C898',
  },
  toggleText: {
    color: '#0F172A',
    fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
  },
})

export default Budgets
