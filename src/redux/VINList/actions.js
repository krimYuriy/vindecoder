import { SELECT_VIN, SET_DECODED_VINS } from "../types";

export const setList = decodedVar => ({
   type: SET_DECODED_VINS,
   payload: decodedVar
})

export const selectVin = vin => ({
   type: SELECT_VIN,
   payload: vin
})