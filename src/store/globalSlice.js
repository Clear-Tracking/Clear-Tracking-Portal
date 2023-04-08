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
    requestStatus: REQUEST_STATUS_IDLE,
    username:null,
    email:null,
    aadharNo:null,
    isPolice:false,
    stationId:null,
    message:null,
}

export const login = createAsyncThunk('/login', async (formData) => {
    const queryParams = `filters[$or][0][email][$eq]=${formData.username}&filters[$or][1][username][$eq]=${formData.username}&filters[password][$eq]=${formData.password}&fields[0]=email&fields[1]=aadharNo&fields[2]=username&fields[3]=isPolice&fields[4]=stationId`;
    const response = await API.login({queryParams:queryParams});
    return response.data; // response.data is your entire object that is seen in postman as the response
});


const globalSlice = createSlice({
    name: "global",
    initialState: initialState,
    reducers: {
        resetRequestStatus: (state, action) => {
            state.requestStatus = REQUEST_STATUS_IDLE;
            state.message = null;
        },
        logout: (state, action) => {
            localStorage.clear();
            state.requestStatus = REQUEST_STATUS_SUCCEEDED;
            state.username = null;
            state.email = null;
            state.aadharNo = null;
            state.isPolice = false;
            state.stationId = null;
            state.message = "Logout Successful";
        },

    },
    extraReducers: (builder) => {
        builder

            // Login
            .addCase(login.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(login.fulfilled, (state, action) => { // action.payload is the respons
                
                // If User exits and Correct Credentials
                if (action.payload.data.length > 0) {
                    state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                    state.username = action.payload.data[0].attributes.username;
                    state.email = action.payload.data[0].attributes.email;
                    state.aadharNo = action.payload.data[0].attributes.aadharNo;
                    state.isPolice = action.payload.data[0].attributes.isPolice;
                    state.stationId = action.payload.data[0].attributes.stationId;
                    state.message = "Login Successful";

                    localStorage.setItem("profile", JSON.stringify({ ...action.payload.data[0].attributes }));
                } 
                // If user does not exists and Invalis Credentials
                else {
                    state.requestStatus = REQUEST_STATUS_FAILED;
                    state.message = "Invalid Credentials";
                }

                // console.log("action.payload", action.payload);
            })
            .addCase(login.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.payload.error.message
            })

    }

});

export const {logout,resetRequestStatus} = globalSlice.actions;

export default globalSlice.reducer;