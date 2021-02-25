import { 
  HOME_LOAD_HOME_DATA_SUCCESS,
  HOME_LOAD_HOME_DATA_FAILED
 } from './types';

const INITIAL_STATE = {
  dayRecomendation:{},
  sizes: [],
  sauces: [],
  flavors: []
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case HOME_LOAD_HOME_DATA_SUCCESS:
    return {
     ...action.payload
    }
  case HOME_LOAD_HOME_DATA_FAILED:
    return {
      ...action.payload
    }
   default:
    return state
  }
 }

 export default homeReducer
