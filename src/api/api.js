import axios from "axios";
import HOST from "./host";

// Axios Instance တည်ဆောက်ခြင်း
const api = axios.create({
  baseURL: `${HOST}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;