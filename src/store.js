import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/index";

// This is where we define our Redux store.

// Sets up a Redux store by creating a new instance of the store using the createStore function.

const store = createStore(
    rootReducer,
    applyMiddleware()
);

export default store;