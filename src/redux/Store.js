import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import SearchReducer from './reducers/Search'

const reducers = combineReducers({
    search: SearchReducer
})

export default createStore(reducers, applyMiddleware(thunk))