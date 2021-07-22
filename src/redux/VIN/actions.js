import { LOAD_VIN, SET_LOADING, SET_MESSAGE } from "../types";
import { cashVariables } from "../VINList/actions";

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
      .then(response => response.json())
      .then(data => {
         console.log(data);

         const results = data.Results
            .filter(item => item.Value
               && item.Value !== '0'
               && item.Variable !== 'Error Text'
               && item.Variable !== 'Additional Error Text'
               && item.Variable !== 'Error Code')


         dispatch(loadVin(results))
         dispatch(loadMessage(data.Message))
         dispatch(cashVariables(input, results))
      })

   dispatch({
      type: SET_LOADING
   })
}
