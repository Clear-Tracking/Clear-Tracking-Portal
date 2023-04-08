import { combineReducers,configureStore } from "@reduxjs/toolkit";

import globalSlice from "./globalSlice";
// import policeDashboardSlice from "./policeDashboardSlice";

const combineReducer = combineReducers({
    global: globalSlice,
    // policeDashboard:policeDashboardSlice,
});

export const store = configureStore({reducer:combineReducer});
