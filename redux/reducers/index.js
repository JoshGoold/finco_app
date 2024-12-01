import {
  ADD_Budget,
  CLEAR_Budget_INPUT,
  REMOVE_Budget,
  SET_Budget_INPUT,
  SET_Budgets,
  SET_B_ACTIVE_SECTION,
  TOGGLE_ACTIVE,
  UPDATE_Budget,
} from "../actions";

const initial = {
  budgets: [],
  input: {
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
        input: { ...state.input, [action.payload.name]: action.payload.value },
      };

    case CLEAR_Budget_INPUT:
      return {
        ...state,
        input: {
          icon: '💵',
          id: Date.now(),
          name: "",
          amount: 0,
        },
      };

    default:
      return state;
  }
};

export default budgetHandler;
