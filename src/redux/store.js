import { createStore } from "redux";
import stepReducer from "./step/stepReducer";

const jakstore = createStore(stepReducer);

export default jakstore;
