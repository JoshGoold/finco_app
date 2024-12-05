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
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🐷</Text>
        </View>
        <Text style={styles.title}>{item?.name}</Text>
      </View>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <Text style={styles.percentageText}>
          {calculatePercentage(item?.saved, item?.goal)}% saved
        </Text>
        <Circle
          size={60}
          progress={90 / 100}
          style={styles.iconContainer}
          color="#0F172A"
          // unfilledColor="#fff"
          borderWidth={2}
          thickness={6}
        />
        <Text style={styles.percentageText}>
          {calculatePercentage(item?.left, item?.goal)}% left
        </Text>
      </View>

      {/* Details Section */}
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
   fill: "white"
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#333',
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Tracker;
