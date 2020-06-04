import { SEARCH, LOADING } from '../actions/ActionTypes'

const initialState = {
    searchText: '',
    results: [
        {
            id: 1,
            title: "Ballet",
            time: "11h às 12h",
            project: "Vida Ativa",
            address: "Clube VW",
            instructor: "Irina"
        },
        {
            id: 2,
            title: "Ballet",
            time: "11h às 12h",
            project: "Vida Ativa",
            address: "Clube VW",
            instructor: "Irina"
        },
        {
            id: 3,
            title: "Ballet",
            time: "11h às 12h",
            project: "Vida Ativa",
            address: "Clube VW",
            instructor: "Irina"
        },
        {
            id: 4,
            title: "Ballet",
            time: "11h às 12h",
            project: "Vida Ativa",
            address: "Clube VW",
            instructor: "Irina"
        }
    ],
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                searchText: action.payload.searchText,
                results: action.payload.results
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