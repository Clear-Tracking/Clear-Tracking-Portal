import axios from "axios";

const env = {
    "local": "http://localhost:1337/api",
    "prod": ""
}

const API = axios.create({
    baseURL: env.local,
});

// // //* Adding Authorization Token in req.headers
// API.interceptors.request.use((req) => {
//     // if Profile Exists
//     if (localStorage.getItem("profile")) {
//         const token = JSON.parse(localStorage.getItem("profile")).access_token;
//         req.headers.authorization = `Bearer ${token}`;
//     }
//     return req;
// })


export const welcome = () => API.get("/");

// Authentication APIs
export const login = (requestData) => API.get(`/user-details?${requestData.queryParams}`);
export const signUp = (formData) => API.post(`/user-details`, formData);

// FIR APIs
export const getAllFirsLaunched = (count=25) => API.get(`/reoprt-firs?filters[found]=false&filters[isLaunched]=true&pagination[limit]=${count}&populate=personpic`);
export const getStationFirsLaunched = (reqParams) => API.get(`/reoprt-firs?filters[found]=false&filters[isLaunched]=true&filters[stationId]=${reqParams.stationId}&pagination[limit]=${reqParams.count}&populate=personpic`);
export const getStationFirsNotLaunched = (reqParams) => API.get(`reoprt-firs?filters[found]=false&filters[stationId][$eq]=${reqParams.stationId}&filters[isLaunched][$eq]=false&pagination[limit]=${reqParams.count}&populate=personpic`);
export const createFir = (formData) => API.post(`/reoprt-firs`, formData);
export const updateFir = (id,formData) => API.put(`/reoprt-firs/${id}`, formData);
export const foundPerson = (id,formData) => API.put(`/reoprt-firs/${id}`, formData);
export const foundPersonsData = (reqParams) => API.get(`/reoprt-firs?filters[found]=true&filters[isLaunched]=true&filters[stationId]=${reqParams.stationId}&pagination[limit]=${reqParams.count}&populate=personpic`);
export const checkAadharDetail = (requestData) => API.get(`/aadhars?filters[AadharNo]=${requestData.AadharNo}`);
export const userRegistered = (reqParams) => API.get(`/reoprt-firs?filters[found]=false&filters[familyRegisteredAadhar]=${reqParams.familyRegisteredAadhar}&pagination[limit]=${reqParams.count}&populate=personpic`);

