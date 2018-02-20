import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

window.store = store;
console.log("Redux 'store' object is exposed for debugging");

export default store;