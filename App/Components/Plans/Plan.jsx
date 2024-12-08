import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

const Plan = ({plan}) => {
    const nav = useNavigation()
    const planItems = useSelector((state)=>state.planItems)
    const filtered = planItems?.filter(item=>item.plan == plan.id) || []

  return (
    <TouchableOpacity onPress={()=>nav.navigate('plan',{plan: plan} )} style={styles.container}>
        <View style={styles.header}>
        <View style={styles.iconAndName}>
          <View style={styles.iconWrapper}>
            <Text style={styles.icon}>{plan.icon}</Text>
          </View>
          <View>
            <Text style={styles.name}>{plan.name}</Text>
            <Text style={styles.items}>{filtered?.length ||0} Item(s)</Text>
          </View>
        </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
      height: 100,
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
  

export default Plan