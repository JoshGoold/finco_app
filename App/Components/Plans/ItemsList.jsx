import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removePlanItem } from '../../../redux/actions';

const PlanItemsList = ({ plan }) => {

  const planItems = useSelector((state) => state.planItems);

  const [sum, setSum]=useState(0)


  const filteredPlanItems = plan
    ? planItems?.filter((item) => item.plan === plan.id)
    : planItems.sort((a, b) => a.id - b.id); 

  const calculateSum = ()=>{
    let sum = 0
    filteredPlanItems.forEach(item=>{
        sum+=Number(item.price)
    })

    setSum(sum)
  }

  useEffect(()=>{
    calculateSum()
  }, [planItems])

  const dispatch = useDispatch();

  const deletePlanItem = (id) => {
    console.log(`Deleted plan item with id: ${id}`);
    dispatch(removePlanItem(id));
  };

  const renderItem = ({ item }) => (
    <View style={[styles.row, styles.planItemRow]}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>${item.price}</Text>
      <Text style={styles.cell}>{item.notes || 'No notes'}</Text>
      <TouchableOpacity
        onPress={() => deletePlanItem(item.id)}
        style={styles.cell}
      >
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Items (Total: ${sum})</Text>
      <View style={[styles.row, styles.header]}>
        <Text style={styles.cell}>Name</Text>
        <Text style={styles.cell}>Price</Text>
        <Text style={styles.cell}>Notes</Text>
        <Text style={styles.cell}>Action</Text>
      </View>
      
      <FlatList
        style={{ paddingBottom: 10 }}
        nestedScrollEnabled
        data={filteredPlanItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    backgroundColor: '#85C898',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  planItemRow: {
    backgroundColor: '#F1F5F8',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default PlanItemsList;
