import axios from "axios";

const env = {
    "local": "http://localhost:1337/api",
    "prod": ""
}

const API = axios.create({
    baseURL: env.local,
});

// //* Adding Authorization Token in req.headers
API.interceptors.request.use((req) => {
    // if Profile Exists
    if (localStorage.getItem("profile")) {
        const token = JSON.parse(localStorage.getItem("profile")).access_token;
        req.headers.authorization = `Bearer ${token}`;
    }
    return req;
})


export const welcome = () => API.get("/");

// Authentication APIs
export const login = (requestData) => API.get(`/user-details?${requestData.queryParams}`);


