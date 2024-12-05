import {
  ADD_Budget,
  CLEAR_Budget_INPUT,
  REMOVE_Budget,
  SET_Budget_INPUT,
  SET_Budgets,
  SET_B_ACTIVE_SECTION,
  TOGGLE_ACTIVE,
  UPDATE_Budget,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  SET_EXPENSE_INPUT,
  CLEAR_EXPENSE_INPUT,
} from "../actions";

const initial = {
  budgets: [],
  expenses: [],
  e_input: {
    id: Date.now(),
    budget: '',
    name: '',
    amount: ''
  },
  b_input: {
    id: Date.now(),
    icon: "💵",
    name: "",
    amount: 0,
  },
  budgets_activeSection: "statistics",
  active: false,
  isLightTheme: false,
};

const budgetHandler = (state = initial, action) => {
  switch (action.type) {
    case SET_Budgets:
      return {
        ...state,
        budgets: action.payload,
      };
    case TOGGLE_ACTIVE:
      return {
        ...state,
        active: !state.active,
      };
    case SET_B_ACTIVE_SECTION:
      return {
        ...state,
        budgets_activeSection: action.payload,
      };
    case ADD_Budget:
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    case REMOVE_Budget:
      return {
        ...state,
        budgets: state.budgets.filter((budget) => budget.id !== action.payload),
      };
      case UPDATE_Budget:
        return{
          ...state,
          
        }
     
    case SET_Budget_INPUT:
      return {
        ...state,
        b_input: { ...state.b_input, [action.payload.name]: action.payload.value },
      };

    case CLEAR_Budget_INPUT:
      return {
        ...state,
        b_input: {
          icon: '💵',
          id: Date.now(),
          name: "",
          amount: 0,
        },
      };

      case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
     
    case SET_EXPENSE_INPUT:
      return {
        ...state,
        e_input: { ...state.e_input, [action.payload.name]: action.payload.value },
      };

    case CLEAR_EXPENSE_INPUT:
      return {
        ...state,
        e_input: {
          id: Date.now(),
          budget: '',
          name: "",
          amount: 0,
        },
      };

    

    default:
      return state;
  }
};

export default budgetHandler;
