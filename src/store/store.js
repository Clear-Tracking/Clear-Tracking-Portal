import { combineReducers,configureStore } from "@reduxjs/toolkit";

import globalSlice from "./globalSlice";
import dashboardSlice from "./dashboardSlice";

const combineReducer = combineReducers({
    global: globalSlice,
    dashboard:dashboardSlice,
});

export const store = configureStore({reducer:combineReducer});
