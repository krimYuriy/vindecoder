import { LOAD_VIN, SET_LOADING, SET_MESSAGE } from "../types"

const initialState = {
   VINVariables: [],
   isLoading: false,
   message: ''
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
      case SET_MESSAGE:
         return {
            ...state,
            message: action.payload
         }
      default:
         return state
   }
}

export default VINReducer