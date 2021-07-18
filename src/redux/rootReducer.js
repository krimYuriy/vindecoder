import { combineReducers } from "redux";
import VINReducer from "./VIN/VINReducer";

const rootReducer = combineReducers({
   VIN: VINReducer
})

export default rootReducer