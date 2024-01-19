import axios from "axios";
const baseUrl = "http://127.0.0.1:5000"
const api = axios.create({
  baseURL: `${baseUrl}/api`,
});
export default api;