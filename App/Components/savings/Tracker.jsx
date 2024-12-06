import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Circle} from 'react-native-progress';

const Tracker = ({ item, onNavigate }) => {
  const calculatePercentage = (num, goal) => {
    const perc = (Number(num) / Number(goal)) * 100;
    return Math.round(perc);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onNavigate(`/dashboard/savings/${item?.id}`)}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{item.icon}</Text>
        </View>
        <Text style={styles.title}>{item?.name}</Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.percentageText}>
          {calculatePercentage(item?.saved, item?.goal) || 60}% saved
        </Text>
        <Circle
          size={100}
          progress={calculatePercentage(item?.saved, item?.goal) || 60/100}
          // style={styles.iconContainer}
          color="#85C898"
          unfilledColor="#0F172A"//#0F172A
          borderWidth={0}
          thickness={10}
        />
        <Text style={styles.percentageText}>
          {calculatePercentage(item?.left, item?.goal)|| 40}% left
        </Text>
      </View>

      <Text style={styles.detail}>
        <Text style={styles.bold}>Goal: </Text>${Number(item?.goal).toFixed(2)}
      </Text>
      <Text style={styles.detail}>
        <Text style={styles.bold}>Total Saved: </Text>${Number(item?.saved).toFixed(2)}
      </Text>
      <Text style={styles.detail}>
        <Text style={styles.bold}>Amount Left: </Text>${Number(item?.left).toFixed(2)}
      </Text>
      <Text style={styles.detail}>
        <Text style={styles.bold}>Number of Deposits: </Text>
        {item?.totalDeposits > 0 ? Number(item?.totalDeposits).toFixed(2) : 0}
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
