import { combineReducers } from "redux";
import stepReducer from "./step/stepReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  step: stepReducer,
  user: userReducer,
});

export default rootReducer;
