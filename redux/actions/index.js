export const SET_Budgets = 'SET_Budgets'
export const ADD_Budget = 'ADD_Budget'
export const REMOVE_Budget = 'REMOVE_Budget'
export const UPDATE_Budget = 'UPDATE_Budget'
export const SET_Budget_INPUT = 'SET_Budget_INPUT'
export const CLEAR_Budget_INPUT = 'CLEAR_Budget_INPUT'

export const SET_EXPENSES = 'SET_EXPENSES'
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'
// export const UPDATE_EXPENSE = 'UPDATE_Budget'
export const SET_EXPENSE_INPUT = 'SET_EXPENSE_INPUT'
export const CLEAR_EXPENSE_INPUT = 'CLEAR_EXPENSE_INPUT'

export const SET_PLANS = 'SET_PLANS'
export const ADD_PLAN = 'ADD_PLAN'
export const REMOVE_PLAN = 'REMOVE_PLAN'

export const SET_PLAN_ITEMS = 'SET_PLAN_ITEMS'
export const ADD_PLAN_ITEM = 'ADD_PLAN_ITEM'
export const REMOVE_PLAN_ITEM = 'REMOVE_PLAN_ITEM'

export const SET_SAVINGS_TRACKER = 'SET_SAVINGS_TRACKER'
export const ADD_SAVINGS_TRACKER = 'ADD_SAVINGS_TRACKER'
export const REMOVE_SAVINGS_TRACKER = 'REMOVE_SAVINGS_TRACKER'

export const SET_SAVINGS_TRACKER_INPUT = 'SET_SAVINGS_TRACKER_INPUT'
export const CLEAR_SAVINGS_TRACKER_INPUT = 'CLEAR_SAVINGS_TRACKER_INPUT'

export const SET_DEPOSIT = 'SET_DEPOSIT'
export const ADD_DEPOSIT = 'ADD_DEPOSIT'
export const REMOVE_DEPOSIT = 'REMOVE_DEPOSIT'

export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE'
export const TOGGLE_P_ACTIVE = 'TOGGLE_P_ACTIVE'
export const TOGGLE_S_ACTIVE = 'TOGGLE_S_ACTIVE'

export const SET_B_ACTIVE_SECTION = 'SET_B_ACTIVE_SECTION'

export const setActiveSection = (state)=>({
  type: SET_B_ACTIVE_SECTION,
  payload: state
})

export const toggleActive = () => ({
  type: TOGGLE_ACTIVE
})

export const togglePActive = () => ({
  type: TOGGLE_P_ACTIVE
})


export const toggleSActive = () => ({
  type: TOGGLE_S_ACTIVE
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

export const setExpenses = (expenses) => ({
  type: SET_EXPENSES,
  payload: expenses
})

export const addExpense = (expense) => ({ 
  type: ADD_EXPENSE, 
  payload: expense 
})

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE, 
  payload: id 
})

export const setExpenseInput = (name, value) => ({
  type: SET_EXPENSE_INPUT,
  payload: { name, value }
})

export const clearExpenseInput = () => ({
  type: CLEAR_EXPENSE_INPUT,
})

export const addSavingsTracker = (expense) => ({ 
  type: ADD_SAVINGS_TRACKER, 
  payload: expense 
})

export const removeSavingsTracker = (id) => ({
  type: REMOVE_SAVINGS_TRACKER, 
  payload: id 
})

export const setSavingsTrackerInput = (name, value) => ({
  type: SET_SAVINGS_TRACKER,
  payload: { name, value }
})

export const clearSavingsTrackerInput = () => ({
  type: CLEAR_SAVINGS_TRACKER_INPUT,
})

export const setDeposits = (deposits) =>({
  type: SET_DEPOSIT,
  payload: deposits
})

export const addDeposit = (expense) => ({ 
  type: ADD_DEPOSIT, 
  payload: expense 
})

export const removeDeposit = (id) => ({
  type: REMOVE_DEPOSIT, 
  payload: id 
})

export const setPlans = (plans) =>({
  type: SET_PLANS,
  payload: plans
})

export const addPlan = (plan) =>({
  type: ADD_PLAN,
  payload: plan
})

export const removePlan = (id) =>({
  type: REMOVE_PLAN,
  payload: id
})

export const setPlanItems= (items) =>({
  type: SET_PLAN_ITEMS,
  payload: items
})

export const addPlanItem = (item) =>({
  type: ADD_PLAN_ITEM,
  payload: item
})

export const removePlanItem = (id) =>({
  type: REMOVE_PLAN_ITEM,
  payload: id
})