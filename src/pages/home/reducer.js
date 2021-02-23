const INITIAL_STATE = {
  dayRecomendation:{},
  sizes: [],
  sauces: [],
  flavors: []
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case 'SIMPLE_ACTION':
    return {
     result: action.payload
    }
   default:
    return state
  }
 }

 export default homeReducer
