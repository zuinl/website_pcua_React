import { createStore, combineReducers } from 'redux'

import SearchReducer from './reducers/Search'

const reducers = combineReducers({
    search: SearchReducer
})

export default createStore(reducers)
