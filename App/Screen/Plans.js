import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Nav from '../Components/Nav'
import { ScrollView } from 'react-native-gesture-handler'
import CreatePlan from '../Components/Plans/CreatePlan'
import { useSelector } from 'react-redux'
import Plan from '../Components/Plans/Plan'
const Plans = () => {
  const plans = useSelector((state)=>state.plans)

  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
        <ScrollView
        style={{
          backgroundColor: 'white',
          // marginTop: 30,
          marginBottom: 40,
          padding: 20,
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#0F172A' }}>My Plans</Text>
          <CreatePlan/>
        </View>

        <View style={{ paddingHorizontal: 10, paddingVertical: 20, marginBottom: 20 }}>
          {plans?.length > 0 ? (
           plans.map((plan, key)=>(
            <Plan key={key} plan={plan}/>
           ))
          ) : (
            <Text>No plans created</Text>
          )}
        </View>
      </ScrollView>
        
        <Nav isActive={'plans'}/>
    </SafeAreaView>
  )
}

export default Plans