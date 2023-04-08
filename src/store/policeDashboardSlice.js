import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    REQUEST_STATUS_LOADING,
    REQUEST_STATUS_SUCCEEDED,
    REQUEST_STATUS_FAILED,
    REQUEST_STATUS_IDLE,
    CUSTOM_ERROR_MESSAGE
} from "../constants/Constants";

import * as API from "../api";

const initialState = {
    requestStatus: REQUEST_STATUS_LOADING,
    stationFirs:[],
    allFirs:[],
    message:null
}

export const getAllFirsLaunched = createAsyncThunk("/get-all-firs-launched", async (count) => {
    const response = await API.getAllFirsLaunched(count);
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const getStationFirsLaunched = createAsyncThunk("/get-station-firs-launched", async (reqParams) => {
    const response = await API.getStationFirsLaunched(reqParams);
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const getStationFirsNotLaunched = createAsyncThunk("/get-station-firs-not-launched", async (reqParams) => {
    const response = await API.getStationFirsNotLaunched(reqParams);
    return response.data; // response.data is your entire object that is seen in postman as the response
});

const policeDashboardSlice = createSlice({
    name: "policeDashboard",
    initialState: initialState,
    reducers: {
        resetRequestStatus:(state,action) => {
            state.requestStatus = REQUEST_STATUS_IDLE;
            state.message = null;
        },
    },
    extraReducers: (builder) => {
        builder

            // Get All Firs Launched
            .addCase(getAllFirsLaunched.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(getAllFirsLaunched.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.allFirs = action.payload.data.map((fir) => fir.attributes);
            })
            .addCase(getAllFirsLaunched.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.payload.error.message
            }) 

            // Get Station Firs Launched
            .addCase(getStationFirsLaunched.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(getStationFirsLaunched.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.stationFirs = action.payload.data.map((fir) => fir.attributes);
            })
            .addCase(getStationFirsLaunched.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.payload.error.message
            })

            // Get Station Firs Not Launched
            .addCase(getStationFirsNotLaunched.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(getStationFirsNotLaunched.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.stationFirs = action.payload.data.map((fir) => fir.attributes);
            })
            .addCase(getStationFirsNotLaunched.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.payload.error.message
            })

    }

});

export const { resetRequestStatus} = policeDashboardSlice.actions;

export default policeDashboardSlice.reducer;