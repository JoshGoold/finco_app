import React, { useEffect, useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Nav from '../Components/Nav'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import AddIncome from '../Components/dashboard/SetIncome'
import PieChartComponent from '../Components/dashboard/PieChart'
import { ProgressChart } from 'react-native-chart-kit'


const SummaryCard = ({ title, value }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}><Text>{value}</Text> </Text>
        
      </View>
    {title=='Income' && <View style={{position: 'absolute', top: 1, right: 1}}><AddIncome/>
    </View>}</View>
  )
}

const Dashboard = () => {
  const [totalOut, setTotalOut]=useState(0)
  const [totalSaved, setTotalSaved]=useState(0)
  const [data, setData] = useState({ labels: [], data: [] });
  const income = useSelector((state)=>state.income)
  const expenses = useSelector((state)=>state.expenses)
  const deposits = useSelector((state)=>state.deposits)


  const budgets = useSelector((state)=>state.budgets)

  const getStats = ()=>{
    let out = 0

    expenses.forEach(expense => {
      out+=Number(expense.amount)
    });

    setTotalOut(out)

    let saved = 0

    deposits.forEach(deposit=>{
      saved+=deposit.amount
    })

    setTotalSaved(saved)

    // calculating and categorizing expenses for progress chart
    let labels = []
    let data = []
    budgets.forEach(budget=>{
      labels.push(budget.name)

      const filtered = expenses?.filter((expense) => expense.budget === budget.id)
      let total = 0
      filtered.forEach(expense=>{
          total += Number(expense.amount)
      })

      let percent = (total/out)/100
      data.push(percent)

      total = 0
      
    })

    setData({labels, data})

  }

  useEffect(()=>{
    getStats()
  }, [deposits, expenses, budgets])

  const chartConfig = {
    backgroundGradientFrom: "#ffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#85C898`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false 
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <ScrollView style={{
          backgroundColor: 'white',
          // marginTop: 30,
          marginBottom: 40,
          padding: 20,
          flexDirection: 'column',
          gap: 10,
        }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 10 }}>
            <View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0F172A' }}>Hi Name!</Text>
            <Text style={{ fontSize: 15, color: '#0F172A' }}>Let's see whats happening with your money</Text>
            </View>
          
         
        </View>
        <View style={styles.container2}>
          <SummaryCard title="Income" value={`$${Number(income).toFixed(2)}`} />
          <SummaryCard title="Total Out" value={`$${Number(totalOut).toFixed(2)}`} />
          <SummaryCard title="Total Saved" value={`$${Number(totalSaved).toFixed(2)}`} />
          {/* <SummaryCard title="No. of Budgets" value={budgets?.length || 0} /> */}
        </View>

        {income >0 && <View>
          <PieChartComponent income={Number(income)} totalOut={Number(totalOut)} totalSaved={Number(totalSaved)}/>
        </View>}

          {budgets.length>0 && expenses.length>0 && <View style={{ flex: 1, borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 10, marginVertical: 20, marginHorizontal: 10 }}>
            <Text style={[styles.title2, {padding: 15}]}>Total Expenses</Text>
            <ProgressChart data={data}
  width={Dimensions.get('screen').width*0.7}
  height={300}
  strokeWidth={10}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false} />
          </View>}
       
        </ScrollView>
    <Nav isActive={'dashboard'}/>
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
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    // width: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between'
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
export default Dashboard