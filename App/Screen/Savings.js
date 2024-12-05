import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import CreateSavings from '../Components/savings/CreateSavings.jsx'
import Tracker from '../Components/savings/Tracker.jsx';
import Cards from '../Components/savings/Cards.jsx';

const SavingsPage = () => {
  // Dummy data for savings
  const [savingsList, setList] = useState([
    { id: 1, goal: 5000, saved: 2000, left: 3000, retired: false },
    { id: 2, goal: 10000, saved: 7000, left: 3000, retired: false },
    { id: 3, goal: 2000, saved: 0, left: 2000, retired: true },
  ]);
  const [retired, setRetired] = useState([]);
  const [count, setCount] = useState(0);
  const [saved, setSaved] = useState(0);
  const [left, setLeft] = useState(0);
  const [goal, setGoal] = useState(0);

  useEffect(() => {
    getSavingsList();
  }, []);

  const getSavingsList = () => {
    const current = savingsList.filter(item => item.retired !== true);
    const retired = savingsList.filter(item => item.retired === true);
    setRetired(retired);
    setList(current);

    let count = 0;
    let goal = 0;
    let saved = 0;
    let left = 0;

    current.forEach(item => {
      count += 1;
      goal += item.goal;
      left += item.left;
      saved += item.saved;
    });

    setCount(count);
    setGoal(goal);
    setLeft(left);
    setSaved(saved);
  };

  return (
    <SafeAreaView>
    <ScrollView style={{
          backgroundColor: 'white',
          // marginTop: 30,
          marginBottom: 40,
          padding: 20,
          flexDirection: 'column',
          gap: 10,
        }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0F172A' }}>Savings</Text>
        <CreateSavings refreshData={getSavingsList} edit={false} existingData={null} />
        
      </View>
      <Cards saved={saved} goal={goal} left={left} count={count} />
      
      <Text style={styles.subtitle}>Trackers</Text>
      <View style={styles.trackerContainer}>
        {savingsList.map((item, index) => (
          <Tracker key={index} item={item} />
        ))}
      </View>

    </ScrollView>
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
  },
  noTrackers: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SavingsPage;
