// import { createStore } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
// const rootReducer = combineReducers({});
// const store = configureStore({
//   reducer: rootReducer,
// });
const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type RootState = ReturnType<typeof rootReducer>;
export default store;
