import { createStore } from 'redux'
import budgetHandler from '../reducers'

const store = createStore(budgetHandler)

export default store
