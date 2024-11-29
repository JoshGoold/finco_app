import { ADD_INGREDIENT, ADD_INSTRUCTION, ADD_RECIPE, CLEAR_RECIPE_INPUT, REMOVE_INGREDIENT, REMOVE_INSTRUCTION, REMOVE_RECIPE, SET_CURRENT_INGREDIENT, SET_CURRENT_INSTRUCTION, SET_RECIPE_INPUT, SET_RECIPES, SET_THEME, TOGGLE_ACTIVE, UPDATE_RECIPE } from "../actions"

// recipe: id, description, image, ingredients array, instructions array, title

const initial = {
  recipes: [],
  input: {
    id: Date.now(),
    title: '',
    image: '',
    description: '',
    ingredients: [],
    instructions: [],
  },
  active: false,
  isLightTheme: false
}

const recipeHandler = (state = initial, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case TOGGLE_ACTIVE:
      return {
        ...state,
        active: !state.active,
      }
      case SET_THEME:
        return {
          ...state,
          isLightTheme: !state.isLightTheme
        }
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      }
    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload)
      }
    case SET_RECIPE_INPUT:
      return {
        ...state,
        input: { ...state.input, [action.payload.name]: action.payload.value },
      }
    case CLEAR_RECIPE_INPUT:
      return {
        ...state,
        input: {
          id: Date.now(),
          title: '',
          image: '',
          description: '',
          ingredients: [],
          instructions: [],
          currentIngredient: '',
          currentInstruction: '',

        }
      }
    case REMOVE_INGREDIENT:
      return {
        ...state,
        input: {
          ...state.input,
          ingredients: state.input.ingredients.filter((_, index) => index !== action.payload),
        }
      }
      case ADD_INGREDIENT:
        return {
          ...state,
          input: {
            ...state.input,
            ingredients: [...state.input.ingredients, state.input.currentIngredient],
            currentIngredient: '', 
          },
        }
      case ADD_INSTRUCTION:
        return {
          ...state,
          input: {
            ...state.input,
            instructions: [...state.input.instructions, state.input.currentInstruction],
            currentInstruction: '',
          },
        }
    case REMOVE_INSTRUCTION:
      return {
        ...state,
        input: {
          ...state.input,
          instructions: state.input.instructions.filter((_, index) => index !== action.payload),
        }
      }
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        input: { ...state.input, currentIngredient: action.payload },
      }
    case SET_CURRENT_INSTRUCTION:
      return {
        ...state,
        input: { ...state.input, currentInstruction: action.payload },
      }
    default:
      return state
  }
}

export default recipeHandler
