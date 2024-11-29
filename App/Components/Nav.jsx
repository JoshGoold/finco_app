'use client'

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Nav = ({isActive}) => {
    const nav = useNavigation()

  const menu = [
    { id: '1', title: 'Dashboard', path: 'dashboard' },
    { id: '2', title: 'Budgets', path: 'budgets' },
    { id: '3', title: 'Plans', path: 'plans' },
    { id: '4', title: 'Savings', path: 'savings' },
    { id: '5', title: 'Bills', path: 'bills' },
    { id: '0', title: 'Logout', path: 'home' },
  ]

  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity
        onPress={()=>nav.navigate('budgets')}
        style={[styles.navItem, isActive==item.path && styles.activeNavItem]}
      >
        <Text style={[styles.navText, isActive==item.path && styles.activeNavText]}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.navbar}>
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 60
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  navText: {
    fontSize: 12,
    color: '#0F172A',
    fontWeight: '400'
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#0F172A',
    // fontWeight: 'bold'
  },
  activeNavText: {
    color: '#0F172A',
    fontWeight: "800"
  },
  userButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
})

export default Nav
