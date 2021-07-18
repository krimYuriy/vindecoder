import { SET_DECODED_VINS } from "../types";

export const setList = decodedVar => ({
   type: SET_DECODED_VINS,
   payload: decodedVar
})