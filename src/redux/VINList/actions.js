import { CASH_VARIABLE, SET_DECODED_VINS } from "../types";

export const setList = decodedVar => ({
   type: SET_DECODED_VINS,
   payload: decodedVar
})

export const cashVariables = (vin, variables, message) => ({
   type: CASH_VARIABLE,
   payload: [vin, variables, message]
})