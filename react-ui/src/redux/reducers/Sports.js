import { SEARCH, LOADING } from '../actions/ActionTypes'

const initialState = {
    sports: [],
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                sports: action.payload
            }
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return {
                ...state
            }
    }
}