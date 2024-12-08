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
  ADD_DEPOSIT,
  REMOVE_DEPOSIT,
  SET_DEPOSIT,
  SET_EXPENSES,
  SET_PLANS,
  SET_PLAN_ITEMS,
  ADD_PLAN,
  ADD_PLAN_ITEM,
  REMOVE_PLAN,
  REMOVE_PLAN_ITEM,
  TOGGLE_P_ACTIVE,
} from "../actions";

const initial = {
  budgets: [],
  expenses: [],
  deposits: [],
  plans: [],
  planItems: [],
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
  budgets_activeSection: "budgets",
  active: false,
  s_active: false,
  p_active: false,
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

      case TOGGLE_P_ACTIVE:
        return {
          ...state,
          p_active: !state.p_active,
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

      case SET_EXPENSES: 
      return {
        ...state, 
        expenses: action.payload
      }
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

      case SET_DEPOSIT: 
      return {
        ...state, 
        deposits: action.payload
      }
      case ADD_DEPOSIT:
      return {
        ...state,
        deposits: [...state.deposits, action.payload],
      };
    case REMOVE_DEPOSIT:
      return {
        ...state,
        deposits: state.deposits.filter((deposit) => deposit.id !== action.payload),
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
    
        case SET_PLANS: 
        return {
          ...state, 
          plans: action.payload
        }

        case ADD_PLAN:
          return {
            ...state,
            plans: [...state.plans, action.payload]
          }

          case REMOVE_PLAN:
            return {
              ...state, 
              plans: state.plans.filter(plan=>plan.id !== action.payload)
            }

        case SET_PLAN_ITEMS: 
        return {
          ...state, 
          planItems: action.payload
        }

        case ADD_PLAN_ITEM:
          return {
            ...state,
            planItems: [...state.planItems, action.payload]
          }
       
          case REMOVE_PLAN_ITEM:
            return {
              ...state, 
              planItems: state.planItems.filter(item=>item.id !== action.payload)
            }

    default:
      return state;
  }
};

export default budgetHandler;
