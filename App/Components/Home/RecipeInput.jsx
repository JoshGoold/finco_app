import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setRecipeInput,
  addRecipe,
  clearRecipeInput,
  addIngredient,
  removeIngredient,
  addInstruction,
  removeInstruction,
  setCurrentInstruction,
  setCurrentIngredient,
} from '../../../redux/actions'
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '../../context/ThemeContext'

const RecipeInput = () => {
  const { title, image, description, ingredients, instructions, currentIngredient, currentInstruction } = useSelector((state) => state.input)
  const dispatch = useDispatch()
  const { theme } = useTheme()

  const handleAddRecipe = () => {
    const newRecipe = { id: Date.now(), title, image, description, ingredients, instructions }
    dispatch(addRecipe(newRecipe))
    dispatch(clearRecipeInput())
  }

  return (
    <View style={{
      backgroundColor: theme.card,
      flex: 2,
      padding: 30,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      marginBottom: 20
    }}>
      <View style={{ height: 1, backgroundColor: theme.text, marginBottom: 20 }}></View>
      <Text style={{ color: theme.text, paddingVertical: 10, fontWeight: "bold" }}>Recipe Title</Text>
      <TextInput
        style={{ color: theme.text, fontWeight: "bold", backgroundColor: theme.background, borderWidth: 1, padding: 10, marginBottom: 10, borderColor: theme.border }}
        value={title}
        onChangeText={(text) => dispatch(setRecipeInput('title', text))}
      // placeholder="Recipe Title"
      />
      <Text style={{ color: theme.text, paddingVertical: 10, fontWeight: "bold" }}>Image URL</Text>
      <TextInput
        style={{ color: theme.text, fontWeight: "bold", backgroundColor: theme.background, borderWidth: 1, padding: 10, marginBottom: 10, borderColor: theme.border }}
        value={image}
        onChangeText={(text) => dispatch(setRecipeInput('image', text))}
      // placeholder="Image URL"
      />
      <Text style={{ color: theme.text, paddingVertical: 10, fontWeight: "bold" }}>Recipe Description</Text>
      <TextInput
        style={{ color: theme.text, fontWeight: "bold", backgroundColor: theme.background, borderWidth: 1, padding: 10, marginBottom: 10, borderColor: theme.border }}
        value={description}
        onChangeText={(text) => dispatch(setRecipeInput('description', text))}
      // placeholder="Recipe Description"
      />

      <View style={{
        marginBottom: 20,
      }}>
        <Text style={{ color: theme.text, paddingVertical: 10, fontWeight: "bold" }}>Add Ingredient</Text>
        <TextInput
          style={{ color: theme.text, fontWeight: "bold", backgroundColor: theme.background, borderWidth: 1, padding: 10, marginBottom: 10, borderColor: theme.border }}
          value={currentIngredient}
          onChangeText={(text) => dispatch(setCurrentIngredient(text))}
        // placeholder="Add Ingredient"
        />
        <TouchableOpacity
          // title="Add Ingredient"
          onPress={() => {
            dispatch(addIngredient())
          }}
          style={{ padding: 10, backgroundColor: theme.primary, borderRadius: 10 }}
        ><Text style={{ fontWeight: "bold", textAlign: "center", color: theme.text }}>Add Ingredients</Text></TouchableOpacity>
        <FlatList
          data={ingredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5, color: theme.text }}>
              <Text style={{ color: theme.text }}>{item}</Text>
              <TouchableOpacity onPress={() => dispatch(removeIngredient(index))}>
                <Text style={{ color: "red" }}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={{
        marginBottom: 20,
      }}>
        <Text style={{ color: theme.text, paddingVertical: 10, fontWeight: "bold" }}>Add Instructions</Text>
        <TextInput
          style={{ color: theme.text, fontWeight: "bold", backgroundColor: theme.background, borderWidth: 1, padding: 10, marginBottom: 10, borderColor: theme.border }}
          value={currentInstruction}
        onChangeText={(text) => dispatch(setCurrentInstruction(text))}
        // placeholder="Add Instruction"
        />
        <TouchableOpacity
          // title="Add Instruction"
          onPress={() => {
            dispatch(addInstruction())
          }}
          style={{ padding: 10, backgroundColor: theme.primary, borderRadius: 10 }}
        ><Text style={{ fontWeight: "bold", textAlign: "center", color: theme.text }}>Add Instruction</Text></TouchableOpacity>
        <FlatList
          data={instructions}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5, color: theme.text }}>
              <Text style={{ color: theme.text }}>{item}</Text>
              <TouchableOpacity onPress={() => dispatch(removeInstruction(index))}>
                <Text style={{ color: "red" }}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{ height: 1, backgroundColor: theme.text, marginBottom: 20 }}></View>
      <TouchableOpacity
        title="Add Recipe"
        style={{ padding: 10, backgroundColor: theme.text, borderRadius: 10 }}
        onPress={handleAddRecipe}><Text style={{ fontWeight: "bold", textAlign: "center", color: theme.primary }}>Add Recipe</Text></TouchableOpacity>


    </View>
  )
}

export default RecipeInput
