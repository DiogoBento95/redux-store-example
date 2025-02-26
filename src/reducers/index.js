import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

// The root reducer combines all the individual reducers in the application.

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;

// The resulting combined reducer is then exported so that other files in the application can import and use it to create the store.