import { combineReducers,configureStore } from "@reduxjs/toolkit";

import policeDashboardSlice from "./policeDashboardSlice";

const combineReducer = combineReducers({
    policeDashboard:policeDashboardSlice,
});

export const store = configureStore({reducer:combineReducer});
