import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Coins, GoalIcon, ListPlusIcon, PiggyBank } from 'lucide-react-native';

const Cards = ({ saved, goal, left, count }) => {
  const formatCurrency = (value) => (value > 0 ? `$${Number(value).toFixed(2)}` : '$0');

  return (
    <View style={styles.container}>
      {/* Total Goal Card */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Total Goal</Text>
          <Text style={styles.amount}>{formatCurrency(goal)}</Text>
        </View>
        
      </View>

      {/* Total Saved Card */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Total Saved</Text>
          <Text style={styles.amount}>{formatCurrency(saved)}</Text>
        </View>
        
      </View>

      {/* Total Left Card */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Total Left</Text>
          <Text style={styles.amount}>{formatCurrency(left)}</Text>
        </View>
        
      </View>

      {/* Number of Trackers Card */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Number of Trackers</Text>
          <Text style={styles.amount}>{count > 0 ? count : 0}</Text>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    minWidth: '45%',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  iconContainer: {
    backgroundColor: '#70A288',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cards;
