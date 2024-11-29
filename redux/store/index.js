import { createStore } from 'redux'
import recipeHandler from '../reducers'

const store = createStore(recipeHandler)

export default store
