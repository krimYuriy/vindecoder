import { LOAD_INFO } from "../types"

export const loadInfo = results => ({
   type: LOAD_INFO,
   payload: results
})

export const fetchInfo = () => dispatch => {
   fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json')
      .then(response => response.json())
      .then(data => {
         console.log(data)
         dispatch(loadInfo(data.Results))
      })
}