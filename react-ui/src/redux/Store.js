import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import SportsReducer from './reducers/Sports'

const reducers = combineReducers({
    sports: SportsReducer
})

export default createStore(reducers, applyMiddleware(thunk))