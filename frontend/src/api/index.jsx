import axios from "axios";
const baseUrl = "https://tasker-seven-beryl.vercel.app"
const api = axios.create({
  baseURL: `${baseUrl}/api`,
});
export default api;