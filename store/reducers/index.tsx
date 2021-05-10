import { combineReducers } from 'redux'
import { firstReducer } from './firstReducer'

const reducer = combineReducers({ first: firstReducer })

export default reducer
