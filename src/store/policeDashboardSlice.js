import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    REQUEST_STATUS_LOADING,
    REQUEST_STATUS_SUCCEEDED,
    REQUEST_STATUS_FAILED,
    REQUEST_STATUS_IDLE,
    CUSTOM_ERROR_MESSAGE
} from "../constants/Constants";
import { backendURl } from "../constants/Constants";
import * as API from "../api";

const initialState = {
    requestStatus: REQUEST_STATUS_LOADING,
    stationFirs: [],
    allFirs: [],
    aadharData: {},
    message: null
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

export const createFir = createAsyncThunk("/create-fir", async (formData) => {
    const response = await API.createFir(formData)
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const updateFir = createAsyncThunk("/update-fir", async ({ id, formData }) => {
    const response = await API.updateFir(id, formData)
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const foundPerson = createAsyncThunk("/found-fir", async ({ id, formData }) => {
    const response = await API.foundPerson(id, formData)
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const foundPersonsData = createAsyncThunk("/found-person-data", async (reqParams) => {
    const response = await API.foundPersonsData(reqParams);
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const checkAadharDetail = createAsyncThunk("/get-aadhar-data", async (reqParams) => {
    const response = await API.checkAadharDetail(reqParams);
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const userRegistered = createAsyncThunk("/fammilyMember-registered-missing-data", async (reqParams) => {
    const response = await API.userRegistered(reqParams);
    return response.data; // response.data is your entire object that is seen in postman as the response
});



const policeDashboardSlice = createSlice({
    name: "policeDashboard",
    initialState: initialState,
    reducers: {
        resetRequestStatus: (state, action) => {
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
                state.allFirs = action.payload.data.map((fir) => {
                    return { ...fir.attributes, id: fir.id }
                });
            })
            .addCase(getAllFirsLaunched.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            // Get Station Firs Launched
            .addCase(getStationFirsLaunched.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(getStationFirsLaunched.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.stationFirs = action.payload.data.map((fir) => {
                    return { ...fir.attributes, id: fir.id }
                });
            })
            .addCase(getStationFirsLaunched.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            // Get Station Firs Not Launched
            .addCase(getStationFirsNotLaunched.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(getStationFirsNotLaunched.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.stationFirs = action.payload.data.map((fir) => {
                    return { ...fir.attributes, id: fir.id }
                });
            })
            .addCase(getStationFirsNotLaunched.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            //create FIR
            .addCase(createFir.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(createFir.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.message = "Form Submitted"
            })
            .addCase(createFir.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                // console.log(action)
                state.message = action.error.message
            })

            //update FIR
            .addCase(updateFir.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(updateFir.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.message = "FIR Launched"
            })
            .addCase(updateFir.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            //found FIR
            .addCase(foundPerson.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(foundPerson.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.message = "Person Found Recorded"
            })
            .addCase(foundPerson.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            // Get Station Firs Launched
            .addCase(foundPersonsData.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(foundPersonsData.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.stationFirs = action.payload.data.map((fir) => {
                    return { ...fir.attributes, id: fir.id }
                });
            })
            .addCase(foundPersonsData.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            // Get Aadhar Details
            .addCase(checkAadharDetail.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(checkAadharDetail.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                if (action.payload.data.length > 0) {
                    const aadharData = action.payload.data[0];
                    state.aadharData = { ...aadharData.attributes, id: aadharData.id }
                }
                else{
                    state.aadharData = {}
                }
            })
            .addCase(checkAadharDetail.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            // Get Station Firs Launched
            .addCase(userRegistered.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(userRegistered.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.stationFirs = action.payload.data.map((missingPersonProfile) => {
                    return { ...missingPersonProfile.attributes, id: missingPersonProfile.id }
                });
            })
            .addCase(userRegistered.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })
    }

});

export const { resetRequestStatus } = policeDashboardSlice.actions;

export default policeDashboardSlice.reducer;