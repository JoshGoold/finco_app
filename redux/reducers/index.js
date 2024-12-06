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
  ADD_SAVINGS_TRACKER,
  REMOVE_SAVINGS_TRACKER,
  SET_SAVINGS_TRACKER_INPUT,
  CLEAR_SAVINGS_TRACKER_INPUT,
  TOGGLE_S_ACTIVE,
} from "../actions";

const initial = {
  budgets: [],
  expenses: [],
  deposits: [],
  s_trackers: [],
  s_input: {
      id: Date.now(),
      icon: "🪙",
      name: "",
      goal: 0
    },
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
  s_input: {
    id: Date.now(),
    icon: "🪙",
    name: "",
    goal: 0
  },
  budgets_activeSection: "statistics",
  active: false,
  s_active: false,
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
      case TOGGLE_S_ACTIVE:
      return {
        ...state,
        s_active: !state.s_active,
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

      case ADD_SAVINGS_TRACKER:
        return {
          ...state,
          s_trackers: [...state.s_trackers, action.payload],
        };
      case REMOVE_SAVINGS_TRACKER:
        return {
          ...state,
          s_trackers: state.s_trackers.filter((tracker) => tracker.id !== action.payload),
        };

        // not working for SOME reason only God the father knows
      case SET_SAVINGS_TRACKER_INPUT:
        return {
          ...state,
          s_input: { ...state.s_input, [action.payload.name]: action.payload.value },
        };
      case CLEAR_SAVINGS_TRACKER_INPUT:
        return {
          ...state,
          s_input: {
            id: Date.now(),
            icon: "🪙",
            name: "",
            goal: 0
          },
        };
    

    default:
      return state;
  }
};

export default budgetHandler;
