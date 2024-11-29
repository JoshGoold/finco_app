export const SET_RECIPES = 'SET_RECIPES'
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_RECIPE = 'REMOVE_RECIPE'
export const UPDATE_RECIPE = 'UPDATE_RECIPE'
export const SET_RECIPE_INPUT = 'SET_RECIPE_INPUT'
export const CLEAR_RECIPE_INPUT = 'CLEAR_RECIPE_INPUT'
// ingredients and instructions are arrays so handled differently
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION'
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'
export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';
export const SET_CURRENT_INSTRUCTION = 'SET_CURRENT_INSTRUCTION';
export const SET_THEME = 'SET_THEME'

export const setTheme = ()=>({
  type: SET_THEME
})

export const toggleActive = () => ({
  type: TOGGLE_ACTIVE
})

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  payload: recipes
})

export const addRecipe = (recipe) => ({ 
  type: ADD_RECIPE, 
  payload: recipe 
})

export const removeRecipe = (id) => ({
  type: REMOVE_RECIPE, 
  payload: id 
})

export const setRecipeInput = (name, value) => ({
  type: SET_RECIPE_INPUT,
  payload: { name, value }
})

export const clearRecipeInput = () => ({
  type: CLEAR_RECIPE_INPUT,
})

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: ingredient
})

export const removeIngredient = (index) => ({
  type: REMOVE_INGREDIENT,
  payload: index
})

export const addInstruction = (instruction) => ({
  type: ADD_INSTRUCTION,
  payload: instruction
})

export const removeInstruction = (index) => ({
  type: REMOVE_INSTRUCTION,
  payload: index
})

export const setCurrentIngredient = (ingredient) => ({
  type: SET_CURRENT_INGREDIENT,
  payload: ingredient
})

export const setCurrentInstruction = (instruction) => ({
  type: SET_CURRENT_INSTRUCTION,
  payload: instruction
})