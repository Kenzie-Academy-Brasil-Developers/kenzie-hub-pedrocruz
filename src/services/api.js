import axios from "axios";
const token = window.localStorage.getItem("Token");
const Api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  timeout: 5000,
});
export default Api;
