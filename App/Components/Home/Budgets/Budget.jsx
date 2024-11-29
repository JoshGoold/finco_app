import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native' // Assuming you use React Navigation for routing

const Budget = () => {
  const nav = useNavigation()
  const percent = Math.round((400 / 500) * 100)
  const maxPercent = Math.min(percent, 100)
  const progressBarColor = percent > 100 ? styles.destructive : styles.primary

  return (
    <TouchableOpacity
    onPress={()=>nav.navigate('budget')}
      // onPress={() => navigation.navigate('Expenses', { id: item?.id })}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.iconAndName}>
          <View style={styles.iconWrapper}>
            <Text style={styles.icon}>👀</Text>
          </View>
          <View>
            <Text style={styles.name}>My First Bidget</Text>
            <Text style={styles.items}>35 Item(s)</Text>
          </View>
        </View>
        <Text style={styles.amount}>$500</Text>
      </View>
      <View style={styles.progressSection}>
        <View style={styles.progressLabels}>
          <Text style={styles.spent}>
            $400.00
          </Text>
          <Text style={styles.remaining}>
            $100 remaining
          </Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, progressBarColor, { width: `${maxPercent}%` }]}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 180,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconAndName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#e6e6e6', 
    borderRadius: 50,
    padding: 10,
    marginRight: 8,
  },
  icon: {
    fontSize: 24,
    textAlign: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "#0F172A"
  },
  items: {
    fontSize: 12,
    color: '#777',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black', 
  },
  progressSection: {
    marginTop: 20,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  spent: {
    fontSize: 12,
    color: 'black',
  },
  remaining: {
    fontSize: 12,
    color: 'black',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#e6e6e6', 
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 8,
    borderRadius: 4,
  },
  primary: {
    backgroundColor: '#0F172A', 
  },
  destructive: {
    backgroundColor: '#ff4d4d',
  },
})

export default Budget
