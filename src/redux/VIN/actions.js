import { LOAD_VIN, SET_LOADING } from "../types";

export const loadVin = varibles => ({
   type: LOAD_VIN,
   payload: varibles
})


export const fetchVIN = () => (dispatch) => {

   fetch('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/1FTFW1CT5DFC10312?format=json')
      .then(response => response.json())
      .then(data => {
         const results = data.Results.filter(item => item.Value && item.Value !== '0' && item.Variable !== 'Error Text')
         dispatch(loadVin(results))
         console.log(results)
      })

   dispatch({
      type: SET_LOADING
   })
}
