import { CASH_VARIABLE, SET_DECODED_VINS } from "../types"

const initialState = {
   decodedVariables: [],
   cashedVar: {}
}

const VinListReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_DECODED_VINS: {
         const currentList = [...state.decodedVariables]

         if (currentList.length === 5 && !currentList.includes(action.payload)) {
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
      case CASH_VARIABLE:
         return {
            ...state,
            cashedVar: {
               ...state.cashedVar,
               [action.payload[0]]: [action.payload[1], action.payload[2]]
            }
         }

      default:
         return state
   }
}

export default VinListReducer