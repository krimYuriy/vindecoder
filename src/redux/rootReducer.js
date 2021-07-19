import { combineReducers } from "redux";
import infoReducer from "./Info/infoReducer";
import VINReducer from "./VIN/VINReducer";
import VinListReducer from "./VINList/VinListReducer";

const rootReducer = combineReducers({
   VIN: VINReducer,
   decoded: VinListReducer,
   info: infoReducer
})

export default rootReducer