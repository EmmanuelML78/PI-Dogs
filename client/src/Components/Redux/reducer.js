import {GET_DOGS, GET_ALLTEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, FILTER_BY_TEMPERAMENT, FILTER_BY_ORIGIN, SORT_BY_NAME, SORT_BY_WEIGHT} from './action-types'

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    dogDetail: {},
    
  }


  function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case GET_ALLTEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case GET_DOG_BY_NAME:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_DOG_DETAIL:
            return {
                ...state,
                dogDetail: action.payload,
            };
        case FILTER_BY_TEMPERAMENT:
        const allDogs= state.allDogs
        const filterDog = (action.payload === 'All') ? allDogs : allDogs.filter(e => e.temperaments?.includes(action.payload));
        const filterDB = [];
        allDogs.forEach(e => {
        if(typeof e.id === 'string'){
            e.temperaments?.forEach(t => {
                if(t === action.payload) filterDB.push(t);
                })
            }
        })
            return {
                ...state,
                dogs: filterDog.concat(filterDB)
            };   
    
        case FILTER_BY_ORIGIN:
        const alldogs = state.allDogs
        const originFilter =
        action.payload === 'created'
        ? alldogs.filter((item) => typeof item.id !== 'number')
        : alldogs.filter((item) => typeof item.id === 'number')
            return {
                ...state,
                dogs: action.payload === 'all' ? alldogs : originFilter,
            }
    
        case SORT_BY_NAME:
        const sortedName = action.payload === 'ABC' ?
        state.dogs.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1;
        }
            return 0
        }) :
        state.dogs.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
        }
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
        }
            return 0
        })
            return {
                ...state,
                dogs: sortedName 
            };
    
        case SORT_BY_WEIGHT:
        const sortedWeight = action.payload === 'asc' ?
            state.dogs.sort(function (a, b) {
            return parseInt(a.weight) - parseInt(b.weight)
            }) :
            state.dogs.sort(function (a, b) {
                return parseInt(b.weight) - parseInt(a.weight)
            })
            return {
                ...state,
                dogs: sortedWeight,
            }
        default:
            return { ...state }
    }
}
export default rootReducer;


 //     const allDogs = state.allDogs;
            //     const temperamentFilter = action.payload === 'All' ? allDogs : allDogs.filter(dog => dog.temperaments?.includes(action.payload)) 
            //     return {
            //     ...state,
            //     dogs: temperamentFilter
            // }