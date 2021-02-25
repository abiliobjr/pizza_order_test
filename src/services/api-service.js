import axios from 'axios'

import { 
  HOME_LOAD_HOME_DATA_SUCCESS,
  HOME_LOAD_HOME_DATA_FAILED
 } from '../pages/home/types';

const apiUrl = "http://localhost:3030"
const getHomeData =  (dispatch) => async event=> {
  
  await axios.get(apiUrl+'/homeOption')
    .then(result => {
      dispatch({type: HOME_LOAD_HOME_DATA_SUCCESS, payload: result.data})
    })
    .catch(function (error) {
      console.log(error.response.statusText)
      dispatch({type: HOME_LOAD_HOME_DATA_FAILED, payload: error})
    })
}

export default getHomeData