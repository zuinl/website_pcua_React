import { SEARCH, LOADING } from './ActionTypes'
import server from './Server'

export const search = searchText => {
    return dispatch => {
        const endPoint = searchText.trim() === "" ? "getAll" : "search/" + searchText
        fetch(`${server}/sports/${endPoint}`, {
            method: "GET"
        })
        .then(async res => {
            const rawSports = await res.json()
            let sports = []
            rawSports.map(sport => {
                sports.push({
                    id: sport._id,
                    title: sport.title,
                    time: sport.time,
                    project: sport.project,
                    address: sport.address,
                    instructor: sport.instructor
                })
            })

            return {
                type: SEARCH,
                payload: { searchText, results: sports }
            }
        })
        .catch(err => {
            return {
                type: SEARCH,
                payload: { searchText, results: [] }
            }
        })
    }
}

export const setLoading = boolean => {
    return {
        type: LOADING,
        payload: boolean
    }
}