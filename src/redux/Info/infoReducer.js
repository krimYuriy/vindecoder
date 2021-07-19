import { LOAD_INFO } from '../types'

const initialState = {
   infoVariables: [],
   isLoaded: false
}

const infoReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_INFO:
         return {
            ...state,
            infoVariables: action.payload,
            isLoaded: true
         }

      default:
         return state
   }
}

export default infoReducer