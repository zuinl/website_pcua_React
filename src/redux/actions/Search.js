import { SEARCH, LOADING } from './ActionTypes'

const results = [
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
]

export const search = searchText => {
    let searchResults = results.filter(result => {
        return result.title === searchText
    })
    return {
        type: SEARCH,
        payload: { searchText, results: searchResults }
    }
}

export const setLoading = boolean => {
    return {
        type: LOADING,
        payload: boolean
    }
}