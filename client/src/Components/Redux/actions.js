import axios from 'axios'
import {GET_DOGS, GET_ALLTEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, FILTER_BY_TEMPERAMENT, FILTER_BY_ORIGIN, SORT_BY_NAME, SORT_BY_WEIGHT } from './action-types'


export function getDogs() {
    return async function(dispatch) {
      let json = await axios.get("/dogs");
      return dispatch({
        type: GET_DOGS,
        payload: json.data
      });
    };
  }

  export function getTemperaments ()  {
    return async (dispatch) => {
        const res = await axios.get('/temperaments')
        return dispatch({
          type: GET_ALLTEMPERAMENTS,
          payload: res.data
        })
    }
}

export const getDogByName = (name) => {
  return async (dispatch) => {
    const res = await axios.get(`/dogs?name=${name}`)
    return dispatch({ type: GET_DOG_BY_NAME, payload: res.data })
  }
}

export const getDogDetail = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/dogs/${id}`)
    return dispatch({ type: GET_DOG_DETAIL, payload: res.data })
      
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