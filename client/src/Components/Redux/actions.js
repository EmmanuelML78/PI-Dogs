import axios from 'axios'
import {GET_DOGS, GET_ALLTEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, FILTER_BY_TEMPERAMENT, FILTER_BY_ORIGIN, SORT_BY_NAME, SORT_BY_WEIGHT } from './action-types'

export function getDogs() {
    return async function(dispatch) {
      let json = await axios.get("http://localhost:3001/dogs");
      return dispatch({
        type: GET_DOGS,
        payload: json.data
      });
    };
  }

  export function getTemperaments ()  {
    return async (dispatch) => {
        const res = await fetch('http://localhost:3001/temperaments')
        const data = await res.json()
        return dispatch({
          type: GET_ALLTEMPERAMENTS,
          payload: data
        })
    }
}

export const getDogByName = (name) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3001/dogs?name=${name}`)
    const data = await res.json()
    return dispatch({ type: GET_DOG_BY_NAME, payload: data })
  }
}

export const getDogDetail = (id) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3001/dogs/${id}`)
    const data = await res.json()
    return dispatch({ type: GET_DOG_DETAIL, payload: data })
      
  }
}

export function filterDogsByTemperament(payload) {
  return {
      type: FILTER_BY_TEMPERAMENT,
      payload
  }
}

export function filterDogsByOrigin(payload) {
  return {
      type: FILTER_BY_ORIGIN,
      payload
  }
}

export function sortByName(payload) {
  return {
      type: SORT_BY_NAME,
      payload
  }
}


export function sortByWeight(payload) {
  return {
      type: SORT_BY_WEIGHT,
      payload
  }
}