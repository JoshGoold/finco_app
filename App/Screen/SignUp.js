import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SignUp = () => {
    const nav = useNavigation()
    // save info in redux store
  return (
    <SafeAreaView style={{ backgroundColor: '#0F172A', flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
         <Text onPress={()=>nav.navigate('home')} style={{fontSize: 20, position: "absolute", top: 0, padding: 40, color: "white", alignSelf: "left"}}>Back</Text>
    <View style={{width: "100%", padding: 30, backgroundColor: "tranparent", borderWidth: 2, borderColor: "transparent" }}>
 <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 }}>Sign up for Einco</Text>
      <View style={{ width: '100%', marginBottom: 20 }}>
      <TextInput
          placeholder="First Name"
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: 'none',
            color: 'white',
            fontSize: 16,
            borderWidth: 2,
            borderColor: "#85C898",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 15,
          }}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={{
            backgroundColor: 'none',
            color: 'white',
            fontSize: 16,
            borderWidth: 2,
            borderColor: "#85C898",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 15,
          }}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: 'none',
            color: 'white',
            fontSize: 16,
            borderWidth: 2,
            borderColor: "#85C898",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 15,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={{
            backgroundColor: 'none',
            color: 'white',
            fontSize: 16,
            borderWidth: 2,
            borderColor: "#85C898",
            borderRadius: 10,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 15,
          }}
        />
  
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#85C898',
          paddingVertical: 15,
          paddingHorizontal: 50,
          borderRadius: 25,
          marginBottom: 20,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#0F172A', fontSize: 16, fontWeight: '600' }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 10, textAlign: "right" }}>
        <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>
          Already have an account?{' '}
          <Text style={{ color: '#85C898', fontWeight: 'bold' }} onPress={()=>nav.navigate('login')}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
     
    </SafeAreaView>
  )
}

export default SignUp
