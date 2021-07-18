import { combineReducers } from "redux";
import VINReducer from "./VIN/VINReducer";
import VinListReducer from "./VINList/VinListReducer";

const rootReducer = combineReducers({
   VIN: VINReducer,
   decoded: VinListReducer
})

export default rootReducer