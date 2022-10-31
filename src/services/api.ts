import axios from "axios";
const token = window.localStorage.getItem("Token");
const Api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",

  timeout: 5000,
});
export default Api;
