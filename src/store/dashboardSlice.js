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
    stationFirs: [],
    allFirs: [],
    userProfile: [],
    aadharData: {},
    matchResults: [],
    genderAnalytics: {},
    regionalAnalytics:[],
    yearlyAnalytics: [],
    analytics: {},
    monthlyStatistics: [],
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

export const userRegisteredStatus = createAsyncThunk("/fammilyMember-registered-missing-data-status", async (reqParams) => {
    const response = await API.userRegisteredStatus(reqParams);
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const scanFaceResult = createAsyncThunk("/fammilyMember-registered-s", async (reqParams) => {
    const response = await API.scanFaceResult(reqParams);
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const userProfileData = createAsyncThunk("/user-Profile-Data", async (reqParams) => {
    const response = await API.userProfileData(reqParams);
    return response.data; // response.data is your entire object that is seen in postman as the response
});

export const analyseData = createAsyncThunk('/analyseData', async (formData) => {
    const response = await API.analyseData();
    return response.data; // response.data is your entire object that is seen in postman as the response
});

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: initialState,
    reducers: {
        resetRequestStatus: (state, action) => {
            state.requestStatus = REQUEST_STATUS_IDLE;
            state.message = null;
        },
        setRequestStatus: (state, action) => {
            state.requestStatus = action.payload;
        },
        setMatchResults: (state, action) => {
            state.matchResults = action.payload;
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
                else {
                    state.aadharData = {}
                }
            })
            .addCase(checkAadharDetail.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            // Get User Profile
            .addCase(userProfileData.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(userProfileData.fulfilled, (state, action) => { // action.payload is the response.data

                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.userProfile = action.payload.data.map((userProfile) => {
                    return { ...userProfile.attributes, id: userProfile.id }
                });
            })
            .addCase(userProfileData.rejected, (state, action) => {
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

            // Get Station Firs Launched status
            .addCase(userRegisteredStatus.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(userRegisteredStatus.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.stationFirs = action.payload.data.map((missingPersonProfile) => {
                    return { ...missingPersonProfile.attributes, id: missingPersonProfile.id }
                });
            })
            .addCase(userRegisteredStatus.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            //Scan Face Result
            .addCase(scanFaceResult.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(scanFaceResult.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.matchResults = action.payload.data.map((missingPersonProfile) => {
                    return { ...missingPersonProfile.attributes, id: missingPersonProfile.id }
                });
            })
            .addCase(scanFaceResult.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })

            //Analytics
            .addCase(analyseData.pending, (state, action) => {
                state.requestStatus = REQUEST_STATUS_LOADING;
            })
            .addCase(analyseData.fulfilled, (state, action) => { // action.payload is the response.data
                state.requestStatus = REQUEST_STATUS_SUCCEEDED;
                state.genderAnalytics = action.payload.data.genderAnalytics
                state.regionalAnalytics = action.payload.data.regionalAnalytics
                state.yearlyAnalytics = action.payload.data.yearlyAnalytics
                state.analytics = action.payload.data.analytics
                state.monthlyStatistics = action.payload.data.monthlyStatistics
            })
            .addCase(analyseData.rejected, (state, action) => {
                state.requestStatus = REQUEST_STATUS_FAILED;
                state.message = action.error.message
            })
    }

});

export const { resetRequestStatus, setMatchResults, setRequestStatus } = dashboardSlice.actions;

export default dashboardSlice.reducer;