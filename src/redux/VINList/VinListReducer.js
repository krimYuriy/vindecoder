import { SET_DECODED_VINS } from "../types"

const initialState = {
   decodedVariables: []
}

const VinListReducer = (state = initialState, action) => {
   if (action.type === SET_DECODED_VINS) {
      const currentList = [...state.decodedVariables]

      if (currentList.length === 5) {
         currentList.pop()
      } else if (!currentList.includes(action.payload)) {
         currentList.unshift(action.payload)
      }
      return {
         ...state,
         decodedVariables: currentList
      }
   } else {
      return state
   }
}

export default VinListReducer