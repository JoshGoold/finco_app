import React from 'react'
import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { removePlan } from '../../redux/actions';
import Plan from '../Components/Plans/Plan';
import AddItem from '../Components/Plans/AddItem';
import Nav from '../Components/Nav';
import PlanItemsList from '../Components/Plans/ItemsList';

const PlanPage = () => {
    const dispatch = useDispatch()
    const plan = useRoute().params.plan
    const navigation = useNavigation();
    

    const deletePlan = ()=>{
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this plan?",
            [
              {
                text: "Cancel",
                onPress: () => {},
                style: "cancel",
              },
              {
                text: "Delete",
                onPress: () => {
                  dispatch(removePlan(plan.id));
                  navigation.goBack()
                },
              },
            ]
          );
    }

  return (
    <SafeAreaView style={[styles.container, {height: Dimensions.get('screen').height}]}>
        <ScrollView style={{
          backgroundColor: "white",
          marginTop: 30,
          marginBottom: 40,
          padding: 20,
          flexDirection: "column",
          gap: 10,
        }}>
             <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        >
          <Text style={styles.goBackText}><Ionicons name="arrow-back" size={24} color="black" /></Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.pageTitle}>{plan.name}</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={deletePlan} style={{backgroundColor: 'red', padding: 10, borderRadius: 10}}><Text style={{color: 'white', fontWeight: 'bold'}}>Delete</Text></TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <Plan plan={plan}/>
            <Text>Notes: {plan.notes}</Text>
          <AddItem plan={plan}/>
        </View>

        <View style={styles.latestExpensesContainer}>
          {/* <Text style={styles.latestExpensesTitle}>Latest Expenses</Text> */}
          <PlanItemsList plan={plan}/>
        </View>
        </ScrollView>
        <Nav isActive={'plans'}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: 20,
      backgroundColor: "#fff",
    },
    goBackButton: {
      marginBottom: 10,
    },
    goBackText: {
      fontSize: 16,
      fontWeight: "600",
      color: "black",
      alignItems: "center",
      flexDirection: "row",
      gap: 5
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 20
    },
    pageTitle: {
      fontSize: 24,
      fontWeight: "bold",
      flex: 1,
    },
    actionButtons: {
      flexDirection: "row",
      gap: 10,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 20,
    },
    latestExpensesContainer: {
      marginTop: 20,
    },
    latestExpensesTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });
  
export default PlanPage