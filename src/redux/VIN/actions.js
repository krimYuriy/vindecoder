import { LOAD_VIN, SET_LOADING, SET_MESSAGE } from "../types";
import { cashVariables, setList } from "../VINList/actions";

export const loadVin = varibles => ({
   type: LOAD_VIN,
   payload: varibles
})

export const loadMessage = message => ({
   type: SET_MESSAGE,
   payload: message
})


export const fetchVIN = input => (dispatch) => {

   fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${input}?format=json`)
      .then(response => {
         if (response.ok) {
            return response.json()
         } else {
            throw new Error('Что-то пошло не так')
         }
      })
      .then(data => {
         const errorText = data.Results.find(item => item.Variable === 'Additional Error Text')
         const error = data.Results.find(item => item.Variable === 'Error Text')
         if (errorText.Value) {
            dispatch(loadMessage(errorText.Value))
            dispatch(loadVin([error]))
            return
         }

         const results = data.Results
            .filter(item => item.Value
               && item.Value !== '0'
               && item.Variable !== 'Error Text'
               && item.Variable !== 'Error Code')

         const message = data.Message

         dispatch(loadVin(results))
         dispatch(loadMessage(message))
         dispatch(cashVariables(input, results, message))
         dispatch(setList(input))
      })
      .catch(err => {
         console.log(err)
      })


   dispatch({
      type: SET_LOADING
   })
}
