import { SEARCH, LOADING } from './ActionTypes'
import server from './Server'

export const search = (searchText = "") => {
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

            dispatch(setSports(sports))
        })
        .catch(err => dispatch(setSports([])))
    }
}

export const setLoading = boolean => {
    return {
        type: LOADING,
        payload: boolean
    }
}

const setSports = sports => {
    return {
        type: SEARCH,
        payload: sports
    }
}