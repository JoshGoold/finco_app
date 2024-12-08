import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import CreateSavings from '../Components/savings/CreateSavings.jsx'
import Tracker from '../Components/savings/Tracker.jsx';
import Cards from '../Components/savings/Cards.jsx';
import Nav from '../Components/Nav.jsx';
import { useSelector } from 'react-redux';

const SavingsPage = () => {
  const savingsList = useSelector((state)=>state.s_trackers)
  const deposits = useSelector((state)=>state.deposits)
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [saved, setSaved] = useState(0);
  const [left, setLeft] = useState(0);
  const [goal, setGoal] = useState(0);

  useEffect(() => {
    getSavingsList();
  }, [deposits, savingsList]);

  const getSavingsList = () => {
    const current = savingsList.filter(item => item.retired !== true);
    // setList(current);

    let count = 0;
    let goal = 0;
    let saved = 0;
    let left = 0;

    deposits.forEach(deposit=>{
      saved += Number(deposit.amount)
    })

    current.forEach(item => {
      count += 1;
      goal += Number(item.goal);
      
    });

    left = goal - saved

    setCount(count);
    setGoal(goal);
    setLeft(left);
    setSaved(saved);
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
    <ScrollView style={{
          backgroundColor: 'white',
          // marginTop: 30,
          marginBottom: 60,
          padding: 20,
          paddingBottom: 60,
          flexDirection: 'column',
          gap: 10,
        }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0F172A' }}>My Savings</Text>
        <CreateSavings refreshData={getSavingsList}/>
      </View>
      <Cards saved={saved} goal={goal} left={left} count={count} />
      
      <Text style={styles.subtitle}>Trackers</Text>
      <View style={styles.trackerContainer}>
        {savingsList.map((item, index) => (
          <Tracker key={index} item={item} />
        ))}
      </View>

    </ScrollView>
    <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 60 }}>
        <Nav isActive={'savings'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  createButton: {
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  trackerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingVertical: 20
  },
  noTrackers: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SavingsPage;
