export const SET_Budgets = 'SET_Budgets'
export const ADD_Budget = 'ADD_Budget'
export const REMOVE_Budget = 'REMOVE_Budget'
export const UPDATE_Budget = 'UPDATE_Budget'
export const SET_Budget_INPUT = 'SET_Budget_INPUT'
export const CLEAR_Budget_INPUT = 'CLEAR_Budget_INPUT'
// ingredients and instructions are arrays so handled differently
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION'
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'
export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT';
export const SET_CURRENT_INSTRUCTION = 'SET_CURRENT_INSTRUCTION';
export const SET_B_ACTIVE_SECTION = 'SET_B_ACTIVE_SECTION'

export const setActiveSection = (state)=>({
  type: SET_B_ACTIVE_SECTION,
  payload: state
})

export const toggleActive = () => ({
  type: TOGGLE_ACTIVE
})

export const setBudgets = (Budgets) => ({
  type: SET_Budgets,
  payload: Budgets
})

export const addBudget = (Budget) => ({ 
  type: ADD_Budget, 
  payload: Budget 
})

export const removeBudget = (id) => ({
  type: REMOVE_Budget, 
  payload: id 
})

export const setBudgetInput = (name, value) => ({
  type: SET_Budget_INPUT,
  payload: { name, value }
})

export const clearBudgetInput = () => ({
  type: CLEAR_Budget_INPUT,
})
