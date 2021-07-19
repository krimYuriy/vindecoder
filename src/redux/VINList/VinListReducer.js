import { SELECT_VIN, SET_DECODED_VINS } from "../types"

const initialState = {
   decodedVariables: [],
   selectedVIN: ''
}

const VinListReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_DECODED_VINS: {
         const currentList = [...state.decodedVariables]

         if (currentList.length === 5) {
            currentList.pop()
            currentList.unshift(action.payload)
         } else if (!currentList.includes(action.payload)) {
            currentList.unshift(action.payload)
         }
         return {
            ...state,
            decodedVariables: currentList
         }
      }
      case SELECT_VIN:
         return {
            ...state,
            selectedVIN: action.payload
         }
      default:
         return state
   }
}

export default VinListReducer