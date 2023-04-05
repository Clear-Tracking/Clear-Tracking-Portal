import axios from "axios";

const env = {
    "local": "http://localhost:1337",
    "prod": ""
}

const API = axios.create({
    baseURL: env[process.env.NEXT_PUBLIC_CURRENT_ENV]
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
export const signIn = (formData) => API.post("/login", formData);
export const signOut = () => API.get("/logout");
export const signUp = (formData) => API.post("/register", formData);

export const getAllDatasets = () => API.get("/get-datasets");
export const uploadDataset = (formData) => API.post("/upload-dataset",formData);
export const exportDataset = (formData) => API.post("/export-dataset",formData);
export const deleteDataset = (formData) => API.post("/delete-dataset",formData);
export const renameDataset = (formData) => API.post("/rename-dataset",formData);


