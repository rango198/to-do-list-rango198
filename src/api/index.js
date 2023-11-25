import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
axios.defaults.baseURL = BASE_URL;

export function fetchInfo(path) {
  return axios.get(path).then((response) => response.data);
}
