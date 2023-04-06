import { configureStore } from "redux";
import rootReducer from "Reducers";

const store = configureStore(rootReducer);

export default store;
