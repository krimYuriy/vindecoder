import { LOAD_VIN, SET_LOADING } from "../types"

const initialState = {
   VINVariables: [],
   isLoading: false
}

const VINReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_VIN:
         return {
            ...state,
            VINVariables: action.payload,
            isLoading: false
         }
      case SET_LOADING:
         return {
            ...state,
            isLoading: true
         }
      default:
         return state
   }
}

export default VINReducer