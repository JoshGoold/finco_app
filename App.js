import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from './App/context/ThemeContext'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeNav from './App/Navs/HomeNav'

 const App = ()=> {
  
  return(
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <HomeNav/>
        </NavigationContainer>
      </SafeAreaView>
  )
      
    

}

export default App
