import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Circle} from 'react-native-progress';
import { useSelector } from 'react-redux';

const Tracker = ({ item }) => {
  const nav = useNavigation()
  const [saved, setSaved] = useState(0)
  const [left, setLeft] = useState(0)
  const [count, setCount] = useState(0)
  const deposits = useSelector((state)=>state.deposits)

  const calculatePercentage = (num, goal) => {
    const perc = (Number(num) / Number(goal)) * 100;
    return Math.round(perc);
  };

  const getStats = () =>{
    
    let thisDeposits = deposits?.filter((deposit)=>deposit.tracker==item.id)
    let saved = 0
    let left = 0
    let count = 0
    thisDeposits.forEach((deposit)=>{
      saved += Number(deposit.amount)
      count+=1
    }) 

    left = item.goal- saved

    setLeft(left)
    setSaved(saved)
    setCount(count)
  }

  useEffect(()=>{
    getStats()
  }, [deposits])

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={()=>nav.navigate('deposits',{tracker: item} )}    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{item.icon}</Text>
        </View>
        <Text style={styles.title}>{item?.name}</Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.percentageText}>
          {calculatePercentage(saved, item?.goal)}% saved
        </Text>
        <Circle
          size={100}
          progress={calculatePercentage(saved, item?.goal)/100}
          // style={styles.iconContainer}
          color="#85C898"
          unfilledColor="#0F172A"//#0F172A
          borderWidth={0}
          thickness={10}
        />
        <Text style={styles.percentageText}>
          {calculatePercentage(left, item?.goal)}% left
        </Text>
      </View>

      <Text style={styles.detail}>
        <Text style={styles.bold}>Goal: </Text>${Number(item?.goal).toFixed(2)}
      </Text>
      <Text style={styles.detail}>
        <Text style={styles.bold}>Total Saved: </Text>${Number(saved).toFixed(2)}
      </Text>
      <Text style={styles.detail}>
        <Text style={styles.bold}>Amount Left: </Text>${Number(left).toFixed(2)}
      </Text>
      <Text style={styles.detail}>
        <Text style={styles.bold}>Number of Deposits: </Text>
        {count}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    backgroundColor: '#e6e6e6', 
    borderRadius: 50,
    padding: 10,
    marginRight: 8,
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  percentageText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  detail: {
    fontSize: 14,
    color: 'black',
    marginVertical: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#0F172A',
  },
});

export default Tracker;
